# Contexts

This directory contains React Context providers and their associated hooks for managing global state in the application.

## Available Contexts

### ProductContext

`ProductContext` is responsible for fetching, caching, and providing access to the list of all products available in the store.

**Features:**

- Fetches all products from the API on initial load.
- Provides a `products` array, a `loading` state, and an `error` state.
- Includes a `getProductById` function for easily finding a single product.
- Exposes a `refreshProducts` function to manually trigger a data refetch.

#### Usage

Wrap your application with `ProductProvider` (typically inside `App.tsx`):

```tsx
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      {/* ... other providers and components */}
    </ProductProvider>
  );
}
```

Use the `useProducts` hook to access product data in any component:

```tsx
import { useProducts } from "../contexts/ProductContext";

function ProductList() {
  const { products, loading, error } = useProducts();
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // ... render products
}
```

### CartContext

`CartContext` manages all aspects of the user's shopping cart. It handles adding, removing, and updating items, and persists the cart's state to `localStorage`.

**Features:**

- Manages an array of `items` in the cart.
- Provides functions to `addToCart`, `removeFromCart`, `updateQuantity`, and `clearCart`.
- Calculates derived state like `totalItems` and `totalPrice` in RON (with currency conversion).
- Persists cart contents to `localStorage` to survive page reloads.

#### Usage

Wrap your application with `CartProvider`:

```tsx
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>{/* ... other providers and components */}</CartProvider>
  );
}
```

Use the `useCart` hook to interact with the cart:

```tsx
import { useCart } from "../contexts/CartContext";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}
```

### Web3Context

`Web3Context` provides a centralized way to manage MetaMask wallet connection state and operations throughout the application.

**Features:**

- Connection state management (`account`, `isConnecting`, `error`)
- MetaMask detection
- Account connection and disconnection
- Automatic account change detection
- Error handling for common wallet scenarios

#### Usage

Wrap your application with the `Web3Provider`:

```tsx
import { Web3Provider } from "./contexts/Web3Context";

function App() {
  return (
    <Web3Provider>
      <YourApp />
    </Web3Provider>
  );
}
```

Use the `useWeb3` hook in any component that needs access to the wallet state:

```tsx
import { useWeb3 } from "../contexts/Web3Context";

function YourComponent() {
  const { account, connect, isConnecting } = useWeb3();
  // ...
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
