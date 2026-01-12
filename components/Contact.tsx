import React from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-bold mb-4">
              Free Design Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-6">Get Your Quote Today</h2>
            <p className="text-stone-600 text-lg mb-8">Ready to upgrade your home? Fill out the form or call us.</p>
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                <div className="bg-white p-3 rounded-full text-stone-900 shadow-sm"><Phone size={20} /></div>
                <div><p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Call Us Directly</p><p className="text-xl font-bold text-stone-900">(912) 443-9976</p></div>
              </div>
            </div>
          </div>
          <form className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-stone-300 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-stone-300 outline-none" />
            <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-300 outline-none" placeholder="Project Details..."></textarea>
            <Button fullWidth type="submit">Get My Free Quote</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
