import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Materials', href: '#materials' },
  { label: 'Services', href: '#services' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, '#')}
              className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              CUSTOM COUNTERS<span className="text-gold-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    isScrolled 
                      ? 'text-stone-600 hover:text-stone-900' 
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className={`h-8 w-[1px] ${isScrolled ? 'bg-stone-200' : 'bg-white/20'}`}></div>

            <div className="flex items-center gap-6">
              <a 
                href="tel:912-443-9976" 
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                <Phone size={18} className="text-gold-500" />
                (912) 443-9976
              </a>
              <Button 
                variant={isScrolled ? 'primary' : 'white'} 
                className="py-2.5 px-6 text-sm"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a 
              href="tel:912-443-9976" 
              className={`p-2 rounded-full ${isScrolled ? 'bg-stone-100 text-stone-900' : 'bg-white/10 text-white'}`}
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-4 text-base font-medium text-stone-900 hover:bg-stone-50 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:912-443-9976" className="flex items-center justify-center gap-2 text-stone-900 font-bold text-lg py-2">
                <Phone className="w-5 h-5 text-gold-500" />
                (912) 443-9976
              </a>
              <Button 
                fullWidth 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Request Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
