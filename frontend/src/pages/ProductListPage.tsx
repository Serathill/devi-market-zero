import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PaginationControls from '../components/PaginationControls';
import useFetch from '../hooks/useFetch';
import { getProducts } from '../services/productService';
import type { Product } from '../types/product';
import { PRODUCT_PAGE_LIMIT } from '../constants';

/**
 * Renders a page that displays a list of products with pagination.
 *
 * This page fetches all products from the API, then handles pagination
 * on the client-side. It displays loading and error states during the
 * data fetching process.
 *
 * @returns {React.ReactElement} The product list page component.
 */
const ProductListPage: React.FC = () => {
  const { data: allProducts, loading, error } = useFetch(
    (signal) => getProducts(signal)
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate total pages when allProducts is fetched
  useEffect(() => {
    if (allProducts) {
      setTotalPages(Math.ceil(allProducts.length / PRODUCT_PAGE_LIMIT));
    }
  }, [allProducts]);

  // When the page changes, create the product list for the current page
  useEffect(() => {
    if (allProducts) {
      const start = (currentPage - 1) * PRODUCT_PAGE_LIMIT;
      const end = start + PRODUCT_PAGE_LIMIT;
      setProducts(allProducts.slice(start, end));
    }
  }, [allProducts, currentPage]);

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 pt-12 pb-0">
      {/* Modern visual header */}
      <div className="flex flex-col items-center mb-10">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-4 shadow-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-800 drop-shadow mb-2">Produse</h1>
        <p className="text-gray-600 text-lg text-center max-w-2xl">Descoperă selecția noastră variată de produse, atent alese pentru tine. Bucură-te de oferte speciale și calitate garantată!</p>
      </div>

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
          A apărut o eroare la încărcarea produselor. Vă rugăm să încercați din nou mai târziu.
        </p>
      )}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              currency={product.currency}
              image_url={product.image_url}
            />
          ))
        ) : (
          !loading && !error && (
            <div className="col-span-full text-center text-gray-500 text-xl py-12">
              Nu există produse disponibile.
            </div>
          )
        )}
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
