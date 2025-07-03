# Services

This directory contains the application's data-fetching logic. It acts as a bridge between the UI (components and pages) and external APIs.

## Key Principles

- **Separation of Concerns**: The service layer isolates API interactions from the rest of the application. This makes the code easier to test, maintain, and reason about.
- **API Abstraction**: Services abstract away the details of API endpoints, request methods, and data transformation. Components don't need to know _how_ the data is fetched, only _what_ data they are getting.
- **Single Source of Truth**: Each service should be responsible for a specific API resource (e.g., `productService.ts` for products, `userService.ts` for users).

## Available Services

- **`api.ts`**: A centralized Axios instance configured with the base URL for the API. This ensures all requests go to the same place and can have shared configurations (e.g., headers, interceptors).
- **`productService.ts`**: Contains functions for fetching product-related data, such as `getProducts` and `getProductById`.
- **`scanService.ts`**: Handles the logic for scanning products, likely interacting with a specific API endpoint for barcode verification.

## How to Use Services

Services are typically used within pages or custom hooks to fetch data.

**Example (inside a component or hook):**

```tsx
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "../types/product";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const data = await getProducts(controller.signal);
        setProducts(data);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Failed to fetch products:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  // ... render products
}
```
