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
                  <h3 className="font-bold text-stone-900">Call Us Directly</h3>
                  <a href="tel:912-443-9976" className="text-lg font-medium text-stone-600 hover:text-stone-900 hover:underline">(912) 443-9976</a>
                  <p className="text-sm text-stone-500 mt-1">Mon-Fri: 8am - 5pm</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                    <MapPin className="text-gold-500 mt-1" size={20} />
                    <div>
                        <h3 className="font-bold text-stone-900">Showroom</h3>
                        <p className="text-stone-600 text-sm">818 South Main Street<br />Statesboro, GA 30458</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="text-gold-500 mt-1" size={20} />
                    <div>
                        <h3 className="font-bold text-stone-900">Email</h3>
                        <p className="text-stone-600 text-sm">customcounters823@gmail.com</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 p-8 sm:p-10 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
            {/* Form Header */}
            <div className="mb-6 pb-6 border-b border-stone-200">
               <h3 className="text-xl font-bold text-stone-900">Request Estimate</h3>
               <p className="text-stone-500 text-sm mt-1">Tell us about your project. We typically reply within 2 hours.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-stone-700 mb-1">First Name *</label>
                  <input required type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-stone-700 mb-1">Last Name *</label>
                  <input required type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1">Email *</label>
                    <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="john@example.com" />
                 </div>

                 <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-1">Phone *</label>
                    <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all" placeholder="(555) 123-4567" />
                 </div>
              </div>

              <div>
                <label htmlFor="material" className="block text-sm font-semibold text-stone-700 mb-1">Interested In</label>
                <div className="relative">
                    <select id="material" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-500 focus:border-stone-500 outline-none transition-all bg-white appearance-none cursor-pointer">
                    <option value="">Select a material...</option>
                    <option value="granite">Granite (Natural, Heat Resistant)</option>
                    <option value="quartz">Quartz (Maintenance Free)</option>
                    <option value="marble">Marble (Luxury)</option>
                    <option value="other">Not Sure / Need Advice</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
