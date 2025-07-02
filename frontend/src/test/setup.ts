import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Define globals for the test environment
import.meta.env.DEV = true;

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});

// Silence react act() warnings - can help for some edge cases in testing
// @ts-expect-error Setting IS_REACT_ACT_ENVIRONMENT for React 18
window.IS_REACT_ACT_ENVIRONMENT = true;

// Mock matchMedia which is not available in JSDOM
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() {
        return false;
      },
    };
  };
} 