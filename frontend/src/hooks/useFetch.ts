import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import logger from '../utils/logger';

/**
 * Type definition for the useFetch state.
 */
type UseFetchState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

/**
 * Helper function to measure async performance
 */
async function measureAsyncPerformance<T>(fn: () => Promise<T>) {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  const duration = endTime - startTime;
  return { result, duration };
}

/**
 * Custom hook for fetching data with loading and error states.
 * It uses the measureAsyncPerformance utility for performance tracking.
 * 
 * @template T The type of data being fetched.
 * @param {function} asyncFunction The async function that fetches the data.
 * @param {boolean} immediate Whether to call the function immediately. Default is true.
 * @returns {Object} An object containing the data, error, loading state, and an execute function.
 */
function useFetch<T>(
  asyncFunction: (signal: AbortSignal) => Promise<T>,
  immediate = true
) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    error: null,
    loading: immediate,
  });

  const execute = useCallback(
    async (signal: AbortSignal) => {
      setState((prevState) => ({ ...prevState, loading: true, error: null }));

      try {
        // Măsoară performanța operațiunii asincrone
        const { result, duration } = await measureAsyncPerformance(() => 
          asyncFunction(signal)
        );

        // Nu actualizăm starea dacă cererea a fost întreruptă
        if (signal.aborted) {
          logger.info('Request aborted during execution');
          return;
        }

        logger.info('Fetch operation complete', { 
          durationMs: duration,
          functionName: asyncFunction.name || 'anonymous',
        });

        setState({ data: result, error: null, loading: false });
      } catch (err) {
        // Nu actualizăm starea dacă cererea a fost întreruptă sau anulată
        if (signal.aborted) {
          logger.info('Request aborted due to component unmount or manual cancellation');
          return;
        }
        
        if (axios.isCancel(err)) {
          logger.warn('Fetch operation was cancelled by cleanup.', {
            functionName: asyncFunction.name || 'anonymous',
          });
          // Nu setăm starea de eroare pentru cererile anulate
          return;
        } 

        // Generăm un mesaj de eroare ușor de înțeles
        let errorMessage = 'A apărut o eroare la încărcarea datelor.';
        const error = err as Error;
        
        if (error.message && error.message.includes('Network Error') || 
            error.message.includes('timed out') || 
            error.message.includes('ECONNREFUSED')) {
          errorMessage = 'Nu s-a putut conecta la server. Vă rugăm să verificați conexiunea la internet sau contactați administratorul.';
        }

        const enhancedError = new Error(errorMessage);
        
        logger.error('Fetch operation failed', { 
          context: 'useFetch',
          originalError: error.message,
          enhancedError: errorMessage
        });
        
        setState({ data: null, error: enhancedError, loading: false });
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (!immediate) {
      return;
    }
    
    const controller = new AbortController();
    execute(controller.signal);

    // Cleanup function to abort the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, [execute, immediate]);

  const manualExecute = useCallback(() => {
    const controller = new AbortController();
    execute(controller.signal);
    
    // Return a function to allow manual cancellation
    return () => controller.abort();
  }, [execute]);

  return { ...state, execute: manualExecute };
}

export default useFetch; 