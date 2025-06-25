// src/pages/ProductListPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import PaginationControls from '../components/PaginationControls';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string;
}

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async (page: number = 1, limit: number = 8) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/marketplace/products', {
        params: { page, limit },
      });

      setProducts(response.data.items); // adaptează dacă API-ul returnează alt format
      setTotalPages(response.data.totalPages || 1);
      setTotalCount(response.data.totalCount || 0);
    } catch (err: any) {
      setError('A apărut o eroare la încărcarea produselor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Produse disponibile</h1>

      {loading && <p className="text-center">Se încarcă...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductListPage;
