import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold text-white mb-4 block">Custom Counters<span className="text-gold-500">.</span></a>
            <p className="text-stone-400">Premier stone fabrication in Statesboro, GA.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Service Areas</h3>
            <ul className="space-y-4"><li>Statesboro, GA</li><li>Savannah, GA</li></ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4"><li>About Us</li><li>Privacy Policy</li></ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex justify-between text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Custom Counters, LLC. All rights reserved.</p>
          <p>Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};
