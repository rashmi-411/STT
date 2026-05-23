import React from 'react';
import ServicesSection from '../section/services';
import { Compass } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-stone-950 text-white min-h-screen pt-24 font-sans selection:bg-[#EAB308] selection:text-stone-950">
      {/* Services Hero Section */}
      <div className="relative bg-gradient-to-r from-stone-900 to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#EAB308] uppercase bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" /> What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Elite <span className="text-[#EAB308]">Transport Services</span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From daily corporate employee transit systems to luxury wedding car fleets, we provide reliable and safety-compliant travel solutions across North India.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;
