import React, { memo } from "react";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "../types/product";

/**
 * A card component to display a summary of a product.
 *
 * It links to the product's detail page and shows the product's
 * image, name, and price. It's memoized to prevent unnecessary re-renders.
 *
 * @param {ProductCardProps} props The properties for the product card.
 * @returns {React.ReactElement} The product card component.
 */
const ProductCard: React.FC<ProductCardProps> = memo(({
  id,
  name,
  price,
  currency,
  image_url,
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Imagine+Indisponibila';
    e.currentTarget.onerror = null; 
  };

  return (
    <Link to={`/products/${id}`} className="block group h-full">
      <div className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
        <div className="w-full h-48 flex items-center justify-center mb-4">
          <img
            src={image_url || 'https://via.placeholder.com/300x300?text=Imagine+Indisponibila'}
            alt={name}
            className="max-w-full max-h-full object-contain"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-indigo-800 group-hover:text-pink-600 transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-xl font-bold text-gray-800 mt-2">{price.toFixed(2)} {currency}</p>
        </div>
      </div>
    </Link>
  );
});

/**
 * Custom comparison function for ProductCard memo
 * Only re-render if any of the display properties change
 */
const areEqual = (prevProps: ProductCardProps, nextProps: ProductCardProps) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.name === nextProps.name &&
    prevProps.price === nextProps.price &&
    prevProps.currency === nextProps.currency &&
    prevProps.image_url === nextProps.image_url
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ProductCard, areEqual);
