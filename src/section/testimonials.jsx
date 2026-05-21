import { Star } from 'lucide-react';

const Testimonials = () => {
  return ( 




<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase">Client Endorsements</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1B04] tracking-tight">Praise for Luxury, Comfort, and Professionalism</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Rajesh Malhotra", role: "Corporate VP", quote: "Sonu Tour and Travel manages our quarterly executive conventions. Their Urbania vans are spotless, and the punctuality is impeccable." },
            { name: "Ananya Sharma", role: "Leisure Traveler", quote: "Booked a premium SUV for a family trek package to Shimla. Chauffeur knew every alternate pathway and treated us like royalty." },
            { name: "Vikramjit Singh", role: "Luxury Event Organizer", quote: "Flawless deployment of 15 executive sedans for a high-profile corporate merger event in Delhi. Complete transparency throughout." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex text-[#EAB308] space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 italic text-sm leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-100">
                <h4 className="font-bold text-[#2B1B04]">{item.name}</h4>
                <span className="text-xs text-stone-400 font-medium">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

        );
};

export default Testimonials;