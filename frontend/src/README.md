# Source (src)

This is the main directory containing all the source code for the React application. Everything inside this folder is processed by Vite, bundled, and optimized for production.

The structure of this directory is organized by feature/responsibility, following the project's coding standards.

- **`assets/`**: Static assets that are imported into components (e.g., images, custom fonts).
- **`components/`**: Reusable, "dumb" presentational components.
- **`contexts/`**: React Context providers and related hooks.
- **`hooks/`**: Custom React hooks for reusable stateful logic.
- **`pages/`**: "Smart" container components representing application routes.
- **`services/`**: The API interaction layer.
- **`test/`**: Test setup and configuration files.
- **`types/`**: Shared TypeScript type definitions.
- **`utils/`**: Pure, non-React utility functions. 