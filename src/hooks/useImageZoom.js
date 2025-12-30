// src/hooks/useImageZoom.js

import { useState, useCallback } from 'react';

export const useImageZoom = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
  }, []);

  return {
    isZoomed,
    zoomPosition,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};