// src/utils/constants.js

export const API_CONFIG = {
  BASE_URL: 'https://fakestoreapi.com',
  ENDPOINTS: {
    PRODUCTS: '/products',
    CATEGORIES: '/products/categories',
    PRODUCT_BY_ID: (id) => `/products/${id}`,
    PRODUCTS_BY_CATEGORY: (category) => `/products/category/${category}`,
  },
};

export const CATEGORIES = [
  { value: '', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'jewelery', label: 'Jewelry' },
  { value: "men's clothing", label: "Men's Clothing" },
  { value: "women's clothing", label: "Women's Clothing" },
];

export const SORT_OPTIONS = [
  { value: '', label: 'Sort by' },
  { value: 'low-high', label: 'Price: Low to High' },
  { value: 'high-low', label: 'Price: High to Low' },
  { value: 'az', label: 'Name: A to Z' },
  { value: 'za', label: 'Name: Z to A' },
];

export const COLORS = {
  PRIMARY: '#C9A05C',
  PRIMARY_DARK: '#A88544',
  PRIMARY_LIGHT: '#E0B870',
  GOLD: '#D4AF37',
  BURGUNDY: '#8B0000',
};

export const SHIPPING_CONFIG = {
  FREE_SHIPPING_THRESHOLD: 1500, // in INR
  SHIPPING_COST: 99, // in INR
};

export const PAGINATION_CONFIG = {
  INITIAL_PRODUCTS: 12,
  PRODUCTS_PER_PAGE: 8,
};

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
};

export const LOCAL_STORAGE_KEYS = {
  CART: 'shopease-cart',
  WISHLIST: 'shopease-wishlist',
  THEME: 'shopease-theme',
};