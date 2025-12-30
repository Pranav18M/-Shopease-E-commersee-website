// src/hooks/useCart.js

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

/**
 * Custom hook to use Cart context
 * This is a wrapper around useContext for better reusability
 * @returns {Object} Cart context value
 */
export const useCartHook = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCartHook must be used within CartProvider');
  }
  
  return context;
};

// You can also export it as default
export default useCartHook;