/**
 * @file Defines the type for a Product.
 */

/**
 * Represents a product in the market.
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url?: string;
  description?: string;
  category?: string;
  subCategory?: string;
  brand?: string;
  stock_quantity?: number;
  in_stock?: boolean;
  rating?: number;
  attributes?: Record<string, string>;
  tags?: string[];
}

/**
 * Props for the ProductCard component.
 * Contains a subset of the full Product fields.
 */
export type ProductCardProps = Pick<Product, 'id' | 'name' | 'price' | 'currency' | 'image_url'>; 