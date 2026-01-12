import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", role: "Homeowner", rating: 5, content: "The team at Custom Counters was incredible." }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">Trusted by Neighbors</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 italic text-stone-600">
              <Quote className="mx-auto mb-4 text-stone-200" />
              "{review.content}"
              <p className="mt-4 font-bold text-stone-900">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
