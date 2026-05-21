import { Plane, Building, Compass, Heart, MapPin, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Airport Transfers', icon: <Plane size={24} />, desc: 'Punctual pick and drop service ensuring you never miss a flight.' },
    { title: 'Corporate Mobility', icon: <Building size={24} />, desc: 'Premium travel desk setup and executive transport management.' },
    { title: 'Outstation Journeys', icon: <Compass size={24} />, desc: 'Intercity tours across North India with local route-expert drivers.' },
    { title: 'Wedding Car Rentals', icon: <Heart size={24} />, desc: 'Elegant luxury sedans and premium convertibles for your special day.' },
    { title: 'Local Rides', icon: <MapPin size={24} />, desc: 'Hourly rentals and point-to-point transit solutions within the city.' },
    { title: 'Luxury Car Rental', icon: <Sparkles size={24} />, desc: 'Roll up in style with ultra-high-end vehicles for premium events.' },
  ];
return (
<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase">Comprehensive Portfolios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1B04] tracking-tight">Our Premium Chauffeur Verticals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-[#2B1B04] text-[#EAB308] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-amber-900/10">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2B1B04] mb-2">{srv.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>
);
};

export default Services;