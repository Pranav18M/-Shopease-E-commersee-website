// src/components/common/InfiniteScroll.jsx

import { useEffect, useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import Button from './Button';

const InfiniteScroll = ({ 
  hasMore, 
  loadMore, 
  loading = false,
  threshold = 100,
  children 
}) => {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0, rootMargin: `${threshold}px` }
    );

    const currentTarget = observerTarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loading, loadMore, threshold]);

  return (
    <>
      {children}
      
      {/* Observer target */}
      <div ref={observerTarget} className="w-full h-10" />
      
      {/* Loading indicator */}
      {loading && (
        <div className="py-8">
          <LoadingSpinner size="medium" text="Loading more products..." />
        </div>
      )}
      
      {/* Load more button (fallback) */}
      {!loading && hasMore && (
        <div className="flex justify-center py-8">
          <Button onClick={loadMore} variant="ghost" size="large">
            Load More Products
            <span>↓</span>
          </Button>
        </div>
      )}
      
      {/* End message */}
      {!loading && !hasMore && children && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            You've reached the end! 🎉
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            That's all the products we have for now.
          </p>
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;