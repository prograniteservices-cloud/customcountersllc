import React from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Get Your Quote Today</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4"><Phone className="text-gold-500" /> (912) 443-9976</div>
            <div className="flex items-center gap-4"><MapPin className="text-gold-500" /> Statesboro, GA</div>
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 border border-stone-200 rounded" />
          <input type="email" placeholder="Email" className="w-full p-4 border border-stone-200 rounded" />
          <textarea placeholder="Project Details" rows={4} className="w-full p-4 border border-stone-200 rounded"></textarea>
          <Button variant="secondary" fullWidth>Request Free Estimate</Button>
        </form>
      </div>
    </section>
  );
};
