# Pages

This directory contains "smart" or "container" components that correspond to a specific route in the application.

**Key Principles:**

- **Route-specific:** Each component here typically represents a full page view (e.g., Home Page, Product List Page).
- **Data Fetching:** This is where data fetching is initiated. Pages use custom hooks (like `useFetch`) and services (`src/services/`) to get the data they need.
- **State Management:** They manage the state relevant to the page and pass it down as props to the presentational components in `src/components/`.

Files are named in `PascalCase.tsx` and are lazy-loaded in `App.tsx` to improve performance through code-splitting.

## Available Pages

- **`HomePage.tsx`**: The main landing page of the application, providing an entry point and overview.
- **`ProductListPage.tsx`**: Displays a grid or list of all available products, with controls for pagination.
- **`ProductDetailPage.tsx`**: Shows the detailed view for a single product, identified by its ID in the route.
- **`ScanProductPage.tsx`**: Provides an interface for users to enter a product barcode and find the corresponding product details.
- **`CartPage.tsx`**: Displays the contents of the shopping cart, allowing users to review items, update quantities, and proceed to checkout.
- **`AboutPage.tsx`**: A static page containing information about the DeviMarket Zero project.
