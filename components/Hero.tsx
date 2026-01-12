import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Luxury kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">Excellence Carved in <span className="text-gold-500">Stone</span></h1>
          <p className="text-xl text-stone-200 mb-10 leading-relaxed font-light">South Carolina's premier destination for custom granite, marble, and quartz fabrication.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get Free Estimate</Button>
            <Button variant="outline" className="text-white border-white" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>View Recent Work <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
};
