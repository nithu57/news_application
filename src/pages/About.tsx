import React from 'react';
import { Newspaper, Users, Globe, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About NewsHub</h2>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-8">
            NewsHub is your trusted source for the latest news and stories from around the world. 
            We deliver accurate, timely, and engaging content across various categories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Newspaper className="h-8 w-8 text-blue-600" />,
                title: 'Quality Journalism',
                description: 'Committed to delivering accurate and unbiased news coverage'
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Global Community',
                description: 'Connecting readers and stories from around the world'
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: 'Wide Coverage',
                description: 'Comprehensive coverage across multiple categories'
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'Trust & Reliability',
                description: 'Verified sources and fact-checked content'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-8">
            To provide reliable, engaging, and accessible news coverage that empowers our readers 
            to stay informed and make better decisions in their daily lives.
          </p>
        </div>
      </div>
    </div>
  );
}