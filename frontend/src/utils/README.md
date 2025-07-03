# Utils

This directory contains utility functions that are pure, reusable, and not specific to any single component. These functions help to keep the codebase DRY (Don't Repeat Yourself) by abstracting common logic.

## Key Principles

- **Purity**: Utility functions should ideally be pure, meaning their output depends only on their input, and they have no side effects.
- **Generality**: They should be generic enough to be used in different parts of the application.
- **No React Dependencies**: Utilities in this folder should not be React components or hooks. They are plain TypeScript/JavaScript functions.

## Available Utilities

- **`logger.ts`**: Provides a configurable logging utility. It can be set up to log messages at different levels (e.g., info, warn, error) and can be enabled or disabled based on the environment (e.g., only log in development).
- **`performance.ts`**: Contains functions for performance monitoring, such as measuring component render times or API response times.

## When to Create a Utility

If you find yourself writing the same piece of logic in multiple places, it's a good candidate for a utility function. Examples include:

- Formatting dates or currencies.
- Performing complex calculations.
- Interacting with `localStorage`.
- Validating data.

## Adding New Utilities

When adding new utility functions:

1. Group related functions in a single file with a clear name
2. Export individual functions, not a default object
3. Include proper TypeScript types
4. Add JSDoc comments for each exported function
5. Write tests in a corresponding `.test.ts` file
