import React, { useState, useEffect } from 'react';
import { 
  Award, ShieldCheck, Clock, Users, Compass, 
  Target, Eye, CheckCircle2, ChevronRight, Briefcase
} from 'lucide-react';

const AboutUs = () => {
  // State for dynamic counting animation on page load
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 23; // Founded in 2002 -> 23+ Years of Excellence
    if (start === end) return;

    let totalDuration = 1500;
    let incrementTime = Math.abs(Math.floor(totalDuration / end));
    
    let timer = setInterval(() => {
      start += 1;
      setYearsCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  // State for the interactive Key Milestones / Projects section
  const [activeTab, setActiveTab] = useState('all');

  // Dynamic content models based on official company documentation
  const companyStats = [
    { id: 1, value: `${yearsCount}+`, label: "Years of Corporate Excellence", icon: Award },
    { id: 2, value: "GPS", label: "Enabled Real-time Fleet Tracking", icon: Compass },
    { id: 3, value: "24/7", label: "Premium Support Operations", icon: Clock },
    { id: 4, value: "100%", label: "Sanitized & Verified Fleet Vehicles", icon: ShieldCheck }
  ];

  const coreStrengths = [
    { title: "23+ Years of Service", desc: "Unmatched excellence in handling complex corporate & luxury leisure assignments across North India.", source: "Core Strengths" },
    { title: "Premium Dynamic Fleet", desc: "Wide array of sanitized premium vehicles spanning luxury sedans, SUVs, tempo travellers, and deluxe coaches.", source: "Premium Fleet" },
    { title: "Trained Professional Chauffeurs", desc: "Expert drivers well-versed in elite corporate etiquette, optimal routing, and stringent safety protocols.", source: "Trained Chauffeurs" },
    { title: "Client-Centric Operations", desc: "Highly custom, flexible mobility and event routing packages explicitly engineered to client needs.", source: "Custom Packages" }
  ];

  const historicalMilestones = [
    { category: "government", title: "Surajkund International Craft Mela", role: "Official Transportation Partner", details: "Delivered scalable transit solutions in direct collaboration with the Haryana Government." },
    { category: "mega-events", title: "Bharat Jodo Yatra", role: "Official Travel Partner", details: "Successfully managed high-volume end-to-end multi-state logistics with the Indian National Congress." },
    { category: "entertainment", title: "International Film Festival Awards (IIFA)", role: "Event Logistics Partner", details: "Executed seamless high-profile delegation transit and VIP protocols in association with RSW's." }
  ];

  const filteredMilestones = activeTab === 'all' 
    ? historicalMilestones 
    : historicalMilestones.filter(m => m.category === activeTab);

  return (
    <div className="bg-stone-950 text-white min-h-screen font-sans antialiased">
      
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-r from-stone-900 to-stone-950 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#EAB308] text-sm uppercase font-bold tracking-widest px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
            Established 2002
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            About <span className="text-[#EAB308]">Sonu Tour and Travel</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-stone-400 leading-relaxed">
            Your Complete Mobility & Logistics Partner. Delivering premium corporate transportation, large-scale event transits, and customized luxury travel architectures across North India.
          </p>
        </div>
      </div>

      {/* Dynamic Animated Statistics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-stone-900/90 backdrop-blur-md p-6 rounded-xl border border-stone-800 shadow-2xl">
          {companyStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center p-4 flex flex-col items-center border-r last:border-r-0 border-stone-800/60 max-sm:border-none rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-stone-800/50 hover:shadow-2xl hover:border-amber-500/30 hover:z-10 hover:-translate-y-2">
                <div className="p-3 bg-amber-500/10 rounded-lg text-[#EAB308] mb-3 transition-all duration-300 group-hover:scale-125">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Corporate Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Driving Excellence. <span className="text-[#EAB308]">Delivering Trust.</span>
            </h2>
            <p className="mt-6 text-stone-400 leading-relaxed text-base sm:text-lg">
              Founded in 2002, Sonu Tour and Travel has scaled over two decades to establish itself as a primary benchmark for premium corporate mobility systems across North India. We serve as the primary operational partner for multinational corporations, government organizations, top event managers, and high-value individual clients.
            </p>
            <p className="mt-4 text-stone-400 leading-relaxed text-base">
              By deploying a strictly compliant, modernized, and entirely GPS-enabled fleet coupled with intensively coached chauffeurs, we consistently align our on-road metrics with absolute safety, complete timing efficiency, and exceptional corporate hospitality.
            </p>
            
            <div className="mt-8 pt-8 border-t border-stone-800/80">
              <blockquote className="text-stone-300 italic border-l-4 border-[#EAB308] pl-4 font-medium text-sm sm:text-base">
                "With Sonu Tour and Travel, every journey is a commitment — to safety, comfort, and excellence."
              </blockquote>
            </div>
          </div>

          {/* Core Strengths Interactive List Layout */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-stone-200 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#EAB308]" /> Framework Strengths
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {coreStrengths.map((strength, index) => (
                <div key={index} className="bg-stone-900 p-5 rounded-xl border border-stone-800 hover:border-amber-500/30 transition-colors duration-300 group">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EAB308] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{strength.title}</h4>
                      <p className="text-xs sm:text-sm text-stone-400 mt-2 leading-relaxed">{strength.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Filterable Key Projects Display Portfolio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Proven Track Record & <span className="text-[#EAB308]">Key Projects</span>
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base">
            Trusted by premium enterprise networks and state departments to manage large-scale high-consequence transport pipelines smoothly.
          </p>
          
          {/* Filter Navigation Links */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 bg-stone-900 p-1.5 rounded-xl border border-stone-800 w-fit mx-auto">
            {['all', 'government', 'mega-events', 'entertainment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg capitalize transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-[#EAB308] text-stone-950 shadow-md' 
                    : 'text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {tab === 'all' ? 'All Portfolios' : tab.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid Render */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredMilestones.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-stone-900 rounded-xl border border-stone-800 p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#EAB308] bg-amber-500/5 px-2 py-1 rounded border border-amber-500/10">
                  {project.category.replace('-', ' ')}
                </span>
                <h3 className="text-lg font-bold text-white mt-4">{project.title}</h3>
                <p className="text-sm text-stone-300 font-medium mt-1 text-amber-400/90">{project.role}</p>
                <p className="text-xs sm:text-sm text-stone-400 mt-3 leading-relaxed">{project.details}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-800/50 flex items-center text-xs text-stone-400 font-semibold group cursor-pointer hover:text-[#EAB308] transition-colors">
                View Operational Framework <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;