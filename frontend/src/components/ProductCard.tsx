import React from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, currency, image }) => {
  return (
    <div className="bg-white shadow p-4 rounded text-center">
      <img
        src={image || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-blue-600 font-bold">
        {price} {currency}
      </p>
    </div>
  );
};

export default ProductCard;
