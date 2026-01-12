import React from 'react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=987&auto=format&fit=crop",
    title: "Modern Farmhouse Kitchen",
    category: "White Quartz"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1576675784201-0e142b423952?q=80&w=2072&auto=format&fit=crop",
    title: "Luxury Master Bath",
    category: "Carrara Marble"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Outdoor Entertainment",
    category: "Leathered Granite"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1034&auto=format&fit=crop",
    title: "Waterfall Island",
    category: "Calacatta Quartz"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1540932296774-74d6c48e58a7?q=80&w=1858&auto=format&fit=crop",
    title: "Commercial Bar Top",
    category: "Black Granite"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    title: "Contemporary Condo",
    category: "Soapstone"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Our Latest Projects</h2>
            <p className="text-stone-600 text-lg">Browse our portfolio of custom installations across Georgia.</p>
          </div>
          {/* Optional filter buttons could go here */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-500 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</span>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
