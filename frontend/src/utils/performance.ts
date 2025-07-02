/**
 * @file Utilities related to performance optimization and monitoring.
 * 
 * This module provides utilities to help improve and monitor the application's performance,
 * such as measuring component render time, tracking expensive operations,
 * and preventing unnecessary re-renders.
 */

import { useRef, useEffect } from 'react';
import logger from './logger';

/**
 * A utility to measure and log component render time in development mode.
 * This should be used inside a useEffect with empty dependencies to measure initial render.
 * 
 * @param {string} componentName - The name of the component being measured
 * @returns {void}
 * 
 * @example
 * // In a component:
 * useEffect(() => {
 *   measureRenderTime('MyComponent');
 * }, []);
 */
export const measureRenderTime = (componentName: string): void => {
  if (import.meta.env.DEV) {
    const startTime = performance.now();
    
    // Use requestAnimationFrame to measure after the browser has painted
    requestAnimationFrame(() => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      logger.info(`Component ${componentName} rendered in ${renderTime.toFixed(2)}ms`, {
        component: componentName,
        renderTime
      });

      // Warn if render time is unusually long (> 50ms is considered slow)
      if (renderTime > 50) {
        logger.warn(`Slow render detected for ${componentName}`, {
          component: componentName,
          renderTime
        });
      }
    });
  }
};

/**
 * A custom hook to track component re-renders and log when they occur.
 * 
 * @param {string} componentName - The name of the component being tracked
 * @param {Record<string, any>} dependencies - An object containing dependencies to track
 * @returns {void}
 * 
 * @example
 * // In a component:
 * const count = useState(0);
 * const name = "example";
 * useTrackRenders('MyComponent', { count, name });
 */
export const useTrackRenders = (
  componentName: string, 
  dependencies?: Record<string, unknown>
): void => {
  // Only run in development
  if (!import.meta.env.DEV) return;
  
  // Use refs to track previous values
  const renderCount = useRef(0);
  const prevDeps = useRef<Record<string, unknown>>({});
  
  useEffect(() => {
    // Increment render count
    renderCount.current += 1;
    
    // Skip logging the initial render
    if (renderCount.current === 1) {
      prevDeps.current = dependencies || {};
      return;
    }
    
    // Find which dependencies changed
    const changedDeps: string[] = [];
    
    if (dependencies) {
      Object.keys(dependencies).forEach(key => {
        if (dependencies[key] !== prevDeps.current[key]) {
          changedDeps.push(key);
        }
      });
      
      // Update previous dependencies
      prevDeps.current = dependencies;
    }
    
    // Log the re-render
    logger.info(
      `Component ${componentName} re-rendered (count: ${renderCount.current})`, 
      { 
        component: componentName, 
        renderCount: renderCount.current,
        changedDependencies: changedDeps.length > 0 ? changedDeps : 'none or untracked'
      }
    );
  });
};

/**
 * Measures the execution time of a function and logs if it exceeds a threshold.
 * 
 * @param {Function} fn - The function to measure
 * @param {string} fnName - The name of the function (for logging)
 * @param {number} [thresholdMs=100] - Threshold in ms above which to log a warning
 * @returns {any} The result of the function
 */
export function measureExecutionTime<T>(
  fn: () => T, 
  fnName: string, 
  thresholdMs = 100
): T {
  // Skip in production
  if (!import.meta.env.DEV) return fn();
  
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  const duration = end - start;
  
  // Always log time for tracking
  logger.info(`Function ${fnName} executed in ${duration.toFixed(2)}ms`, {
    function: fnName,
    executionTime: duration
  });
  
  // Warn if execution time exceeds threshold
  if (duration > thresholdMs) {
    logger.warn(`Slow function execution detected for ${fnName}`, {
      function: fnName, 
      executionTime: duration,
      threshold: thresholdMs
    });
  }
  
  return result;
}

/**
 * A list of common reasons for re-renders, useful for debugging purposes
 */
export const RE_RENDER_REASONS = {
  PROPS_CHANGED: 'props changed',
  STATE_CHANGED: 'state changed',
  PARENT_RERENDER: 'parent re-rendered',
  CONTEXT_CHANGED: 'context value changed',
  HOOK_CHANGED: 'hook dependencies changed',
}; 