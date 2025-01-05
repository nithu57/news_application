import React from 'react';
import { getImageFallback, optimizeImageUrl } from '../utils/image';

interface NewsImageProps {
  src: string;
  alt: string;
  category: string;
}

export function NewsImage({ src, alt, category }: NewsImageProps) {
  const [error, setError] = React.useState(false);
  const imageUrl = error ? getImageFallback(category) : optimizeImageUrl(src);

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-lg">
      <img
        src={imageUrl}
        alt={alt}
        onError={() => setError(true)}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-2 right-2">
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white capitalize">
          {category}
        </span>
      </div>
    </div>
  );
}