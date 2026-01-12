import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white font-serif text-xl mb-4 text-white">Custom Counters<span className="text-gold-500">.</span></p>
        <p>&copy; {new Date().getFullYear()} Custom Counters, LLC. All rights reserved.</p>
        <p className="mt-2 text-sm">Serving Statesboro, Savannah, and surrounding GA areas.</p>
      </div>
    </footer>
  );
};
