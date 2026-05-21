import { useState } from 'react';
import { User, Briefcase, ArrowRight } from 'lucide-react';

const FleetShowcase = () => {
  // 1. Fleet Data Array
  const fleet = [
    { name: 'Executive Sedans', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600', capacity: '4+1', luggage: '2 Bags', price: '₹12/km' },
    { name: 'Premium SUVs', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600', capacity: '6+1', luggage: '4 Bags', price: '₹16/km' },
    { name: 'Tempo Traveller', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600', capacity: '12-26', luggage: '12+ Bags', price: '₹24/km' },
    { name: 'Luxury Urbania Vans', image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=600', capacity: '9-17', luggage: '10 Bags', price: '₹30/km' },
    { name: 'Deluxe Coaches', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600', capacity: '35-50', luggage: 'Heavy Storage', price: '₹50/km' },
  ];

  return (
<section className="bg-stone-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase">The Executive Garage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Premium Fleet Showcase</h2>
            <p className="text-stone-400">Maintained meticulously to meet luxury criteria. Choose the ride that accommodates your squad perfectly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-stone-800 rounded-xl overflow-hidden shadow-xl border border-stone-700/50 group flex flex-col justify-between">
                <div className="relative overflow-hidden h-48">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-[#EAB308]">
                    {vehicle.price} onwards
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-wide mb-3">{vehicle.name}</h3>
                    <div className="flex items-center justify-between text-xs text-stone-400 border-y border-stone-700/60 py-2.5">
                      <div className="flex items-center space-x-1.5"><User size={14} className="text-[#EAB308]" /> <span>{vehicle.capacity} Seats</span></div>
                      <div className="flex items-center space-x-1.5"><Briefcase size={14} className="text-[#EAB308]" /> <span>{vehicle.luggage}</span></div>
                    </div>
                  </div>
                  <a href={`https://wa.me/919870120218?text=I%20want%20to%20book%20the%20${vehicle.name}`} target="_blank" rel="noreferrer" className="w-full py-3 rounded-lg border-2 border-stone-600 hover:border-[#EAB308] hover:bg-[#EAB308] text-center font-bold text-sm text-stone-200 hover:text-stone-950 flex items-center justify-center space-x-2 transition duration-300">
                    <span>Reserve Fleet</span> <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

);
};

export default FleetShowcase;