/**
 * @file Defines the type for a Product.
 */

/**
 * Represents a product in the market.
 */
export interface Product {
  id: string | number;
  name: string;
  price: number;
  currency: string;
  description?: string;
  image_url?: string;
  category?: string;
  subCategory?: string;
  brand?: string;
  stock_quantity?: number;
  in_stock?: boolean;
  rating?: number;
  attributes?: Record<string, string>;
  tags?: string[];
  old_price?: number;
  features?: string[];
  barcodes?: string[];
}

/**
 * Props for the ProductCard component.
 * Contains a subset of the full Product fields.
 */
export type ProductCardProps = Omit<Product, 'description' | 'features' | 'stock_quantity' | 'old_price' | 'category' | 'subCategory' | 'brand' | 'attributes' | 'tags' | 'barcodes'>; 