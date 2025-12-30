// src/components/products/ProductModal.jsx

import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice } from '../../utils/formatters';
import { getProductGallery } from '../../utils/imageMapper';
import { useImageZoom } from '../../hooks/useImageZoom';
import Button from '../common/Button';

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { isZoomed, zoomPosition, handleMouseMove, handleMouseEnter, handleMouseLeave } = useImageZoom();
  
  const images = getProductGallery(product);
  const currentImage = images[currentImageIndex] || product.image;
  const inWishlist = isInWishlist(product.id);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden aspect-square">
              <div
                className="relative w-full h-full cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-contain p-8 transition-transform duration-200"
                  style={{
                    transform: isZoomed ? 'scale(2)' : 'scale(1)',
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/80 text-white rounded-full hover:bg-black transition-all"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-primary'
                        : 'border-gray-300 dark:border-gray-700 hover:border-primary'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain p-2 bg-white dark:bg-gray-900"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {product.category}
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-xl">⭐</span>
                <span className="font-bold text-lg">{product.rating?.rate || 4.2}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600 dark:text-gray-400">
                {product.rating?.count || 100} reviews
              </span>
            </div>

            {/* Price */}
            <div className="text-4xl font-black text-black dark:text-white">
              {formatPrice(product.price)}
            </div>

            {/* Description */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {product.description || 'No description available.'}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="large"
                className="flex-1"
              >
                Add to Cart
              </Button>
              <button
                onClick={handleToggleWishlist}
                className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 transition-all text-2xl ${
                  inWishlist
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-red-600 hover:border-red-600 hover:text-white'
                }`}
                aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;