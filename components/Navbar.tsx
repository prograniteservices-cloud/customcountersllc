import React from 'react';
import { NavLink } from '../types';

export const Navbar = () => {
  const links: NavLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-serif text-2xl font-bold tracking-tight">
            CUSTOM COUNTERS<span className="text-gold-600">.</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="bg-stone-900 text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-stone-800 transition-all">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
