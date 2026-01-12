import React from 'react';
import { Gem, Layers, Ruler, Wrench, Hammer, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { title: "Granite", description: "Durable and completely unique.", icon: Gem },
  { title: "Quartz", description: "Maintenance-free perfection.", icon: Layers },
  { title: "Marble", description: "The epitome of luxury.", icon: ShieldCheck }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-16">Premium Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 group">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mx-auto mb-6"><service.icon size={24} /></div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
