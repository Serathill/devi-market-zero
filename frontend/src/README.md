# `src` - Application Source Code

This directory is the heart of the **DeviMarket Zero** frontend application. It contains all the client-side source code, including React components, hooks, services, and utilities. All files within this folder are compiled, bundled, and optimized by Vite for the production build.

## Core Architecture

The application follows a modern, feature-driven architecture that emphasizes separation of concerns, reusability, and maintainability.

- **Entry Point**: The application is initialized in `main.tsx`, which renders the root `App` component into the DOM. It also wraps the application in `React.StrictMode` and `<BrowserRouter>` to enable routing.
- **Root Component**: `App.tsx` serves as the primary layout and routing hub. It sets up the main application structure (Header, Main Content, Footer) and defines all client-side routes using `react-router-dom`.
- **Global State**: Global application state is managed through a combination of React Context providers, which are composed in `App.tsx`. This includes providers for Web3 connectivity, product data, and the shopping cart.
- **Code Splitting**: To enhance performance and reduce initial load times, pages are code-split using `React.lazy()` and loaded on demand, with a `Suspense` fallback to handle the loading state.

## Directory Structure

The `src` directory is organized by responsibility, as defined in the project's coding standards:

- **`assets/`**: Static assets like images (SVG, PNG) and other media that are directly imported into the application's components.
- **`components/`**: Reusable, "dumb" presentational components that receive data via props and are used to build pages.
- **`constants.ts`**: Application-wide constants, such as API endpoints, keys, or configuration values, to avoid hardcoded "magic strings."
- **`contexts/`**: React Context providers for managing global or shared state across different parts of the application (e.g., `Web3Context`, `CartContext`).
- **`hooks/`**: Custom React hooks that encapsulate and reuse stateful logic (e.g., `useFetch` for API calls).
- **`pages/`**: "Smart" container components that correspond to a specific application route. These components are responsible for fetching data and managing the state for a particular view.
- **`services/`**: The API interaction layer. Contains functions that abstract away the logic for making network requests to the backend.
- **`test/`**: Test setup and configuration files for the Vitest environment.
- **`types/`**: Shared TypeScript type and interface definitions used across the application.
- **`utils/`**: Pure, non-React utility functions that can be used anywhere in the application (e.g., `logger`, data formatters).
- **`vite-env.d.ts`**: TypeScript declarations for Vite-specific environment variables and global type extensions.
