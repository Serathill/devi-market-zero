import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import PaginationControls from '../components/PaginationControls';
import MetaMaskConnect from '../components/MetaMaskConnect';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url?: string;
}

const API_URL = "https://devi-market-zero-ypueen.2ky31l-1.deu-c1.eu1.cloudhub.io/api/products";
const LIMIT = 12;

const ProductListPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch toate produsele o singură dată
  useEffect(() => {
    const fetchAllProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(API_URL);
        setAllProducts(response.data); // API returnează direct arrayul
        setTotalPages(Math.ceil(response.data.length / LIMIT));
      } catch {
        setError('A apărut o eroare la încărcarea produselor.');
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  // Când se schimbă pagina, refă lista de produse pentru pagina respectivă
  useEffect(() => {
    const start = (currentPage - 1) * LIMIT;
    const end = start + LIMIT;
    setProducts(allProducts.slice(start, end));
  }, [allProducts, currentPage]);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
      {/* Banner cu wallet */}
      <section className="mb-16 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-12 rounded-lg text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-8 top-8 sm:static sm:mb-6 flex justify-center sm:justify-end">
          <MetaMaskConnect />
        </div>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Bine ai venit la DeviMarket Zero
        </h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed font-light drop-shadow-md">
          Explorează cele mai bune produse din marketplace-ul nostru, cu oferte speciale și selecții atent alese doar pentru tine.
        </p>
      </section>

      {loading && (
        <div className="flex justify-center my-12">
          <svg
            className="animate-spin h-12 w-12 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Loading spinner"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 font-semibold text-lg mb-8">
          {error}
        </p>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            currency={product.currency}
            image_url={product.image_url}
          />
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
