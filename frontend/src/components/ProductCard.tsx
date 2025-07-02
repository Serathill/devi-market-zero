import React, { memo } from "react";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "../types/product";
import { measureRenderTime } from "../utils/performance";
import { useEffect } from "react";

/**
 * A card component to display a summary of a product.
 *
 * It links to the product's detail page and shows the product's
 * image, name, and price. It's memoized to prevent unnecessary re-renders.
 *
 * @param {ProductCardProps} props The properties for the product card.
 * @returns {React.ReactElement} The product card component.
 */
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  currency,
  image_url,
}) => {
  // In development, measure the render time
  useEffect(() => {
    measureRenderTime(`ProductCard-${id}`);
  }, [id]);

  const placeholderImage = (
    <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4 text-gray-500 rounded">
      Imagine indisponibilă
    </div>
  );

  return (
    <Link to={`/products/${id}`} className="block group">
      <div className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col">
        {image_url ? (
          <img
            src={image_url}
            alt={name}
            className="w-full h-48 object-contain mb-4"
          />
        ) : (
          placeholderImage
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-indigo-800 group-hover:text-pink-600 transition-colors">{name}</h3>
        </div>
        <p className="text-xl font-bold text-gray-800 mt-2">{price} {currency}</p>
      </div>
    </Link>
  );
};

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
