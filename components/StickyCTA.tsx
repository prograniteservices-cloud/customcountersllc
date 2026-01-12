import React, { useState, useEffect } from 'react';
import { Phone, Calculator } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      <div className="grid grid-cols-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:912-443-9976"
          className="flex flex-col items-center justify-center bg-white text-stone-900 py-3 px-4 border-t border-stone-200 active:bg-stone-100 transition-colors"
        >
          <Phone size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wide">Call Now</span>
        </a>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center justify-center bg-stone-900 text-gold-500 py-3 px-4 active:bg-stone-800 transition-colors"
        >
          <Calculator size={20} className="mb-1" />
          <span className="text-xs font-bold uppercase tracking-wide">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
