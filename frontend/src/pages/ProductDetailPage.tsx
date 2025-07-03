import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import type { Product } from '../types/product';

/**
 * Rendează pagina de detalii pentru un produs.
 * 
 * Folosește API-ul pentru a încărca detaliile produsului.
 * 
 * @returns {React.ReactElement} Pagina de detalii a produsului
 */
const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error, getProductById } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id && !loading) {
      setProduct(getProductById(id));
    }
  }, [id, products, loading, getProductById]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[70vh]">
        <svg 
          className="animate-spin h-12 w-12 text-indigo-600" 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
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
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-block">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Eroare la încărcare</h2>
          <p className="text-gray-600">
            {error.message}
          </p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    // Cazul în care încărcarea s-a terminat, nu există eroare, dar produsul nu a fost găsit
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 inline-block">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Produsul nu a fost găsit</h2>
          <p className="text-gray-600">
            ID-ul produsului este invalid sau produsul nu mai există.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
            <img 
              src={product.image_url || '/placeholder-product.jpg'} 
              alt={product.name} 
              className="rounded-lg object-contain w-full h-auto max-h-[400px]"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x400?text=No+Image';
              }}
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
              Cod: {product.id}
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-indigo-700">
                {product.price} {product.currency}
              </span>
              {product.old_price && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  {product.old_price} {product.currency}
                </span>
              )}
            </div>
            
            <div className="prose prose-indigo mb-6">
              <h3 className="text-xl font-bold mb-2">Descriere</h3>
              <p className="text-gray-700">
                {product.description || 'Nu există o descriere disponibilă pentru acest produs.'}
              </p>
            </div>
            
            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Caracteristici</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-6">
              <div className="text-sm text-gray-500 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                {product.stock_quantity !== undefined && product.stock_quantity > 0 ? (
                  <span className="text-green-600">{product.stock_quantity} în stoc</span>
                ) : (
                  <span className="text-red-600">Stoc epuizat</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
