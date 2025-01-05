export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
}

export type Category = 'all' | 'technology' | 'business' | 'sports' | 'health' | 'entertainment';