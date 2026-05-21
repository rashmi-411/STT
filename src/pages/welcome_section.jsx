import { useState } from 'react';
import { Eye, Target, Rocket, ShieldCheck, Award, Star } from 'lucide-react';

const WelcomeSection = () => {
  // State to manage active strategic tab
  const [activeTab, setActiveTab] = useState('mission');

  const strategicContent = {
    mission: {
      title: "Our Strategic Mission",
      icon: <Rocket className="w-6 h-6" />,
      text: "To redefine regional logistics by delivering consistently reliable, highly customized, and ultra-secure travel blueprints. We aim to keep North India seamlessly moving with a combination of pristine corporate hospitality, absolute transparency, and flawless execution.",
      highlights: ["Tailored Executive Logistics", "Safe Intercity Fleet Pipelines", "Zero-Variance Punctuality"]
    },
    vision: {
      title: "Our Long-Term Vision",
      icon: <Eye className="w-6 h-6" />,
      text: "To become the undisputed gold standard of premium transport networks across India. We aim to scale our operations by continuously adopting real-time GPS asset tracing, investing in eco-conscious premium fleets, and mentoring elite route-masters.",
      highlights: ["Pan-India Corporate Desk Setup", "Tech-Driven Fleet Optimization", "Sustainable Premium Travel"]
    },
    goal: {
      title: "Our Core Milestones",
      icon: <Target className="w-6 h-6" />,
      text: "To sustain a 100% satisfaction index while optimizing transit windows for all enterprise partners. We focus on modernizing operations so that every booking—from airport transfers to multi-day outstation packages—feels luxurious and stress-free.",
      highlights: ["15-Minute Pre-Arrival Rule", "Transparent Surcharge-Free Bills", "24/7 Redundant Operational Support"]
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-stone-100 to-white overflow-hidden">
      {/* Decorative Branding Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAB308]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B1B04]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Warm Executive Welcome Note */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#2B1B04]/5 border border-[#2B1B04]/10 px-4 py-1.5 rounded-full text-[#2B1B04] text-xs font-bold tracking-widest uppercase">
              <Star size={12} className="text-[#EAB308]" fill="currentColor" />
              <span>Welcome Note</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#2B1B04] tracking-tight leading-tight">
              Premium Mobility Solutions <br />
              <span className="text-stone-500 font-light">Engineered for absolute trust.</span>
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-base">
              <p className="font-semibold text-[#2B1B04] text-lg">
                Sonu Tour and Travel welcomes you to an elite road travel experience across North India.
              </p>
              <p>
                As a premier transport partner, we specialize in high-tier corporate contract management, luxurious outstation holiday packages, and time-critical transit layouts. 
              </p>
              <p>
                Backed by a long-standing reputation built over two decades, our approach combines fully vetted premium vehicles with highly experienced chauffeurs. We understand that travel isn't just about reaching a destination—it's about ensuring safety, luxury, and unmatched professionalism at every turn.
              </p>
            </div>

            {/* Micro Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="flex items-center space-x-3">
                <div className="bg-[#EAB308]/10 text-[#2B1B04] p-2 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold text-[#2B1B04] tracking-wide uppercase">Vetted Operators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-[#EAB308]/10 text-[#2B1B04] p-2 rounded-lg">
                  <Award size={20} />
                </div>
                <span className="text-sm font-bold text-[#2B1B04] tracking-wide uppercase">Premium Status</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dynamic Interactive Strategic Panel */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-stone-200/60 relative">
              
              {/* Tab Navigation Menu Triggers */}
              <div className="flex bg-stone-100 p-1.5 rounded-xl gap-2 mb-8">
                {Object.keys(strategicContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-[#2B1B04] text-[#EAB308] shadow-md scale-[1.02]'
                        : 'text-stone-500 hover:text-[#2B1B04] hover:bg-stone-200/50'
                    }`}
                  >
                    {tab === 'mission' && <Rocket size={16} />}
                    {tab === 'vision' && <Eye size={16} />}
                    {tab === 'goal' && <Target size={16} />}
                    <span>{tab}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Content Display Window */}
              <div className="min-h-[260px] flex flex-col justify-between transition-all duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-[#2B1B04]">
                    <div className="bg-[#EAB308] p-2.5 rounded-xl text-stone-950 shadow-md">
                      {strategicContent[activeTab].icon}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-wide">
                      {strategicContent[activeTab].title}
                    </h3>
                  </div>
                  
                  <p className="text-stone-600 text-sm leading-relaxed pt-2">
                    {strategicContent[activeTab].text}
                  </p>
                </div>

                {/* Bullet Points with Premium Hover Accents */}
                <div className="pt-6 mt-6 border-t border-stone-100 grid grid-cols-1 gap-2.5">
                  {strategicContent[activeTab].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] transition-all duration-300 group-hover:scale-150" />
                      <span className="text-stone-700 text-xs sm:text-sm font-bold tracking-wide">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;