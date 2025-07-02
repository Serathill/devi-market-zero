import { useState, useEffect, useCallback } from 'react';
import logger from '../utils/logger';

/**
 * Interface for the state managed by the `useFetch` hook.
 * @template T - The type of the data being fetched.
 */
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * A custom hook to handle asynchronous data fetching.
 * It manages the loading, error, and data states of an async operation.
 *
 * @template T The expected type of the data to be fetched.
 * @param {() => Promise<T>} asyncFunction - The asynchronous function to execute.
 * @param {boolean} [immediate=true] - Whether to execute the function immediately on mount.
 * @returns {{ data: T | null, loading: boolean, error: Error | null, execute: () => Promise<void> }}
 * The state of the fetch operation (`data`, `loading`, `error`) and a function to manually trigger it.
 */
function useFetch<T>(asyncFunction: () => Promise<T>, immediate = true) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState(prevState => ({ ...prevState, loading: true, error: null }));
    logger.info('Starting fetch operation', { 
      immediate,
      functionName: asyncFunction.name || 'anonymous' 
    });
    
    try {
      const responseData = await asyncFunction();
      logger.info('Fetch operation completed successfully', { 
        functionName: asyncFunction.name || 'anonymous',
        hasData: !!responseData
      });
      setState(prevState => ({ ...prevState, data: responseData, loading: false }));
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unknown error occurred.');
      logger.error(err, { 
        context: 'useFetch',
        functionName: asyncFunction.name || 'anonymous'
      });
      setState(prevState => ({ ...prevState, error, loading: false }));
    }
  }, [asyncFunction, immediate]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { ...state, execute };
}

export default useFetch; 