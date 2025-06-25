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
      await new Promise((res) => setTimeout(res, 500)); // simulează delay

const fakeData = {
  items: [
    { id: '1', name: 'Laptop Dell XPS 13', price: 4500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Dell+XPS+13' },
    { id: '2', name: 'Telefon iPhone 14', price: 5200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPhone+14' },
    { id: '3', name: 'Căști Bose QC35', price: 1200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Bose+QC35' },
    { id: '4', name: 'Smartwatch Samsung Galaxy', price: 900, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Samsung+Watch' },
    { id: '5', name: 'Monitor LG UltraFine', price: 1700, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=LG+UltraFine' },
    { id: '6', name: 'Tablet iPad Pro', price: 3500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPad+Pro' },
    { id: '7', name: 'Laptop ASUS ZenBook', price: 4000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=ASUS+ZenBook' },
    { id: '8', name: 'Telefon Google Pixel 6', price: 3000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Pixel+6' },
    { id: '9', name: 'Cameră GoPro Hero 9', price: 1400, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=GoPro+Hero+9' },
    { id: '10', name: 'Boxe JBL Charge 5', price: 600, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=JBL+Charge+5' },
  ],
  totalPages: 2,
  totalCount: 20,
};


setProducts(fakeData.items);
setTotalPages(fakeData.totalPages);
setTotalCount(fakeData.totalCount);


    //  setProducts(response.data.items); // adaptează dacă API-ul returnează alt format
    //  setTotalPages(response.data.totalPages || 1);
    //  setTotalCount(response.data.totalCount || 0);
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
