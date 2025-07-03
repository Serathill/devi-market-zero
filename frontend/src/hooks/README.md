# Hooks

This directory contains custom React Hooks that encapsulate reusable stateful logic. Hooks allow us to extract component logic into reusable functions, making our components cleaner and more maintainable.

## Key Principles

- **Single Responsibility**: Each hook should have a single, well-defined purpose (e.g., `useFetch` for data fetching, `useLocalStorage` for persisting state).
- **Naming Convention**: Hooks should always start with the `use` prefix (e.g., `useFetch`).
- **Reusability**: Design hooks to be generic and reusable across different components.
- **Documentation**: All hooks must have JSDoc comments explaining their purpose, parameters, and return values.

## Available Hooks

- **`useFetch.ts`**: A custom hook for fetching data from an API. It handles loading, error, and data states, and includes an abort controller to prevent race conditions and memory leaks.

## How to Create a Custom Hook

1.  Create a new file in this directory, named `useYourHookName.ts`.
2.  Define a function that starts with `use`.
3.  Inside the hook, you can use other built-in hooks like `useState`, `useEffect`, `useCallback`, etc.
4.  Return the state and any functions that the component will need to interact with it.

## Testing Hooks

Custom hooks should be tested to ensure they behave as expected. You can use a library like `@testing-library/react-hooks` to test them in isolation.

Run hook tests with:

```bash
npm test src/hooks
```
