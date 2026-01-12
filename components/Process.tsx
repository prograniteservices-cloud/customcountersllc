import React from 'react';

const steps = [
  { n: "01", t: "Consultation", d: "Pick the perfect slab." },
  { n: "02", t: "Laser Template", d: "Precise digital measurement." },
  { n: "03", t: "Fabrication", d: "Crafted in our local shop." },
  { n: "04", t: "Installation", d: "Expert fit in one day." }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map(s => (
          <div key={s.n} className="border-l border-gold-500 pl-6">
            <span className="text-gold-500 font-serif text-2xl">{s.n}</span>
            <h3 className="text-xl font-bold mt-2">{s.t}</h3>
            <p className="text-stone-400 mt-2">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
