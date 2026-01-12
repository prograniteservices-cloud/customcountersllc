import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-stone-900 flex">
      <a href="tel:912-443-9976" className="w-full py-4 text-center text-gold-500 font-bold uppercase tracking-widest border-t border-gold-500/20">
        Call for Estimate
      </a>
    </div>
  );
};
