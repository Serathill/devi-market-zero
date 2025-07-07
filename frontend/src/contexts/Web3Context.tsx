import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
  retryConnect: () => Promise<void>;
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
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  
  // Check if MetaMask is installed with more reliability
  const isMetaMaskInstalled = typeof window !== 'undefined' && 
    (!!window.ethereum?.isMetaMask || !!window.ethereum);

  // Handle account changes from MetaMask
  useEffect(() => {
    if (!isMetaMaskInstalled) {
      logger.warn('MetaMask is not installed');
      return;
    }

    const handleAccountsChanged = (accounts: unknown) => {
      try {
        const accountList = accounts as string[];
        if (accountList && accountList.length > 0) {
          logger.info('MetaMask account changed', { account: accountList[0] });
          setAccount(accountList[0]);
          setError(null);
        } else {
          logger.info('MetaMask disconnected - no accounts available');
          setAccount(null);
        }
      } catch (err) {
        logger.error('Error handling account change', { error: err });
      }
    };

    // Check for existing connection with retry mechanism
    const checkExistingConnection = async (retryCount = 0) => {
      try {
        if (!window.ethereum) {
          throw new Error('Ethereum object not available');
        }
        
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        handleAccountsChanged(accounts);
      } catch (err) {
        logger.error(err, { context: 'eth_accounts request', retryCount });
        
        // Retry logic - wait a bit and try again (up to 3 times)
        if (retryCount < 3) {
          setTimeout(() => {
            checkExistingConnection(retryCount + 1);
          }, 1000 * (retryCount + 1));
        }
      }
    };
    
    checkExistingConnection();

    // Subscribe to account changes - with more error handling
    if (window.ethereum?.on) {
      try {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        
        // Subscribe to chain changes
        window.ethereum.on('chainChanged', () => {
          logger.info('MetaMask chain changed, reloading page');
          window.location.reload();
        });
      } catch (err) {
        logger.error('Error setting up event listeners', { error: err });
      }
    }

    // Cleanup listeners on unmount
    return () => {
      logger.info('Cleaning up MetaMask event listeners');
      if (window.ethereum?.removeListener) {
        try {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        } catch (err) {
          logger.error('Error removing event listeners', { error: err });
        }
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
      
      if (!window.ethereum) {
        throw new Error('Ethereum object not available');
      }
      
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      }) as string[];
      
      if (accounts && accounts.length > 0) {
        logger.info('MetaMask connected successfully', { account: accounts[0] });
        setAccount(accounts[0]);
        setConnectionAttempts(0); // Reset attempts on success
      } else {
        throw new Error('No accounts found');
      }
    } catch (err) {
      logger.error(err, { context: 'MetaMask connection' });
      setConnectionAttempts(prev => prev + 1);
      
      // Handle user rejection
      const error = err as { code?: number, message?: string };
      if (error.code === 4001) {
        setError('Connection rejected by user');
      } else if (error.code === -32002) {
        setError('Connection request already pending. Please check MetaMask extension.');
      } else {
        setError(error.message || 'Failed to connect to MetaMask');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  /**
   * Retry connection with exponential backoff
   */
  const retryConnect = useCallback(async (): Promise<void> => {
    setError(null);
    
    // Only retry if we have had previous failures
    if (connectionAttempts > 0) {
      logger.info(`Retrying MetaMask connection (attempt ${connectionAttempts})`);
      
      // Wait with exponential backoff before retrying
      const backoffTime = Math.min(1000 * (2 ** connectionAttempts), 10000);
      
      setTimeout(() => {
        connect();
      }, backoffTime);
    } else {
      // If no previous attempts, just connect directly
      connect();
    }
  }, [connectionAttempts, connect]);

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
    isMetaMaskInstalled,
    retryConnect
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context; 