import React from 'react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=987&auto=format&fit=crop", title: "Modern Farmhouse Kitchen", category: "White Quartz" },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=2072&auto=format&fit=crop", title: "Luxury Master Bath", category: "Carrara Marble" },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", title: "Outdoor Entertainment", category: "Leathered Granite" }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Our Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold-500 text-sm font-medium">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
