# Utilities

This directory contains utility functions that are used across the application. These are generally pure, stateless functions that perform specific tasks.

## Available Utilities

### `logger.ts`

A centralized logging utility for consistent logging across the application.

**Features:**
- Color-coded log levels: `info`, `warn`, and `error`
- Contextual logging with additional metadata
- Environment-aware (only logs info and warnings in development)

**Usage:**
```typescript
import logger from '../utils/logger';

// Basic logging
logger.info('User logged in');

// Logging with context
logger.error(error, { 
  context: 'authentication', 
  userId: user.id 
});
```

### `performance.ts`

Utilities for monitoring and optimizing application performance.

**Features:**
- `measureRenderTime`: Track component render time
- `useTrackRenders`: Monitor component re-renders and identify what triggered them
- `measureExecutionTime`: Measure function execution time and warn about slow operations

**Usage:**
```typescript
import { 
  measureRenderTime, 
  useTrackRenders, 
  measureExecutionTime 
} from '../utils/performance';

// In a component
useEffect(() => {
  measureRenderTime('MyComponent');
}, []);

// Track re-renders
useTrackRenders('MyComponent', { count, name });

// Measure function performance
const result = measureExecutionTime(
  () => expensiveCalculation(data), 
  'expensiveCalculation'
);
```

## Adding New Utilities

When adding new utility functions:

1. Group related functions in a single file with a clear name
2. Export individual functions, not a default object
3. Include proper TypeScript types
4. Add JSDoc comments for each exported function
5. Write tests in a corresponding `.test.ts` file 