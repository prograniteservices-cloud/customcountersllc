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
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              Custom Counters<span className="text-gold-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:912-443-9976" className={`flex items-center gap-2 font-bold text-lg hover:underline ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              <Phone className="w-5 h-5 text-gold-500" />
              <span>(912) 443-9976</span>
            </a>
            <Button 
              variant={isScrolled ? 'primary' : 'white'}
              className="py-2.5 px-6 text-sm shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
