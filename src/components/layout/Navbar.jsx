// src/components/layout/Navbar.jsx

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();
  const { getWishlistCount } = useWishlist();
  const { toggleTheme, isDark } = useTheme();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/wishlist', label: 'Wishlist', icon: '❤️', badge: getWishlistCount() },
    { path: '/cart', label: 'Cart', icon: '🛒', badge: getCartCount() },
  ];

  return (
    <header className="sticky top-0 z-[1000] bg-black/95 dark:bg-black/95 backdrop-blur-xl border-b border-red-900/20">
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-black text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl">🛍️</span>
            ShopEase
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-white/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                  {link.icon && <span className="text-lg">{link.icon}</span>}
                  {link.badge > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-primary/15 rounded-lg transition-all text-xl hover:scale-105"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-transparent transition-all ${
                isMenuOpen ? 'gap-0' : ''
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white rounded-full transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-white/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                  </span>
                  {link.badge > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;