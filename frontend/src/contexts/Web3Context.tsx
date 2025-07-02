import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import logger from '../utils/logger';

/**
 * Interface for the Web3 context state.
 */
interface Web3ContextState {
  account: string | null;
  isConnecting: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  isMetaMaskInstalled: boolean;
}

/**
 * Props for the Web3Provider component.
 */
interface Web3ProviderProps {
  children: ReactNode;
}

// Create the context with a default value
const Web3Context = createContext<Web3ContextState | undefined>(undefined);

/**
 * Custom hook to access the Web3 context.
 * 
 * @returns {Web3ContextState} The Web3 context state.
 * @throws {Error} If used outside of a Web3Provider.
 */
export const useWeb3 = (): Web3ContextState => {
  const context = useContext(Web3Context);
  
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  
  return context;
};

/**
 * Provider component for the Web3 context.
 * Manages Web3 state and connection logic for the application.
 * 
 * @param {Web3ProviderProps} props - The provider props.
 * @returns {React.ReactElement} The provider component.
 */
export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const isMetaMaskInstalled = typeof window !== 'undefined' && !!window.ethereum;

  // Handle account changes from MetaMask
  useEffect(() => {
    if (!isMetaMaskInstalled) {
      logger.warn('MetaMask is not installed');
      return;
    }

    const handleAccountsChanged = (accounts: unknown) => {
      const accountList = accounts as string[];
      if (accountList.length > 0) {
        logger.info('MetaMask account changed', { account: accountList[0] });
        setAccount(accountList[0]);
        setError(null);
      } else {
        logger.info('MetaMask disconnected - no accounts available');
        setAccount(null);
      }
    };

    // Check for existing connection
    window.ethereum?.request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err: unknown) => {
        logger.error(err, { context: 'eth_accounts request' });
      });

    // Subscribe to account changes
    window.ethereum?.on?.('accountsChanged', handleAccountsChanged);

    // Subscribe to chain changes
    window.ethereum?.on?.('chainChanged', () => {
      logger.info('MetaMask chain changed, reloading page');
      window.location.reload();
    });

    // Cleanup listeners on unmount
    return () => {
      logger.info('Cleaning up MetaMask event listeners');
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [isMetaMaskInstalled]);

  /**
   * Connect to MetaMask wallet.
   */
  const connect = async (): Promise<void> => {
    if (!isMetaMaskInstalled) {
      const errorMsg = 'MetaMask is not installed';
      logger.warn(errorMsg);
      setError(errorMsg);
      return;
    }

    setIsConnecting(true);
    setError(null);
    
    try {
      logger.info('Requesting MetaMask connection');
      const accounts = await window.ethereum?.request({ 
        method: 'eth_requestAccounts' 
      }) as string[];
      
      if (accounts && accounts.length > 0) {
        logger.info('MetaMask connected successfully', { account: accounts[0] });
        setAccount(accounts[0]);
      } else {
        throw new Error('No accounts found');
      }
    } catch (err) {
      logger.error(err, { context: 'MetaMask connection' });
      
      // Handle user rejection
      const error = err as { code?: number, message?: string };
      if (error.code === 4001) {
        setError('Connection rejected by user');
      } else {
        setError(error.message || 'Failed to connect to MetaMask');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  /**
   * Disconnect from MetaMask (for UI purposes only).
   * Note: This doesn't actually disconnect the wallet, as MetaMask doesn't support this.
   * It just clears the local state.
   */
  const disconnect = (): void => {
    logger.info('Disconnecting from MetaMask (UI only)');
    setAccount(null);
  };

  // Provide the Web3 context
  const value: Web3ContextState = {
    account,
    isConnecting,
    error,
    connect,
    disconnect,
    isMetaMaskInstalled
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context; 