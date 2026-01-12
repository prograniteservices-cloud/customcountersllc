import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-serif font-bold text-white mb-4 block">
              Custom Counters<span className="text-gold-500">.</span>
            </a>
            <p className="text-stone-400 leading-relaxed mb-6">
              Premier stone fabrication and installation services in Statesboro, GA and surrounding areas. Transforming homes one surface at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#materials" className="hover:text-gold-500 transition-colors">Materials</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Portfolio</a></li>
              <li><a href="#reviews" className="hover:text-gold-500 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Service Areas</h3>
            <ul className="space-y-4">
              <li>Statesboro, GA</li>
              <li>Savannah, GA</li>
              <li>Brooklet, GA</li>
              <li>Metter, GA</li>
              <li>Claxton, GA</li>
              <li>And surrounding counties</li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Custom Counters, LLC. All rights reserved.</p>
          <p>Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};
