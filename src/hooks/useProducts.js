// src/hooks/useProducts.js

import { useState, useEffect, useCallback } from 'react';
import { fetchProducts, fetchLimitedProducts } from '../services/api';
import { getProductImage } from '../utils/imageMapper';

export const useProducts = (limit = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = limit 
        ? await fetchLimitedProducts(limit)
        : await fetchProducts();
      
      // Enhance products with better images
      const enhancedProducts = data.map((product, index) => ({
        ...product,
        image: getProductImage(product, index),
        originalImage: product.image,
      }));
      
      setProducts(enhancedProducts);
    } catch (err) {
      setError(err.message);
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { products, loading, error, refetch: loadProducts };
};