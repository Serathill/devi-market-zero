import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { getProducts } from "../services/productService";
import type { Product } from "../types/product";

/**
 * Renders the home page of the application.
 *
 * This page features a search bar to filter products. It fetches all products
 * on mount and then performs a client-side search based on user input.
 *
 * @returns {React.ReactElement} The home page component.
 */
const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");

  const fetchProducts = useCallback((signal: AbortSignal) => {
    return getProducts(signal);
  }, []);

  const { data: allProducts, loading, error } = useFetch(fetchProducts);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searched, setSearched] = useState(false);

  // Display popular products immediately when products are loaded
  useEffect(() => {
    if (allProducts && allProducts.length > 0 && !searched) {
      const popular = allProducts.slice(0, 8); // Show 8 products as featured
      setFilteredProducts(popular);
    }
  }, [allProducts, searched]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    if (!search.trim() || !allProducts) {
      setFilteredProducts([]);
      return;
    }
    const term = search.trim().toLowerCase();
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term) ||
      (product.description && product.description.toLowerCase().includes(term)) ||
      (product.brand && product.brand.toLowerCase().includes(term)) ||
      (product.category && product.category.toLowerCase().includes(term)) ||
      (product.subCategory && product.subCategory.toLowerCase().includes(term))
    );
    setFilteredProducts(results);
  };

  return (
    <section className="min-h-[70vh] bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 mb-8 drop-shadow-lg">
            Bun venit la DeviMarket
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Caută rapid produsele dorite sau explorează ofertele noastre speciale!
          </p>
          <form onSubmit={handleSearch} className="w-full max-w-xl flex items-center gap-2 bg-white/80 rounded-2xl shadow-lg p-4 mx-auto mb-12">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Caută produse, branduri, categorii..."
              className="flex-1 px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition-all text-lg"
            >
              Caută
            </button>
          </form>
        </div>

        {/* Loading State */}
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

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto">
            <p className="text-red-600 font-semibold text-lg mb-4">
              A apărut o eroare la încărcarea produselor.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Încearcă din nou
            </button>
          </div>
        )}

        {/* Products Display */}
        {!loading && !error && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">
              {searched ? "Rezultate căutare" : "Produse populare"}
            </h2>
            
            {/* No Results */}
            {filteredProducts.length === 0 && searched && (
              <div className="text-center text-gray-500 text-xl py-12 bg-white rounded-lg shadow-sm">
                Nu există produse care să corespundă căutării.
              </div>
            )}
            
            {/* Product Grid */}
            {filteredProducts.length > 0 && (
              <>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                  {filteredProducts.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                
                {/* Show "See all products" button when showing popular products */}
                {!searched && (
                  <div className="text-center mt-10">
                    <Link 
                      to="/products" 
                      className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition-all"
                    >
                      Vezi toate produsele
                    </Link>
                  </div>
                )}
                
                {/* Show number of results when searching */}
                {searched && (
                  <div className="text-center mt-8 text-gray-600">
                    {filteredProducts.length} produse găsite
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage; 