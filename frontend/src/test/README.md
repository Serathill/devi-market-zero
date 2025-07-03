# Testing

This directory contains configuration and setup files for the project's testing environment. The testing framework used is [Vitest](https://vitest.dev/), a modern, fast, and feature-rich test runner built on top of Vite.

## Key Files

- **`setup.ts`**: This file is used to configure or set up the testing environment before any tests are run. It's the perfect place to:
  - Extend Vitest's `expect` with custom matchers (e.g., from `@testing-library/jest-dom`).
  - Set up global mocks or polyfills.
  - Clean up the DOM after each test to ensure test isolation.

## Running Tests

Tests are co-located with the source code they are testing (e.g., `ComponentName.test.tsx` lives alongside `ComponentName.tsx`).

You can run tests in several ways:

- **Run all tests:**

  ```bash
  npm test
  ```

- **Run tests for a specific directory:**

  ```bash
  npm test src/components
  ```

- **Run tests for a single file:**

  ```bash
  npm test src/components/Header.test.tsx
  ```

- **Run in watch mode:**
  ```bash
  npm test -- --watch
  ```

## Testing Philosophy

- **Unit Tests**: Test individual components, hooks, or utility functions in isolation.
- **Integration Tests**: Test how multiple components work together.
- **End-to-End (E2E) Tests**: Not configured in this project, but would test the full application flow from a user's perspective.

The project primarily uses `@testing-library/react` to write tests that resemble how users interact with the application, focusing on behavior rather than implementation details.
