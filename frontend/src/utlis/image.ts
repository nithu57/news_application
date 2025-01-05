// Image utility functions
export const getImageFallback = (category: string): string => {
  const fallbacks = {
    health: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80',
    technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    business: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80',
    entertainment: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&q=80',
  };
  return fallbacks[category as keyof typeof fallbacks] || fallbacks.technology;
};

export const optimizeImageUrl = (url: string): string => {
  // Add image optimization parameters to Unsplash URLs
  if (url.includes('unsplash.com')) {
    return `${url}&w=800&q=80`;
  }
  return url;
};