import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url?: string;
  brand: string;
  category: string;
  subCategory: string;
}

const HomePage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError("");
    axios.get("https://devi-market-zero-ypueen.2ky31l-1.deu-c1.eu1.cloudhub.io/api/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch(() => setError("A apărut o eroare la încărcarea produselor."))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    if (!search.trim()) {
      setFilteredProducts([]);
      return;
    }
    const term = search.trim().toLowerCase();
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.subCategory.toLowerCase().includes(term)
    );
    setFilteredProducts(results);
  };

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 py-16 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 mb-8 drop-shadow-lg text-center">
        Bine ai venit la Acasa
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-10 text-center max-w-2xl">
        Caută rapid produsele dorite sau explorează ofertele noastre speciale!
      </p>
      <form onSubmit={handleSearch} className="w-full max-w-xl flex items-center gap-2 bg-white/80 rounded-2xl shadow-lg p-4 mb-12">
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
      {/* Rezultate căutare */}
      <div className="w-full max-w-5xl mx-auto">
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
        {searched && !loading && !error && filteredProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">Rezultate căutare</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </>
        )}
        {searched && !loading && !error && filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 text-xl py-12">
            Nu există produse care să corespundă căutării.
          </div>
        )}
        {!loading && !error && allProducts.length === 0 && (
          <div className="text-center text-gray-500 text-xl py-12">
            Nu există produse disponibile.
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage; 