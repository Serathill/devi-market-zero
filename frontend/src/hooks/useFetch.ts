import { useState, useEffect, useCallback } from 'react';
import logger from '../utils/logger';
import axios from 'axios';

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
 * A custom hook to handle asynchronous data fetching with cancellation.
 * It manages loading, error, and data states, and uses an AbortController
 * to cancel fetches when the component unmounts.
 *
 * @template T The expected type of the data to be fetched.
 * @param {(signal: AbortSignal) => Promise<T>} asyncFunction - The async function, which now receives an AbortSignal.
 * @param {boolean} [immediate=true] - Whether to execute immediately.
 * @returns {{ data: T | null, loading: boolean, error: Error | null, execute: () => void }}
 */
function useFetch<T>(
  asyncFunction: (signal: AbortSignal) => Promise<T>,
  immediate = true
) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(
    async (signal: AbortSignal) => {
      setState((prevState) => ({ ...prevState, loading: true, error: null }));
      logger.info('Starting fetch operation', {
        functionName: asyncFunction.name || 'anonymous',
      });

      try {
        const responseData = await asyncFunction(signal);
        // Only update state if the request was not aborted
        if (!signal.aborted) {
          logger.info('Fetch operation completed successfully');
          setState({ data: responseData, loading: false, error: null });
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          logger.warn('Fetch operation was cancelled by cleanup.', {
            functionName: asyncFunction.name || 'anonymous',
          });
        } else if (!signal.aborted) {
          const error = err instanceof Error ? err : new Error('An unknown error occurred.');
          logger.error(error, { context: 'useFetch' });
          setState({ data: null, error, loading: false });
        }
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      const controller = new AbortController();
      execute(controller.signal);

      // Cleanup function to abort the request if the component unmounts
      return () => {
        controller.abort();
      };
    }
  }, [execute, immediate]);

  const manualExecute = () => {
    const controller = new AbortController();
    execute(controller.signal);
  };

  return { ...state, execute: manualExecute };
}

export default useFetch; 