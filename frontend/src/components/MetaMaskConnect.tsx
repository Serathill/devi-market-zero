import React, { useEffect, useState } from "react";


declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}

const MetaMaskConnect: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accountsRaw) => {
          const accounts = accountsRaw as string[];
          if (accounts.length > 0) setAccount(accounts[0]);
        });

      // Listen for account changes
      window.ethereum.on?.("accountsChanged", (accountsRaw: unknown) => {
        const accounts = accountsRaw as string[];
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setError(null);
        } else {
          setAccount(null);
        }
      });
    }
  }, []);

  const handleConnect = async () => {
    setError(null);
    if (!window.ethereum) {
      setError("MetaMask is not installed. Please install MetaMask browser extension!");
      return;
    }
    try {
      const accountsRaw = await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = accountsRaw as string[];
      setAccount(accounts[0]);
    } catch (err) {
      
      if (typeof err === "object" && err !== null && "code" in err) {
        
        if ((err as { code?: number }).code === 4001) {
          setError("Connection cancelled by user.");
        } else {
          setError("Could not connect to MetaMask.");
        }
      } else {
        setError("Could not connect to MetaMask.");
      }
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {!window.ethereum && (
        <span className="text-red-500 text-sm">
          MetaMask is not installed. Please install MetaMask browser extension!
        </span>
      )}

      {window.ethereum && !account && (
        <button
          onClick={handleConnect}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow transition"
        >
          Connect Wallet
        </button>
      )}

      {window.ethereum && account && (
        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded">
          Connected: <span className="font-mono">{account.slice(0, 6)}...{account.slice(-4)}</span>
        </div>
      )}

      {error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
};

export default MetaMaskConnect;
