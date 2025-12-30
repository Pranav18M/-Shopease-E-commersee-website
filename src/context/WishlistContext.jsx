// src/context/WishlistContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEYS } from '../utils/constants';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem(LOCAL_STORAGE_KEYS.WISHLIST);
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.some(item => item.id === product.id);
      
      if (exists) {
        return prevWishlist;
      }
      
      setShowToast({ message: 'Added to wishlist!', type: 'success' });
      
      return [...prevWishlist, {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        rating: product.rating,
        category: product.category,
      }];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(item => item.id !== productId)
    );
    setShowToast({ message: 'Removed from wishlist', type: 'info' });
  };

  const toggleWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    
    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    setShowToast({ message: 'Wishlist cleared', type: 'info' });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
    isInWishlist,
    getWishlistCount,
    showToast,
    setShowToast,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};