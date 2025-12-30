// src/components/common/Toast.jsx

import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Toast = () => {
  const { showToast: cartToast, setShowToast: setCartToast } = useCart();
  const { showToast: wishlistToast, setShowToast: setWishlistToast } = useWishlist();
  
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (cartToast) {
      addToast(cartToast);
      setCartToast(null);
    }
  }, [cartToast, setCartToast]);

  useEffect(() => {
    if (wishlistToast) {
      addToast(wishlistToast);
      setWishlistToast(null);
    }
  }, [wishlistToast, setWishlistToast]);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts(prev => [...prev, { ...toast, id }]);
    
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastStyles = (type) => {
    const baseStyles = 'bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-lg shadow-2xl min-w-[320px] animate-slide-in-right border-l-4';
    
    const typeStyles = {
      success: 'border-green-500',
      error: 'border-red-500',
      info: 'border-blue-500',
      warning: 'border-yellow-500',
    };
    
    return `${baseStyles} ${typeStyles[type] || typeStyles.info}`;
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 max-w-md">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={getToastStyles(toast.type)}
          onClick={() => removeToast(toast.id)}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">
              {toast.type === 'success' && '✓'}
              {toast.type === 'error' && '✕'}
              {toast.type === 'info' && 'ℹ'}
              {toast.type === 'warning' && '⚠'}
            </span>
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;