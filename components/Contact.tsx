import React from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Zap } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-bold mb-4">
              Free Design Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-6">Get Your Quote Today</h2>
            <p className="text-stone-600 text-lg mb-8">
              Ready to upgrade your home? Fill out the form or call us. We don't do high-pressure sales—just honest expert advice and fair pricing.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                <div className="bg-white p-3 rounded-full text-stone-900 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium uppercase tracking-wider">Call Us Directly</p>
                  <p className="text-xl font-bold text-stone-900">(912) 443-9976</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <div className="text-stone-400"><MapPin size={24} /></div>
                <div>
                  <p className="font-bold text-stone-900">Visit Our Shop</p>
                  <p className="text-stone-600">Statesboro, GA 30458</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4">
                <div className="text-stone-400"><Clock size={24} /></div>
                <div>
                  <p className="font-bold text-stone-900">Business Hours</p>
                  <p className="text-stone-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-stone-600 text-sm italic">Saturday by Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="(912) 000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="material" className="block text-sm font-semibold text-stone-700 mb-1">Interested Material</label>
                <div className="relative">
                    <select id="material" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all appearance-none bg-white">
                        <option>Granite</option>
                        <option>Quartz</option>
                        <option>Marble</option>
                        <option>Other / Not Sure</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1">Project Details</label>
                <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="I'm looking for a white quartz countertop for my kitchen..."></textarea>
              </div>

              <Button fullWidth type="submit" className="py-4 text-lg font-bold shadow-lg shadow-stone-900/20">
                Get My Free Quote
              </Button>
              
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-stone-200/60">
                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
                    <ShieldCheck size={14} className="text-green-600" />
                    No Spam Guarantee
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500">
                    <Zap size={14} className="text-gold-500" />
                    Fast Response
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
