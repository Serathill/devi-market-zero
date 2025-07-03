import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PaginationControls from '../components/PaginationControls';
import { getProducts } from '../services/productService';
import { PRODUCT_PAGE_LIMIT } from '../constants';
import useFetch from '../hooks/useFetch';

/**
 * Rendează o pagină care afișează o listă de produse cu paginare.
 * Suportă filtrarea produselor în funcție de parametrul search din URL.
 *
 * @returns {React.ReactElement} Componenta paginii cu lista de produse.
 */
const ProductListPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = useCallback((signal: AbortSignal) => {
    return getProducts(signal);
  }, []);

  const { data: allProducts, loading, error } = useFetch(fetchProducts);

  const filteredProducts = useMemo(() => {
    if (!allProducts) return [];
    if (!searchQuery) return allProducts;

    const lowercasedQuery = searchQuery.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(lowercasedQuery) ||
      (product.description && product.description.toLowerCase().includes(lowercasedQuery)) ||
      (product.brand && product.brand.toLowerCase().includes(lowercasedQuery)) ||
      (product.category && product.category.toLowerCase().includes(lowercasedQuery))
    );
  }, [allProducts, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = useMemo(() => {
    const total = filteredProducts.length;
    return Math.ceil(total / PRODUCT_PAGE_LIMIT) || 1;
  }, [filteredProducts]);

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCT_PAGE_LIMIT;
    const end = start + PRODUCT_PAGE_LIMIT;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 pt-12 pb-0">
      {/* Modern visual header */}
      <div className="flex flex-col items-center mb-10">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-4 shadow-lg mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>
        </div>
        <h1 className="text-4xl font-extrabold text-indigo-800 drop-shadow mb-2">
          {searchQuery ? `Rezultate pentru "${searchQuery}"` : "Toate Produsele"}
        </h1>
        <p className="text-gray-600 text-lg text-center max-w-2xl">
          {searchQuery
            ? `Am găsit ${filteredProducts.length} produse care se potrivesc căutării tale.`
            : "Descoperă selecția noastră variată de produse, atent alese pentru tine."}
        </p>
      </div>

      {loading && (
        <div className="flex justify-center my-12">
          <svg className="animate-spin h-12 w-12 text-indigo-600" aria-label="Loading spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>
      )}

      {error && (
        <div className="flex justify-center my-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold">{error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Încearcă din nou
            </button>
          </div>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-xl py-12">
                {searchQuery
                  ? `Nu am găsit produse care să corespundă căutării "${searchQuery}".`
                  : "Nu există produse disponibile în acest moment."}
              </div>
            )}
          </div>

          {currentProducts.length > 0 && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductListPage;
