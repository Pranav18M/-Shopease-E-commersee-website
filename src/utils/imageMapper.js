// src/utils/imageMapper.js

/**
 * High-quality image URLs mapped by category and product ID
 * Using Unsplash for better product images
 */

const UNSPLASH_BASE = 'https://images.unsplash.com/photo-';

// Category-based image collections
const IMAGE_COLLECTIONS = {
  electronics: [
    `${UNSPLASH_BASE}1505740420928-5e560c06d30e?w=800&q=80`, // Headphones
    `${UNSPLASH_BASE}1498049794561-7780e7231661?w=800&q=80`, // Laptop
    `${UNSPLASH_BASE}1546868871-7041f2a55e12?w=800&q=80`, // Smartwatch
    `${UNSPLASH_BASE}1572635196237-14b3f281503f?w=800&q=80`, // Phone
    `${UNSPLASH_BASE}1593642532842-98d0fd5ebc1a?w=800&q=80`, // Laptop 2
    `${UNSPLASH_BASE}1484704849700-f032a568e944?w=800&q=80`, // Camera
  ],
  jewelery: [
    `${UNSPLASH_BASE}1515562141207-7a88fb7ce338?w=800&q=80`, // Ring
    `${UNSPLASH_BASE}1611652022419-a9419f74343d?w=800&q=80`, // Necklace
    `${UNSPLASH_BASE}1603561596112-0a132b757442?w=800&q=80`, // Bracelet
    `${UNSPLASH_BASE}1506630448388-4e683c67ddb0?w=800&q=80`, // Earrings
  ],
  "men's clothing": [
    `${UNSPLASH_BASE}1620799140408-edc6dcb850d9?w=800&q=80`, // T-shirt
    `${UNSPLASH_BASE}1594938298603-c8148c4dae35?w=800&q=80`, // Jacket
    `${UNSPLASH_BASE}1591047139829-d91aecb6caea?w=800&q=80`, // Jeans
    `${UNSPLASH_BASE}1602810318383-e386cc2a3ccf?w=800&q=80`, // Shirt
    `${UNSPLASH_BASE}1620012253295-c15cc3e65df4?w=800&q=80`, // Hoodie
  ],
  "women's clothing": [
    `${UNSPLASH_BASE}1515372039744-b8f02a3ae446?w=800&q=80`, // Dress
    `${UNSPLASH_BASE}1539008835657-9e8e9680c956?w=800&q=80`, // Top
    `${UNSPLASH_BASE}1612423284934-2850a4ea6b0f?w=800&q=80`, // Jacket
    `${UNSPLASH_BASE}1596783074918-c84cb06531ca?w=800&q=80`, // Summer dress
  ],
};

// Multiple images per product (for gallery feature)
const PRODUCT_IMAGE_GALLERY = {
  electronics: [
    [
      `${UNSPLASH_BASE}1505740420928-5e560c06d30e?w=800&q=80`,
      `${UNSPLASH_BASE}1545127398-14699f92334b?w=800&q=80`,
      `${UNSPLASH_BASE}1484704849700-f032a568e944?w=800&q=80`,
    ],
  ],
  jewelery: [
    [
      `${UNSPLASH_BASE}1515562141207-7a88fb7ce338?w=800&q=80`,
      `${UNSPLASH_BASE}1535632066927-ab7c9ab60908?w=800&q=80`,
      `${UNSPLASH_BASE}1611652022419-a9419f74343d?w=800&q=80`,
    ],
  ],
  "men's clothing": [
    [
      `${UNSPLASH_BASE}1620799140408-edc6dcb850d9?w=800&q=80`,
      `${UNSPLASH_BASE}1594938298603-c8148c4dae35?w=800&q=80`,
      `${UNSPLASH_BASE}1591047139829-d91aecb6caea?w=800&q=80`,
    ],
  ],
  "women's clothing": [
    [
      `${UNSPLASH_BASE}1515372039744-b8f02a3ae446?w=800&q=80`,
      `${UNSPLASH_BASE}1539008835657-9e8e9680c956?w=800&q=80`,
      `${UNSPLASH_BASE}1612423284934-2850a4ea6b0f?w=800&q=80`,
    ],
  ],
};

/**
 * Get high-quality image for a product
 * @param {Object} product - Product object
 * @param {number} index - Product index in list
 * @returns {string} Image URL
 */
export const getProductImage = (product, index = 0) => {
  if (!product) return '';
  
  const category = product.category;
  const images = IMAGE_COLLECTIONS[category];
  
  if (images && images.length > 0) {
    // Use modulo to cycle through images if index exceeds array length
    return images[index % images.length];
  }
  
  // Fallback to original image
  return product.image;
};

/**
 * Get multiple images for product gallery
 * @param {Object} product - Product object
 * @returns {Array} Array of image URLs
 */
export const getProductGallery = (product) => {
  if (!product) return [];
  
  const category = product.category;
  const galleries = PRODUCT_IMAGE_GALLERY[category];
  
  if (galleries && galleries.length > 0) {
    // Return first gallery set for this category
    return galleries[0];
  }
  
  // Fallback to original image as single image array
  return [product.image];
};

/**
 * Preload images for better performance
 * @param {Array} imageUrls - Array of image URLs
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Get optimized image URL with size params
 * @param {string} url - Original image URL
 * @param {number} width - Desired width
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized image URL
 */
export const getOptimizedImage = (url, width = 800, quality = 80) => {
  if (!url) return '';
  
  // If it's an Unsplash URL, add optimization params
  if (url.includes('unsplash.com')) {
    const hasParams = url.includes('?');
    return `${url}${hasParams ? '&' : '?'}w=${width}&q=${quality}&auto=format`;
  }
  
  return url;
};