import React from 'react';
import { Newspaper } from 'lucide-react';

interface HeaderProps {
  currentPage: 'latest' | 'popular' | 'about';
  onPageChange: (page: 'latest' | 'popular' | 'about') => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const navItems = [
    { id: 'latest', label: 'Latest' },
    { id: 'popular', label: 'Popular' },
    { id: 'about', label: 'About' }
  ] as const;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NewsHub</h1>
          </div>
          <nav className="flex gap-6">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onPageChange(id)}
                className={`text-${currentPage === id ? 'blue-600 font-semibold' : 'gray-600'} 
                  hover:text-gray-900 transition-colors`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}