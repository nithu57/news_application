import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { articles } from '../data/articles';

// Simulated popularity score based on a random value (in a real app, this would come from the backend)
const getPopularArticles = () => {
  return [...articles]
    .map(article => ({
      ...article,
      popularity: Math.random() * 1000
    }))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
};

export function PopularNews() {
  const popularArticles = getPopularArticles();

  return (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Stories</h2>
        <p className="text-gray-600">Discover the most read articles from our community</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}