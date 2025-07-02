# Contexts

This directory contains React Context providers and their associated hooks for managing global state in the application.

## Available Contexts

### Web3Context

`Web3Context` provides a centralized way to manage MetaMask wallet connection state and operations throughout the application.

**Features:**
- Connection state management (`account`, `isConnecting`, `error`)
- MetaMask detection
- Account connection and disconnection
- Automatic account change detection
- Error handling for common wallet scenarios

#### Usage

1. Wrap your application with the `Web3Provider`:

```tsx
import { Web3Provider } from './contexts/Web3Context';

function App() {
  return (
    <Web3Provider>
      <YourApp />
    </Web3Provider>
  );
}
```

2. Use the `useWeb3` hook in any component that needs access to the wallet state:

```tsx
import { useWeb3 } from '../contexts/Web3Context';

function YourComponent() {
  const { 
    account, 
    connect, 
    isConnecting, 
    error, 
    isMetaMaskInstalled 
  } = useWeb3();
  
  // Now you can use these values and functions in your component
  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connect} disabled={isConnecting}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
```

## When to Use Context

Context is ideal for:
- Authentication state
- Theme/preferences
- Application-wide settings
- Localization
- Feature flags

For state that changes frequently or is only needed by a few components, consider:
- Local component state with `useState`
- Lifting state up to a common parent
- Using a custom hook
- For complex, frequently changing state, consider Zustand or Jotai

## Testing Contexts

Each context has a corresponding test file that:
- Verifies the provider renders correctly
- Tests hook behavior
- Mocks external dependencies
- Verifies state changes

Run context tests with:

```bash
npm test src/contexts
```

## Benefits of Using Context

- **Centralized State Management**: Avoids prop drilling and provides a single source of truth for related state.
- **Reusable Logic**: Encapsulates complex logic into a reusable provider and hook.
- **Cleaner Components**: Components only need to import the hook, keeping them cleaner and more focused.
- **Consistent Behavior**: Ensures consistent behavior across all components that need the same functionality.

According to the project's coding standards, React Context should be used for global state that does not change often. For state that is more dynamic, prefer a lightweight state management library like Zustand or Jotai to avoid potential performance issues. 