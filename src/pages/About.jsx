import { ShieldCheck, Award } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  return (
    
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#EAB308] to-[#2B1B04] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
          <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" alt="Executive Mobility Luxury Chauffeur" className="relative rounded-2xl shadow-xl object-cover w-full h-[450px]" />
          <div className="absolute bottom-6 right-6 bg-[#EAB308] text-stone-950 p-6 rounded-xl shadow-xl font-black text-center">
            <span className="block text-4xl">23+</span>
            <span className="text-xs uppercase tracking-widest font-bold block mt-1">Years Legacy</span>
          </div>
        </div>

        <div className="space-y-6">
          <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase block">Corporate Mobility Specialists</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1B04] tracking-tight">Reliable Travel & Fleet Solutions Across North India</h2>
          <p className="text-stone-600 leading-relaxed">
            Since 2003, Sonu Tour and Travel has engineered top-tier travel ecosystems. We specialize in strategic corporate mobility pipelines, premium tourist management, and high-security outstation journeys.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <div className="mt-1 text-[#EAB308] bg-[#EAB308]/10 p-1 rounded-md"><ShieldCheck size={18} /></div>
              <div>
                <h4 className="font-bold text-[#2B1B04]">Verified Fleets</h4>
                <p className="text-xs text-stone-500">Every asset is compliance checked.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1 text-[#EAB308] bg-[#EAB308]/10 p-1 rounded-md"><Award size={18} /></div>
              <div>
                <h4 className="font-bold text-[#2B1B04]">Corporate Expertise</h4>
                <p className="text-xs text-stone-500">Standardized logs for luxury accounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;