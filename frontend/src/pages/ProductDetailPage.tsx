import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import axios from "axios";

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

// Produs mock pentru testare locală
const mockProduct: Product = {
  id: "123",
  name: "Mock Product",
  description: "This is a detailed mock description.",
  price: 4500,
  currency: "RON",
  category: "Electronice",
  subCategory: "Laptopuri",
  brand: "Dell",
  stock_quantity: 12,
  image_url: "https://via.placeholder.com/400x300?text=Mock+Product",
  attributes: {
    Procesor: "Intel i7",
    RAM: "16GB",
    SSD: "512GB",
  },
  tags: ["laptop", "dell", "premium"],
};

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
        // Folosește mock-ul pentru id === "123"
        if (productId === "123") {
          setTimeout(() => {
            setProduct(mockProduct);
            setLoading(false);
          }, 800);
          return;
        }

        // Codul de mai jos se va folosi când backendul este funcțional
        // const response = await axios.get(`/api/marketplace/products/${productId}`);
        // setProduct(response.data);

        // Temporar, simulăm eroare dacă id ≠ 123
        setError("Product not found");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) return <div className="text-center mt-10">🔄 Loading product details...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/products" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="bg-white shadow rounded-lg p-6">
        {product.image_url && (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full max-h-[300px] object-contain mb-4"
          />
        )}
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-xl font-semibold mb-4">
          {product.price} {product.currency}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Sub-Category:</strong> {product.subCategory}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>In Stock:</strong> {product.stock_quantity}</p>
        </div>

        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-1">Attributes</h2>
          <ul className="list-disc list-inside">
            {Object.entries(product.attributes).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="bg-gray-200 text-sm px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
