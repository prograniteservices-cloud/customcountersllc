import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Materials', href: '#materials' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold ${isScrolled ? 'text-stone-900' : 'text-white'}`}>Custom Counters<span className="text-gold-500">.</span></a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={`text-sm font-bold uppercase ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'}`}>{link.label}</a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'white'} className="py-2 px-6">Get a Quote</Button>
        </div>
      </div>
    </nav>
  );
};
