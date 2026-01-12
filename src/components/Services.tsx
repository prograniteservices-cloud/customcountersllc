import React from 'react';
import { Gem, Layers, Ruler, Wrench, Hammer, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: \"Granite\",
    description: \"Durable, heat-resistant, and completely unique. Each slab is a one-of-a-kind masterpiece from nature.\",
    icon: Gem
  },
  {
    title: \"Quartz\",
    description: \"Engineered for perfection. Non-porous, maintenance-free, and available in a wide array of consistent colors.\",
    icon: Layers
  },
  {
    title: \"Marble\",
    description: \"The epitome of luxury. Classic veining and cool temperatures make it perfect for baking stations and vanity tops.\",
    icon: ShieldCheck
  },
  {
    title: \"Digital Templating\",
    description: \"We use advanced laser templating to ensure a precise fit down to the millimeter for your cabinets.\",
    icon: Ruler
  },
  {
    title: \"Custom Fabrication\",
    description: \"Cut and polished in our local shop. We handle complex edge profiles and custom cutouts with ease.\",
    icon: Hammer
  },
  {
    title: \"Installation & Repair\",
    description: \"Our in-house team handles the heavy lifting. We leave your home clean and your counters sealed.\",
    icon: Wrench
  }
];

export const Services: React.FC = () => {
  return (
    <section id=\"services\" className=\"py-24 bg-stone-50\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"text-center max-w-3xl mx-auto mb-16\">
          <h2 className=\"text-stone-900 text-3xl sm:text-4xl font-serif font-bold mb-4\">Master Craftsmanship & Premium Materials</h2>
          <p className=\"text-stone-600 text-lg\">We don't just sell stone; we engineer surfaces that stand the test of time. From selection to installation, we handle it all.</p>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
          {services.map((service, index) => (
            <div 
              key={index} 
              className=\"bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group\"
            >
              <div className=\"w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-gold-500 transition-colors duration-300\">
                <service.icon size={24} />
              </div>
              <h3 className=\"text-xl font-bold text-stone-900 mb-4 group-hover:text-gold-600 transition-colors\">{service.title}</h3>
              <p className=\"text-stone-600 leading-relaxed\">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
