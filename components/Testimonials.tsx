import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="text-2xl italic text-stone-700">
          "The most professional team in Georgia. Our kitchen counters look better than we ever imagined."
        </blockquote>
        <p className="mt-4 font-bold">— Satisfied Customer in Statesboro</p>
      </div>
    </section>
  );
};
