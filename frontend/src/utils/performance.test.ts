import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { measureRenderTime, useTrackRenders, measureExecutionTime } from './performance';
import logger from './logger';

// Mock the logger
vi.mock('./logger', () => ({
  default: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

// Mock requestAnimationFrame
window.requestAnimationFrame = vi.fn((callback) => {
  callback(0);
  return 0;
});

// Mock performance.now()
let performanceNowValue = 0;
window.performance.now = vi.fn(() => {
  performanceNowValue += 50; // Increment by 50ms each call
  return performanceNowValue;
});

describe('Performance utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    performanceNowValue = 0;

    // Mock import.meta.env.DEV
    vi.stubGlobal('import', {
      meta: {
        env: {
          DEV: true,
        },
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('measureRenderTime', () => {
    it('should log render time', () => {
      measureRenderTime('TestComponent');
      
      expect(logger.info).toHaveBeenCalledWith(
        'Component TestComponent rendered in 50.00ms',
        expect.objectContaining({
          component: 'TestComponent',
          renderTime: 50,
        })
      );
    });

    it('should warn for slow renders', () => {
      // Make performance.now return a large value for the second call
      performanceNowValue = 100; // First call will return 100
      
      measureRenderTime('SlowComponent');
      
      expect(logger.warn).toHaveBeenCalledWith(
        'Slow render detected for SlowComponent',
        expect.objectContaining({
          component: 'SlowComponent',
          renderTime: expect.any(Number),
        })
      );
    });
  });

  describe('useTrackRenders', () => {
    it('should track re-renders and changed dependencies', () => {
      // First render
      const { rerender } = renderHook(
        (props) => useTrackRenders('TestComponent', props), 
        { initialProps: { count: 1, name: 'test' } }
      );
      
      // Should not log first render
      expect(logger.info).not.toHaveBeenCalled();
      
      // Second render with changed props
      rerender({ count: 2, name: 'test' });
      
      // Should log the re-render with changed deps
      expect(logger.info).toHaveBeenCalledWith(
        'Component TestComponent re-rendered (count: 2)',
        expect.objectContaining({
          component: 'TestComponent',
          renderCount: 2,
          changedDependencies: expect.arrayContaining(['count']),
        })
      );
      
      // Third render with no changed props
      rerender({ count: 2, name: 'test' });
      
      // Should log re-render with no changed deps
      expect(logger.info).toHaveBeenCalledWith(
        'Component TestComponent re-rendered (count: 3)',
        expect.objectContaining({
          changedDependencies: 'none or untracked',
        })
      );
    });
  });

  describe('measureExecutionTime', () => {
    it('should measure function execution time', () => {
      // Reset performance mock
      performanceNowValue = 0;
      
      const testFn = vi.fn().mockReturnValue('result');
      const result = measureExecutionTime(testFn, 'testFunction');
      
      // Should return the function result
      expect(result).toBe('result');
      
      // Should log the execution time
      expect(logger.info).toHaveBeenCalledWith(
        'Function testFunction executed in 50.00ms',
        expect.objectContaining({
          function: 'testFunction',
          executionTime: 50,
        })
      );
    });

    it('should warn for slow function execution', () => {
      // Make performance.now return values that exceed the threshold
      performanceNowValue = 0; // First call will return 0
      
      const slowFn = () => {
        // Simulate slow function by advancing performanceNowValue
        performanceNowValue = 150; // Second call will return 200 (0+150+50)
        return 'slow result';
      };
      
      measureExecutionTime(slowFn, 'slowFunction', 100);
      
      // Should warn about slow execution
      expect(logger.warn).toHaveBeenCalledWith(
        'Slow function execution detected for slowFunction',
        expect.objectContaining({
          function: 'slowFunction',
          executionTime: expect.any(Number),
          threshold: 100,
        })
      );
    });
  });
}); 