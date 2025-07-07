# DeviMarket Zero - React Frontend Technical Documentation

## 1. Introduction & Overall Architecture

This document provides a detailed technical overview of the DeviMarket Zero React frontend application. It is intended for developers, project stakeholders, and future contributors to understand the application's architecture, components, and core functionalities.

The application is a **Single-Page Application (SPA)** built with **React** and bootstrapped by **Vite**. This architecture was chosen for its fast development server, optimized build process, and rich ecosystem.

Key technologies used:

- **React 19**: For building the user interface.
- **Vite**: As the build tool and development server.
- **TypeScript**: For static typing and improved code quality.
- **React Router DOM**: For client-side routing.
- **Tailwind CSS**: For utility-first styling.
- **Axios**: For making HTTP requests to the backend APIs.
- **Vitest & React Testing Library**: For unit and component testing.

## 2. Folder Structure

The `src/` directory is organized by feature and responsibility to ensure a clean and scalable codebase.

- `src/assets/`: Static assets like images and icons.
- `src/components/`: Reusable UI components shared across multiple pages (e.g., `Header`, `Footer`, `ProductCard`).
- `src/constants.ts`: Global constants used throughout the application.
- `src/contexts/`: React Context providers for global state management (`Web3Context`, `ProductContext`, `CartContext`).
- `src/hooks/`: Custom React hooks that encapsulate reusable logic (e.g., `useFetch`).
- `src/pages/`: Top-level page components, each corresponding to a specific route (e.g., `HomePage`, `ProductListPage`).
- `src/services/`: Modules responsible for API communication (`apiClient`, `productService`).
- `src/types/`: TypeScript type definitions and interfaces.
- `src/utils/`: Utility functions, such as the application-wide logger.
- `src/App.tsx`: The root component that sets up the main layout, context providers, and routing.
- `src/main.tsx`: The main entry point of the application.

## 3. State Management

The application employs **React Context API** for global state management, avoiding the need for a larger state management library like Redux for this project's scale.

- **`ProductProvider`**: Manages the state of products fetched from the API.
- **`CartProvider`**: Manages the state of the shopping cart, including adding, removing, and updating items.
- **`Web3Provider`**: Encapsulates all logic related to MetaMask wallet connection, account state, and network changes.

## 4. Routing

Client-side routing is handled by **React Router DOM**. Routes are defined in `src/App.tsx`.

To improve initial load performance, the application uses **code-splitting** on a per-route basis. Page components are loaded lazily using `React.lazy()` and `Suspense`, ensuring that the code for a specific page is only downloaded when the user navigates to it.

A wildcard route (`*`) is configured to redirect any unknown paths back to the homepage, preventing 404 errors within the app.

## 5. API Consumption (MuleSoft Integration)

All interactions with the backend MuleSoft APIs are managed through a centralized service layer.

- **API Client**: A pre-configured **Axios** instance (`src/services/api.ts`) is used for all HTTP requests. This allows for centralizing configurations like the base URL and headers.
- **Product Service**: `src/services/productService.ts` contains functions (`getProducts`, `getProductById`) that abstract the API endpoints for products.
- **Data Fetching**: The custom hook `useFetch` (`src/hooks/useFetch.ts`) is the primary mechanism for fetching data in components. It handles loading states, errors, and cancellation logic automatically.
- **Error Handling**: The service layer includes robust error handling. If the API call fails, `productService` provides a local fallback data set to ensure the application remains functional. The `useFetch` hook further enhances this by catching errors and providing user-friendly error messages.

## 6. Key Components

### `ProductListPage.tsx`

- **Purpose**: Displays a list of all available products.
- **State**: Uses the `useFetch` hook to get the list of products from `productService.getProducts`. Manages loading and error states.
- **Props**: Receives pagination and filter data as props to control the displayed products.
- **Logic**: Maps over the fetched product data and renders a `ProductCard` component for each product.

### `ProductCard.tsx`

- **Purpose**: A reusable component to display a summary of a single product.
- **Props**: Receives a `product` object and displays its image, name, and price.
- **Logic**: Contains a link (`<Link>`) that navigates the user to the `ProductDetailPage` for that specific product.

### `ProductDetailPage.tsx`

- **Purpose**: Shows all details for a single selected product.
- **State**: It extracts the product ID from the URL using `useParams` from React Router and uses `useFetch` to call `productService.getProductById`.
- **Logic**: Displays all product attributes, including description, features, and an "Add to Cart" button.

### `MetaMaskConnect.tsx`

- **Purpose**: The UI component responsible for handling the wallet connection.
- **State**: It uses the `useWeb3` hook to access the account status, connection state, and error messages from `Web3Context`.
- **Logic**:
  - If a wallet is not connected, it displays a "Connect Wallet" button which triggers the `connect` function from the context.
  - If connected, it displays the user's truncated wallet address and a "Disconnect" button.
  - It also handles and displays connection errors provided by the context.

## 7. MetaMask Integration

Wallet integration is managed entirely within `src/contexts/Web3Context.tsx`.

- **Connection**: It detects if the MetaMask extension is installed. The `connect` function prompts the user to connect their wallet via `eth_requestAccounts`.
- **State Synchronization**: The context automatically detects the currently connected account on page load (`eth_accounts`).
- **Event Handling**: It subscribes to `accountsChanged` and `chainChanged` events. This ensures that the application's UI reacts instantly if the user switches accounts or networks in MetaMask.

## 8. Styling with Tailwind CSS

The user interface is styled using **Tailwind CSS**. This utility-first framework allows for rapid development by composing complex components from a set of low-level utility classes directly in the markup. The configuration is located in `tailwind.config.js`.

## 9. Custom Hooks & Utilities

- **`useFetch`**: As described in the API section, this hook is central to our data-fetching strategy, providing a robust, reusable, and error-handled way to get data from the backend.
- **`logger`**: A custom utility in `src/utils/logger.ts` is used for application-wide logging. It provides different log levels (info, warn, error) and can be extended to send logs to an external service in the future.

## 10. Running the Application

Instructions on how to run and build the application are detailed in `documentation/SETUP_REACT_FRONTEND_SPRINT2.md`.

- **Development Mode**: To start the development server with HMR:

  ```bash
  npm run dev
  ```

- **Production Build**: To generate a static, optimized build for deployment:
  ```bash
  npm run build
  ```
  The output will be located in the `dist/` directory, ready to be served by a static host or an application server like NGINX.
