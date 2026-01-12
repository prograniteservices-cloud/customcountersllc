import React from 'react';
import { ArrowRight, Star, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury modern kitchen with marble island"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <div className="flex text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-white text-xs font-bold tracking-wide uppercase">#1 Rated in Statesboro</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gold-500/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold-400/50">
              <Clock size={14} className="text-white" />
              <span className="text-white text-xs font-bold tracking-wide uppercase">Installs in 7-10 Days</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Luxury Stone.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-400">Masterfully Crafted.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-stone-200 mb-8 max-w-2xl font-light leading-relaxed">
            Stop waiting weeks for big box stores. We fabricate and install premium Granite, Quartz, and Marble in as little as <span className="text-white font-semibold">7 days</span>. Select your exact slab today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="white" 
              className="text-lg px-10 font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Estimate
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-10 text-white border-white hover:bg-white hover:text-stone-900"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Recent Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white/90 text-sm font-medium border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Free In-Home Design</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Locally Fabricated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
