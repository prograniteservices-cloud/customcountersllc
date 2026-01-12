import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Why Choose Custom Counters?</h2>
          <p className="text-stone-400 text-lg">Don't settle for big box delays and subcontractor quality.</p>
        </div>

        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gold-600/10 blur-3xl rounded-full -z-10" />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-6 text-lg font-medium text-stone-400 border-b border-stone-800 w-1/3">Feature</th>
                  <th className="p-6 text-xl font-bold text-white bg-stone-800/50 border-t-4 border-gold-500 rounded-t-xl w-1/3">
                    Custom Counters
                  </th>
                  <th className="p-6 text-xl font-bold text-stone-500 border-b border-stone-800 w-1/3">
                    Big Box Retailers
                  </th>
                </tr>
              </thead>
              <tbody className="text-stone-300">
                <tr>
                  <td className="p-6 border-b border-stone-800 font-medium">Installation Timeline</td>
                  <td className="p-6 bg-stone-800/30 border-x border-stone-800">
                    <div className="flex items-center gap-2 text-green-400 font-bold">
                      <Check size={20} />
                      7-10 Days
                    </div>
                  </td>
                  <td className="p-6 border-b border-stone-800">4-8 Weeks</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-stone-800 font-medium">Stone Selection</td>
                  <td className="p-6 bg-stone-800/30 border-x border-stone-800">
                    <div className="flex items-center gap-2 text-white">
                      <Check size={20} className="text-gold-500" />
                      Pick Your Exact Slab
                    </div>
                  </td>
                  <td className="p-6 border-b border-stone-800">Pick from Tiny Sample</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-stone-800 font-medium">Fabrication</td>
                  <td className="p-6 bg-stone-800/30 border-x border-stone-800">
                    <div className="flex items-center gap-2 text-white">
                      <Check size={20} className="text-gold-500" />
                      Local In-House Shop
                    </div>
                  </td>
                  <td className="p-6 border-b border-stone-800">Outsourced / Unknown</td>
                </tr>
                <tr>
                  <td className="p-6 border-b border-stone-800 font-medium">Pricing</td>
                  <td className="p-6 bg-stone-800/30 border-x border-stone-800">
                    <div className="flex items-center gap-2 text-white">
                      <Check size={20} className="text-gold-500" />
                      All-Inclusive Quote
                    </div>
                  </td>
                  <td className="p-6 border-b border-stone-800">Hidden Removal Fees</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Customer Support</td>
                  <td className="p-6 bg-stone-800/30 border-x border-b border-stone-800 rounded-b-xl">
                    <div className="flex items-center gap-2 text-white">
                      <Check size={20} className="text-gold-500" />
                      Direct Access to Owner
                    </div>
                  </td>
                  <td className="p-6">1-800 Call Centers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
