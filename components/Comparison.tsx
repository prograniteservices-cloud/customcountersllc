import React from 'react';
import { Check } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Why Choose Custom Counters?</h2>
        <div className="overflow-x-auto mt-8">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-6 text-stone-400 border-b border-stone-800">Feature</th>
                <th className="p-6 text-white bg-stone-800/50 border-t-4 border-gold-500">Custom Counters LLC</th>
                <th className="p-6 text-stone-400 border-b border-stone-800">Big Box Retailers</th>
              </tr>
            </thead>
            <tbody className="text-stone-300">
              <tr>
                <td className="p-6 border-b border-stone-800">Fabrication</td>
                <td className="p-6 bg-stone-800/30 text-white border-x border-stone-800"><Check className="inline mr-2 text-gold-500" /> Local In-House Shop</td>
                <td className="p-6 border-b border-stone-800">Outsourced / Unknown</td>
              </tr>
              <tr>
                <td className="p-6 border-b border-stone-800">Pricing</td>
                <td className="p-6 bg-stone-800/30 text-white border-x border-stone-800"><Check className="inline mr-2 text-gold-500" /> All-Inclusive Quote</td>
                <td className="p-6 border-b border-stone-800">Hidden Removal Fees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
