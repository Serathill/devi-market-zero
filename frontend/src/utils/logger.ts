/**
 * @file Centralized logger module.
 *
 * This module provides a single point for logging across the application.
 * By centralizing the logger, we can easily extend it to send logs
 * to an external service (e.g., Sentry, LogRocket) without refactoring
 * every call site.
 * 
 * This logger now sends logs to a backend service that stores them in files
 * in the logs directory, organized by date.
 */

/**
 * Sends a log to the backend logging service
 * 
 * @param {string} level - The log level (info, warn, error)
 * @param {string} message - The message to log
 * @param {object} [context] - Optional context data
 */
const sendLogToServer = async (level: string, message: string, context?: object): Promise<void> => {
  try {
    await fetch('http://localhost:3002/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level,
        message,
        context,
      }),
    });
  } catch (error) {
    // Fallback to console if server logging fails
    console.error('Failed to send log to server:', error);
  }
};

const logger = {
  /**
   * Logs informational messages. Use this for general application flow events,
   * such as component mounting, user actions, or API call initiations.
   * 
   * @param {string} message - The main message to log.
   * @param {object} [context] - Optional. An object containing additional context (e.g., component name, state).
   */
  info: (message: string, context?: object): void => {
    // Always log to console in development
    if (import.meta.env.DEV) {
      console.log(
        `%c[INFO] %c${message}`,
        'color: blue; font-weight: bold;',
        'color: black;',
        context || ''
      );
    }
    
    // Always send to server for file logging
    sendLogToServer('info', message, context);
  },

  /**
   * Logs warning messages. Use this for non-critical issues that might
   * indicate a problem but do not break the application, e.g., an API
   * returning an unexpected data format or a deprecated prop being used.
   * 
   * @param {string} message - The warning message.
   * @param {object} [context] - Optional. An object with relevant context.
   */
  warn: (message: string, context?: object): void => {
    // Always log to console in development
    if (import.meta.env.DEV) {
      console.warn(
        `%c[WARN] %c${message}`,
        'color: orange; font-weight: bold;',
        'color: black;',
        context || ''
      );
    }
    
    // Always send to server for file logging
    sendLogToServer('warn', message, context);
  },

  /**
   * Logs critical errors. This should be used inside `catch` blocks for
   * failed API calls or other critical failures that impact functionality.
   * 
   * @param {unknown} error - The Error object that was caught.
   * @param {object} [context] - Optional. An object providing context about the operation that failed.
   */
  error: (error: unknown, context?: object): void => {
    // Always log errors to console
    console.error(
      `%c[ERROR]`,
      'color: red; font-weight: bold;',
      context || '',
      error
    );
    
    // Extract error message for server logging
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else {
      try {
        errorMessage = JSON.stringify(error);
      } catch (e) {
        errorMessage = 'Unstringifiable error';
      }
    }
    
    // Send to server for file logging
    sendLogToServer('error', errorMessage, {
      ...context,
      stack: error instanceof Error ? error.stack : undefined
    });
  },
};

export default logger; 