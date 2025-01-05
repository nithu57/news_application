import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Article } from '../types/news';
import { NewsImage } from './NewsImage';
import { formatDate } from '../utils/date';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  const formattedDate = formatDate(article.publishedAt);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <NewsImage
        src={article.imageUrl}
        alt={article.title}
        category={article.category}
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="inline-flex items-center gap-1">
            <User size={16} />
            {article.author}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={16} />
            {formattedDate}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
        <button 
          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          onClick={() => {/* TODO: Implement read more functionality */}}
        >
          Read More →
        </button>
      </div>
    </div>
  );
}