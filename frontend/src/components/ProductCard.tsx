import React from "react";
import { Link } from "react-router-dom";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  currency: string;
  image_url?: string;
};

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  currency,
  image_url,
}) => {
  return (
    <Link to={`/products/${id}`} className="block">
      <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="w-full h-48 object-contain mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4 text-gray-500">
            No Image
          </div>
        )}
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700">{price} {currency}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
