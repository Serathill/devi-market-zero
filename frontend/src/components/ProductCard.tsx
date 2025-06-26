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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={name}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 truncate">{name}</h2>
        <p className="text-blue-600 font-bold text-xl mt-auto">
          {price.toLocaleString()} {currency}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
