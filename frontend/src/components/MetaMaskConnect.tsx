import React from "react";
import { useWeb3 } from "../contexts/Web3Context";

/**
 * A component to handle MetaMask wallet connection.
 *
 * It uses the Web3Context to manage connection state and actions,
 * displaying appropriate UI based on connection status.
 *
 * @returns {React.ReactElement} The MetaMask connection component.
 */
const MetaMaskConnect: React.FC = () => {
  const { account, connect, isConnecting, error, isMetaMaskInstalled } = useWeb3();

  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const NotInstalled = () => (
    <div className="text-red-500 text-sm font-semibold p-2 bg-red-100 border border-red-300 rounded-lg">
      MetaMask nu este instalat!
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-2">
      {!isMetaMaskInstalled && <NotInstalled />}

      {isMetaMaskInstalled && !account && (
        <button
          onClick={connect}
          disabled={isConnecting}
          className={`
            bg-gradient-to-r from-orange-500 to-yellow-500 text-white 
            px-5 py-2.5 rounded-lg shadow-lg 
            ${isConnecting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 transition-transform'} 
            font-bold
          `}
          aria-label="Connect MetaMask wallet"
        >
          {isConnecting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Se conectează...
            </span>
          ) : (
            "Conectare Portofel"
          )}
        </button>
      )}

      {isMetaMaskInstalled && account && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-base border border-green-200">
          Conectat: <span className="font-mono font-bold">{formatAddress(account)}</span>
        </div>
      )}

      {error && <div className="text-red-500 text-sm mt-2" role="alert">{error}</div>}
    </div>
  );
};

export default MetaMaskConnect;
