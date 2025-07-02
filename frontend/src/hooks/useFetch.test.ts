import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import useFetch from './useFetch';
import { act } from 'react';

// Mock logger to prevent console output during tests
vi.mock('../utils/logger', () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  }
}));

describe('useFetch', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should return loading true initially', async () => {
    const mockAsyncFunction = vi.fn().mockResolvedValue('test data');
    
    const { result } = renderHook(() => useFetch(mockAsyncFunction));
    
    // Initial state
    expect(result.current.loading).toBe(true);
    
    // Wait for the async operation to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should return data after successful fetch', async () => {
    const mockData = { message: 'Success' };
    const mockAsyncFunction = vi.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useFetch(mockAsyncFunction));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
    });
  });

  it('should return error after failed fetch', async () => {
    const mockError = new Error('Fetch failed');
    const mockAsyncFunction = vi.fn().mockRejectedValue(mockError);
    
    const { result } = renderHook(() => useFetch(mockAsyncFunction));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBe(null);
      expect(result.current.error instanceof Error).toBe(true);
      expect(result.current.error?.message).toBe('Fetch failed');
    });
  });

  it('should not fetch immediately if immediate is false', () => {
    const mockAsyncFunction = vi.fn().mockResolvedValue('test data');
    
    const { result } = renderHook(() => useFetch(mockAsyncFunction, false));

    expect(result.current.loading).toBe(false);
    expect(mockAsyncFunction).not.toHaveBeenCalled();
  });

  it('should fetch when execute is called', async () => {
    const mockData = { message: 'Executed' };
    const mockAsyncFunction = vi.fn().mockResolvedValue(mockData);
    
    const { result } = renderHook(() => useFetch(mockAsyncFunction, false));
    
    // Initial state should not be loading
    expect(result.current.loading).toBe(false);

    // Call execute inside act
    await act(async () => {
      result.current.execute();
      // Nu verificăm starea aici, ci doar după ce se completează act()
    });

    // Wait for the operation to complete
    await waitFor(() => {
      expect(mockAsyncFunction).toHaveBeenCalledTimes(1);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.loading).toBe(false);
    });
  });
}); 