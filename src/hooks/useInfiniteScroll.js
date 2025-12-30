// src/hooks/useInfiniteScroll.js

import { useState, useEffect, useCallback } from 'react';
import { PAGINATION_CONFIG } from '../utils/constants';

export const useInfiniteScroll = (allItems = []) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Reset when allItems change (e.g., after filtering)
  useEffect(() => {
    const initialItems = allItems.slice(0, PAGINATION_CONFIG.INITIAL_PRODUCTS);
    setDisplayedItems(initialItems);
    setPage(1);
    setHasMore(allItems.length > PAGINATION_CONFIG.INITIAL_PRODUCTS);
  }, [allItems]);

  const loadMore = useCallback(() => {
    const nextPage = page + 1;
    const startIndex = PAGINATION_CONFIG.INITIAL_PRODUCTS + 
                       (nextPage - 2) * PAGINATION_CONFIG.PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PAGINATION_CONFIG.PRODUCTS_PER_PAGE;
    
    const newItems = allItems.slice(startIndex, endIndex);
    
    if (newItems.length > 0) {
      setDisplayedItems(prev => [...prev, ...newItems]);
      setPage(nextPage);
      setHasMore(endIndex < allItems.length);
    } else {
      setHasMore(false);
    }
  }, [allItems, page]);

  const reset = useCallback(() => {
    const initialItems = allItems.slice(0, PAGINATION_CONFIG.INITIAL_PRODUCTS);
    setDisplayedItems(initialItems);
    setPage(1);
    setHasMore(allItems.length > PAGINATION_CONFIG.INITIAL_PRODUCTS);
  }, [allItems]);

  return {
    displayedItems,
    hasMore,
    loadMore,
    reset,
    totalItems: allItems.length,
    displayedCount: displayedItems.length,
  };
};