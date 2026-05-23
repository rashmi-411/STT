import { MapPin, User, Phone, Clock, ShieldCheck, DollarSign } from 'lucide-react';

const WhyChoose = () => {
return (


<section className="bg-stone-100 py-24 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase">The Sonu Assurance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B1B04] tracking-tight">Engineered to Provide Complete Peace of Mind</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <MapPin />, title: "GPS-Enabled Assets", text: "Real-time tracing arrays running active satellite streams ensure precise location monitoring." },
              { icon: <User />, title: "Trained Chauffeurs", text: "Background-checked, uniform-clad elite route-masters holding clean safety records." },
              { icon: <Phone />, title: "24x7 Core Operations Desk", text: "Live operations monitoring teams active during late hours for urgent adjustments." },
              { icon: <Clock />, title: "Absolute Punctuality", text: "Strict service-level agreements guarantee our wheels arrive 15 minutes prior to scheduling." },
              { icon: <ShieldCheck />, title: "Safety Infrastructure", text: "Fleets undergo scheduled health audits and are fully equipped with safety kits." },
              { icon: <DollarSign />, title: "Transparent Pricing Architecture", text: "Zero stealth surcharges, zero surprise overhead lines. Clear bills generated instantly." }
            ].map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div className="bg-[#EAB308] text-stone-950 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#2B1B04] text-lg">{item.title}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        );
};

export default WhyChoose;
