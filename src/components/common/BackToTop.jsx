// src/components/common/BackToTop.jsx

import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-black dark:bg-white text-white dark:text-black border-2 border-primary rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center text-2xl hover:scale-110 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;