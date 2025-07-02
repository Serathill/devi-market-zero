import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Web3Provider, useWeb3 } from './Web3Context';

// Test component that uses the Web3 context
function TestComponent() {
  const { account, connect, error, isMetaMaskInstalled } = useWeb3();
  
  return (
    <div>
      <div data-testid="account">{account || 'Not connected'}</div>
      <div data-testid="error">{error || 'No error'}</div>
      <div data-testid="is-installed">{isMetaMaskInstalled ? 'Installed' : 'Not installed'}</div>
      <button data-testid="connect-btn" onClick={connect}>Connect</button>
    </div>
  );
}

describe('Web3Context', () => {
  // Mock ethereum object
  const mockEthereum = {
    request: vi.fn(),
    on: vi.fn(),
    removeListener: vi.fn(),
  };

  // Setup before each test
  beforeEach(() => {
    // Clear mock calls
    vi.clearAllMocks();
    
    // Setup global ethereum object mock
    (window as any).ethereum = mockEthereum;
  });

  // Cleanup after each test
  afterEach(() => {
    delete (window as any).ethereum;
  });

  it('should detect MetaMask installation correctly', () => {
    render(
      <Web3Provider>
        <TestComponent />
      </Web3Provider>
    );
    
    expect(screen.getByTestId('is-installed').textContent).toBe('Installed');
  });

  it('should show not installed when ethereum is not available', () => {
    delete (window as any).ethereum;
    
    render(
      <Web3Provider>
        <TestComponent />
      </Web3Provider>
    );
    
    expect(screen.getByTestId('is-installed').textContent).toBe('Not installed');
  });

  it('should connect to MetaMask when the connect button is clicked', async () => {
    // Setup mock to return an account
    mockEthereum.request.mockResolvedValueOnce(['0x123456789abcdef']);
    
    render(
      <Web3Provider>
        <TestComponent />
      </Web3Provider>
    );
    
    // Initial state
    expect(screen.getByTestId('account').textContent).toBe('Not connected');
    
    // Click connect button
    await act(async () => {
      await userEvent.click(screen.getByTestId('connect-btn'));
    });
    
    // Should have called request with the correct method
    expect(mockEthereum.request).toHaveBeenCalledWith({ 
      method: 'eth_requestAccounts' 
    });
    
    // Account should be updated
    expect(screen.getByTestId('account').textContent).toBe('0x123456789abcdef');
    expect(screen.getByTestId('error').textContent).toBe('No error');
  });

  it('should handle user rejection errors', async () => {
    // Setup mock to throw a user rejection error
    const error = { code: 4001, message: 'User rejected the request' };
    mockEthereum.request.mockRejectedValueOnce(error);
    
    render(
      <Web3Provider>
        <TestComponent />
      </Web3Provider>
    );
    
    // Click connect button
    await act(async () => {
      await userEvent.click(screen.getByTestId('connect-btn'));
    });
    
    // Should show an error
    expect(screen.getByTestId('error').textContent).toBe('Connection rejected by user');
    expect(screen.getByTestId('account').textContent).toBe('Not connected');
  });

  it('should handle general errors', async () => {
    // Setup mock to throw a general error
    const error = new Error('Something went wrong');
    mockEthereum.request.mockRejectedValueOnce(error);
    
    render(
      <Web3Provider>
        <TestComponent />
      </Web3Provider>
    );
    
    // Click connect button
    await act(async () => {
      await userEvent.click(screen.getByTestId('connect-btn'));
    });
    
    // Should show an error
    expect(screen.getByTestId('error').textContent).toBe('Something went wrong');
    expect(screen.getByTestId('account').textContent).toBe('Not connected');
  });
}); 