// src/hooks/useWishlist.js

import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

/**
 * Custom hook to use Wishlist context
 * This is a wrapper around useContext for better reusability
 * @returns {Object} Wishlist context value
 */
export const useWishlistHook = () => {
  const context = useContext(WishlistContext);
  
  if (!context) {
    throw new Error('useWishlistHook must be used within WishlistProvider');
  }
  
  return context;
};

// You can also export it as default
export default useWishlistHook;