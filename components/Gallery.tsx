import React from 'react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a", title: "Modern Farmhouse", category: "Quartz" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1576675784201-0e142b423952", title: "Luxury Bath", category: "Marble" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", title: "Outdoor Living", category: "Granite" }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Recent Installations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.id} className="group relative overflow-hidden rounded-lg">
              <img src={p.imageUrl} alt={p.title} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
