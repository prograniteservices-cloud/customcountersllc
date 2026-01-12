import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-stone-900 flex">
      <a href="tel:912-443-9976" className="w-full flex items-center justify-center gap-2 py-4 text-gold-500 font-bold uppercase tracking-widest border-t border-gold-500/20">
        <Phone size={20} /> Call for Estimate
      </a>
    </div>
  );
};
