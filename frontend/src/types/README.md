# Types

This directory contains shared TypeScript type definitions, interfaces, and enums used throughout the application. Centralizing these types helps maintain consistency and improves code quality by leveraging TypeScript's static analysis capabilities.

## Key Principles

- **Clarity and Precision**: Types should accurately describe the data structures they represent.
- **Reusability**: Define types that can be reused across different parts of the application (e.g., `Product`, `User`).
- **Single Source of Truth**: This directory is the single source of truth for application-wide data structures. Avoid re-defining the same type in multiple places.
- **File Organization**: Group related types into a single file (e.g., all product-related types in `product.ts`).

## Available Type Definitions

- **`product.ts`**: Contains the `Product` interface, which defines the shape of a product object used in the application.
- **`scan.ts`**: Defines types related to the product scanning feature, if any specific types are needed.

## How to Use Types

Import types directly into your components, services, or hooks where they are needed.

**Example:**

```tsx
import { Product } from "../types/product";

interface ProductCardProps extends Product {
  // You can add other props specific to the component
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  // ... component implementation
};
```
