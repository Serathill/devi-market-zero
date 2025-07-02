# Pages

This directory contains "smart" or "container" components that correspond to a specific route in the application.

**Key Principles:**
- **Route-specific:** Each component here typically represents a full page view (e.g., Home Page, Product List Page).
- **Data Fetching:** This is where data fetching is initiated. Pages use custom hooks (like `useFetch`) and services (`src/services/`) to get the data they need.
- **State Management:** They manage the state relevant to the page and pass it down as props to the presentational components in `src/components/`.

Files are named in `PascalCase.tsx`. 