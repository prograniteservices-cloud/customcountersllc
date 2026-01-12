import React from 'react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80" 
          alt="Luxury Kitchen" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Excellence Carved in <span className="text-gold-500 italic">Stone</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed font-light">
            South Carolina's premier destination for custom granite, marble, and quartz fabrication. We turn raw slabs into the centerpiece of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-gold-500 text-stone-950 px-8 py-4 text-center font-bold hover:bg-gold-600 transition-all">
              START YOUR PROJECT
            </a>
            <a href="#gallery" className="border border-white/30 text-white px-8 py-4 text-center font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
              VIEW GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
