// components/OptimizedImage.jsx
import Image from 'next/image';

export default function OptimizedImage({ src, alt, className, ...props }) {
  // Check if it's an Unsplash image
  const isUnsplash = src.includes('unsplash.com');
  
  if (isUnsplash) {
    // Optimize Unsplash URLs
    const optimizedSrc = src.replace(/(\?.*)/, '?auto=format&fit=crop&w=1600&q=80');
    
    return (
      <Image
        src={optimizedSrc}
        alt={alt}
        className={className}
        {...props}
      />
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
}