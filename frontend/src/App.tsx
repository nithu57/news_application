import React from 'react';
import { Header } from './components/Header';
import { LatestNews } from './pages/LatestNews';
import { PopularNews } from './pages/PopularNews';
import { About } from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'latest' | 'popular' | 'about'>('latest');

  const renderPage = () => {
    switch (currentPage) {
      case 'latest':
        return <LatestNews />;
      case 'popular':
        return <PopularNews />;
      case 'about':
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
    </div>
  );
}