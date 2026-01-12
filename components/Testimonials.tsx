import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    rating: 5,
    content: "The team at Custom Counters was incredible. From the showroom selection to the install, they were professional and clean. My kitchen looks like a magazine cover now!"
  },
  {
    id: 2,
    name: "Mike Ross",
    role: "Property Flipper",
    rating: 5,
    content: "I've used them for 4 houses now. They are fast, their pricing is fair, and the quality helps me sell houses quicker. Highly recommend for any investor."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Interior Designer",
    rating: 5,
    content: "As a designer, I need partners who pay attention to details. The seam work on their granite install was practically invisible. A+ craftsmanship."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">Trusted by Neighbors & Pros</h2>
          <div className="flex items-center justify-center gap-2 text-stone-600">
             <div className="flex text-gold-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <span className="font-bold text-stone-900">5.0</span>
             <span>Based on 150+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative">
              <Quote className="absolute top-6 right-6 text-stone-200 w-10 h-10" />
              <div className="flex text-gold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-bold text-stone-900">{review.name}</p>
                <p className="text-sm text-stone-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
