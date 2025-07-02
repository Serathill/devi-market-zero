import React, { useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getProductById } from "../services/productService";

/**
 * Renders the detail page for a single product.
 *
 * It fetches the product data based on the ID from the URL,
 * and displays loading and error states.
 *
 * @returns {React.ReactElement} The product detail page component.
 */
const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const fetchProduct = useCallback((signal: AbortSignal) => {
    if (!productId) {
      // This should not happen if routes are correct, but it's a safe guard.
      return Promise.reject(new Error("Product ID is missing."));
    }
    return getProductById(productId, signal);
  }, [productId]);

  const { data: product, loading, error } = useFetch(fetchProduct, !!productId);

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">
        <svg className="animate-spin h-10 w-10 text-indigo-500 mr-2" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
        <span className="text-lg font-semibold text-gray-500">Se încarcă detalii produs...</span>
      </div>
    );
  if (error)
    return <div className="text-center text-red-600 font-semibold mt-16">Produsul nu a fost găsit sau a apărut o eroare.</div>;
  if (!product) return null;

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-0 px-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start pt-16 pb-20 px-4">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src={product.image_url}
            alt={product.name}
            className="rounded-2xl shadow-2xl w-full max-w-md max-h-[420px] object-contain bg-white mb-6"
          />
          {/* Mock thumbnails (optional, just one for demo) */}
          <div className="flex gap-2 mt-2">
            <img src={product.image_url} alt="thumb" className="w-16 h-16 object-contain rounded-lg border-2 border-indigo-200" />
          </div>
        </div>
        {/* Center: Product Details */}
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-2 drop-shadow-lg">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-2 text-xl font-light max-w-2xl">{product.description}</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg">
            <p className="flex items-center"><span className="inline-block mr-2 opacity-80">📂</span><b>Categoria:</b> {product.category}</p>
            <p className="flex items-center"><span className="inline-block mr-2 opacity-80">🏷️</span><b>Sub-categorie:</b> {product.subCategory}</p>
            <p className="flex items-center"><span className="inline-block mr-2 opacity-80">🏢</span><b>Brand:</b> {product.brand}</p>
            <p className="flex items-center"><span className="inline-block mr-2 opacity-80">📦</span><b>Stoc:</b> {product.stock_quantity} buc</p>
          </div>
          {/* Attributes */}
          <div className="mb-2">
            <h2 className="font-bold text-indigo-800 mb-1 text-lg">Specificații</h2>
            <div className="flex flex-wrap gap-3">
              {product.attributes && Object.entries(product.attributes).map(([key, value]) => (
                value && (
                  <span key={key} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-xl text-base font-medium shadow">
                    {key}: {value}
                  </span>
                )
              ))}
            </div>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-2">
            {product.tags && product.tags.map((tag) => (
              <span key={tag} className="bg-pink-200 text-pink-700 px-4 py-2 rounded-xl text-base font-medium shadow">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Price card and actions */}
        <div className="w-full md:w-1/4 lg:w-1/5 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6 sticky top-28 self-start border border-indigo-100">
          <div className="flex flex-col items-center mb-2">
            <span className="text-3xl font-extrabold text-pink-600 drop-shadow mb-2">
              {product.price} {product.currency}
            </span>
            <span className={`px-4 py-2 rounded-full text-lg font-semibold shadow ${product.stock_quantity && product.stock_quantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
              {product.stock_quantity && product.stock_quantity > 0 ? "În stoc" : "Indisponibil"}
            </span>
          </div>
        </div>
      </div>
      {/* Back button top */}
      <div className="fixed left-8 top-8 z-20">
        <Link
          to="/products"
          className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-xl hover:scale-105 hover:from-pink-500 hover:to-indigo-600 transition-all text-lg"
        >
          ← Înapoi la produse
        </Link>
      </div>
    </section>
  );
};

export default ProductDetailPage;
