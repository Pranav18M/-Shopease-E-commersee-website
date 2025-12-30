// src/services/api.js

import { API_CONFIG } from '../utils/constants';

/**
 * Fetch all products
 * @returns {Promise<Array>} Array of products
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch limited products
 * @param {number} limit - Number of products to fetch
 * @returns {Promise<Array>} Array of products
 */
export const fetchLimitedProducts = async (limit = 6) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS}?limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching limited products:', error);
    throw error;
  }
};

/**
 * Fetch single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCT_BY_ID(id)}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

/**
 * Fetch products by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of products
 */
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PRODUCTS_BY_CATEGORY(category)}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

/**
 * Fetch all categories
 * @returns {Promise<Array>} Array of category names
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};