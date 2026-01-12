import React from 'react';

const steps = [
  {
    number: "01",
    title: "Consultation & Selection",
    description: "Visit our showroom or we bring samples to you. Pick the perfect slab that matches your vision and budget."
  },
  {
    number: "02",
    title: "Laser Template",
    description: "We visit your home to take precise laser measurements, ensuring a perfect fit without gaps."
  },
  {
    number: "03",
    title: "Fabrication",
    description: "Your stone is cut, edged, and polished in our local facility by our master craftsmen."
  },
  {
    number: "04",
    title: "Installation",
    description: "Our team installs your new counters in usually one day, sealing them for long-lasting protection."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Content */}
          <div className="md:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Our Seamless Process</h2>
            <p className="text-stone-400 text-lg mb-8">
              We've refined our workflow over 20 years to make your renovation as stress-free as possible. No hidden fees, no surprises.
            </p>
            <div className="hidden md:block">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gold-500 font-medium hover:text-white transition-colors flex items-center gap-2"
              >
                Start your project <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Steps */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8 border-l border-stone-700">
                <span className="absolute -left-3 top-0 bg-stone-900 text-gold-500 font-serif text-xl px-1">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3 mt-1">{step.title}</h3>
                <p className="text-stone-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
