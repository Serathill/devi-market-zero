import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import axios from "axios";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subCategory: string;
  brand: string;
  stock_quantity: number;
  image_url?: string;
  attributes: Record<string, string>;
  tags: string[];
};

const mockProduct: Product = {
  id: "123",
  name: "Mock Product",
  description: "Acesta este un laptop performant pentru utilizatori exigenți, cu procesor rapid, stocare SSD și design elegant.",
  price: 4500,
  currency: "RON",
  category: "Electronice",
  subCategory: "Laptopuri",
  brand: "Dell",
  stock_quantity: 12,
  image_url: "https://via.placeholder.com/450x300?text=Mock+Product",
  attributes: {
    Procesor: "Intel i7",
    RAM: "16GB",
    SSD: "512GB",
  },
  tags: ["laptop", "dell", "premium"],
};

const iconClass = "inline-block mr-2 opacity-80";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        if (productId === "123") {
          setTimeout(() => {
            setProduct(mockProduct);
            setLoading(false);
          }, 600);
          return;
        }
        // const response = await axios.get(`/api/marketplace/products/${productId}`);
        // setProduct(response.data);
        setError("Produsul nu a fost găsit.");
      } catch  {
        setError("Nu s-au putut încărca detaliile produsului.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

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
    return <div className="text-center text-red-600 font-semibold mt-16">{error}</div>;
  if (!product) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-2">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 mx-auto border border-purple-200 relative">
        {/* Buton back */}
        <Link
          to="/products"
          className="absolute -top-4 left-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:scale-105 hover:from-pink-500 hover:to-indigo-500 transition-all"
        >
          ← Înapoi la produse
        </Link>

        {/* Imagine produs */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="flex-shrink-0 w-full md:w-[380px]">
            <img
              src={product.image_url}
              alt={product.name}
              className="rounded-2xl shadow-xl w-full transition-transform hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* Info produs */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-2 drop-shadow-sm">
              {product.name}
            </h1>
            <p className="text-gray-700 mb-3 text-base">{product.description}</p>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-pink-600 mr-4 drop-shadow">
                {product.price} {product.currency}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                {product.stock_quantity > 0 ? "În stoc" : "Indisponibil"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
              <p><span className={iconClass}>📂</span><b>Categoria:</b> {product.category}</p>
              <p><span className={iconClass}>🏷️</span><b>Sub-categorie:</b> {product.subCategory}</p>
              <p><span className={iconClass}>🏢</span><b>Brand:</b> {product.brand}</p>
              <p><span className={iconClass}>📦</span><b>Stoc:</b> {product.stock_quantity} buc</p>
            </div>

            {/* Atribute */}
            <div className="mb-4">
              <h2 className="font-semibold text-indigo-800 mb-1">Specificații</h2>
              <div className="flex flex-wrap gap-2">
                {Object.entries(product.attributes).map(([key, value]) => (
                  <span key={key} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-xl text-xs font-medium shadow">
                    {key}: {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Taguri */}
            <div>
              <h2 className="font-semibold text-indigo-800 mb-1">Taguri</h2>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
