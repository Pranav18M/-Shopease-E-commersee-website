// src/components/products/ProductCard.jsx

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice } from '../../utils/formatters';
import Button from '../common/Button';
import ProductModal from './ProductModal';

const ProductCard = ({ product, index }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [showModal, setShowModal] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
           <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
              }}
              className="w-full h-80 object-contain p-8 transition-transform duration-300 group-hover:scale-110"
            />
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-lg backdrop-blur-sm border-2 transition-all text-xl ${
              inWishlist
                ? 'bg-red-600 border-red-600 text-white'
                : 'bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white'
            } hover:scale-110`}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            ❤️
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white line-clamp-2 min-h-[3em] leading-snug">
            {product.title}
          </h3>

          {/* Price */}
          <div className="text-2xl font-bold text-black dark:text-white tracking-tight">
            {formatPrice(product.price)}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-yellow-500">⭐</span>
            <span className="font-medium">{product.rating?.rate || 4.2}</span>
            <span>•</span>
            <span>{product.rating?.count || 100} reviews</span>
          </div>

          {/* Actions */}
          <div className="pt-2">
            <Button
              onClick={handleAddToCart}
              variant="primary"
              fullWidth
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;