// src/context/CartContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';
import { calculateCartTotal } from '../utils/formatters';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(LOCAL_STORAGE_KEYS.CART);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      }];
    });
    
    setShowToast({ message: `${product.title} added to cart!`, type: 'success' });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    setShowToast({ message: 'Item removed from cart', type: 'info' });
  };

  const updateQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
    setShowToast({ message: 'Cart cleared', type: 'info' });
  };

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getCartTotal = () => {
    return calculateCartTotal(cart);
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    isInCart,
    showToast,
    setShowToast,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};