import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getProducts } from '../services/productService';
import type { Product } from '../types/product';

type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: Error | null;
  getProductById: (id: string) => Product | undefined;
  refreshProducts: () => Promise<void>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Error loading products:', err);
      setError(err instanceof Error ? err : new Error('Failed to load products'));
    } finally {
      setLoading(false);
    }
  };

  // Încarcă produsele o singură dată la montarea componentei
  useEffect(() => {
    loadProducts();
  }, []);

  const getProductById = (id: string): Product | undefined => {
    return products.find(p => String(p.id) === id);
  };

  const refreshProducts = async () => {
    await loadProducts();
  };

  const value = {
    products,
    loading,
    error,
    getProductById,
    refreshProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 