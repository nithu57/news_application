import React from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { NewsCard } from '../components/NewsCard';
import { Category } from '../types/news';
import { articles } from '../data/articles';

export function LatestNews() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('all');
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const filteredArticles = selectedCategory === 'all'
    ? sortedArticles
    : sortedArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}