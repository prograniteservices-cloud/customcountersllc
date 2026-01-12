import React from 'react';
import { Gem, Layers, ShieldCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const srv = [
    { t: "Granite", d: "One-of-a-kind natural beauty.", i: Gem },
    { t: "Quartz", d: "Maintenance-free perfection.", i: Layers },
    { t: "Marble", d: "The epitome of luxury.", i: ShieldCheck }
  ];
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {srv.map(s => (
          <div key={s.t} className="text-center p-8 border border-stone-100 rounded-xl hover:shadow-lg transition-shadow">
            <s.i size={48} className="mx-auto text-gold-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">{s.t}</h3>
            <p className="text-stone-600">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
