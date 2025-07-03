// src/pages/ScanProductPage.tsx
import React, { useState, useCallback, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

/**
 * Renders a page for scanning a product by entering its barcode.
 *
 * This component provides a form to submit a barcode and timestamp.
 * It uses a fetch hook to handle the API call and displays the
 * loading state and server response or error.
 *
 * @returns {React.ReactElement} The scan product page component.
 */
const ScanProductPage: React.FC = () => {
  const [barcode, setBarcode] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchProducts = useCallback((signal: AbortSignal) => getProducts(signal), []);
  const { data: allProducts, loading, error } = useFetch(fetchProducts);

  const foundProduct = useMemo(() => {
    if (!barcode || !allProducts) return null;
    return allProducts.find(p => p.barcodes?.includes(barcode)) || null;
  }, [allProducts, barcode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-800 drop-shadow mb-2">
          Caută Produs după Codul de Bare
        </h1>
        <p className="text-gray-600 text-lg">
          Introduceți codul de bare pentru a găsi rapid un produs.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex items-center gap-2 bg-white/80 rounded-2xl shadow-lg p-4 mx-auto mb-12">
        <input
          type="text"
          value={barcode}
          onChange={(e) => {
            setBarcode(e.target.value);
            setSearched(false);
          }}
          placeholder="Introduceți codul de bare..."
          className="flex-1 px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg bg-white"
          aria-label="Cod de bare"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition-all text-lg"
          disabled={loading}
        >
          {loading ? "Încarc..." : "Caută"}
        </button>
      </form>

      {loading && (
        <div className="text-center text-gray-500">
          Se încarcă lista de produse...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto">
          <p className="text-red-600 font-semibold text-lg mb-4">
            A apărut o eroare la încărcarea produselor: {error.message}
          </p>
        </div>
      )}

      {searched && !loading && (
        <div className="mt-8">
          {foundProduct ? (
            <div>
              <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Produs găsit</h2>
              <div className="max-w-xs mx-auto">
                <ProductCard {...foundProduct} />
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl py-12 bg-white rounded-lg shadow-sm">
              Nu a fost găsit niciun produs cu acest cod de bare.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScanProductPage;
