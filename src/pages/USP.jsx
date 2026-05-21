import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle, Radio, Users, 
  MapPin, Sliders, Gem, Layers, HelpCircle, 
  ChevronDown, ArrowRight, Zap, ShieldAlert
} from 'lucide-react';

const OurAdvantage = () => {
  // State for Accordion-style deep dives into specific USPs
  const [activeFaq, setActiveFaq] = useState(0);
  
  // State for interactive metric switching (Corporate vs Retail vs Government guarantees)
  const [activeCategory, setActiveCategory] = useState('corporate');

  // Value Proposition Categories Data
  const categories = {
    corporate: {
      title: "Enterprise Transit Framework",
      tagline: "Engineered for corporate punctuality, risk mitigation, and continuous duty of care.",
      points: [
        "SLA-backed timeliness with automated dispatch backups.",
        "Fully vetted and background-verified corporate chauffeurs.",
        "Comprehensive monthly digital billing transparency with zero hidden adjustments.",
        "Customized routing frameworks for daily staff transits and premium executive hosting."
      ]
    },
    government: {
      title: "State & Large-Scale Event Logistics",
      tagline: "Mass transit configurations designed for high-security, high-volume operations.",
      points: [
        "Proven handling capacity for international summits and cross-state political movements.",
        "Direct coordination protocols with state administrative and security divisions.",
        "Rapid deployment capabilities for unexpected schedule shifts or sudden capacity scaling.",
        "Strict regulatory and legal compliance across all state borders in North India."
      ]
    },
    premium: {
      title: "Elite Leisure & VIP Protocols",
      tagline: "Delivering privacy, luxury aesthetics, and flawless hospitality infrastructure.",
      points: [
        "Immaculately maintained, fully detailed premium luxury fleet layers.",
        "Chauffeurs specifically trained in elite concierge etiquette and discreet transport.",
        "Tailored custom luxury itineraries covering premium tourism hubs in North India.",
        "On-board amenities customized to specific client or delegation profiles."
      ]
    }
  };

  // Detailed USP Data Cards
  const coreUsps = [
    {
      id: 1,
      icon: Radio,
      title: "Live GPS & Telematics Ecosystem",
      description: "Our complete operating fleet is connected via real-time satellite tracking, granting centralized control, instant geo-fencing triggers, and reliable route optimization analytics."
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Rigorous Health & Safety Matrix",
      description: "Every commercial vehicle undergoes deep sanitation cycles post-journey. Regular mechanical audits ensure zero on-road operational downtime or unexpected trip interruptions."
    },
    {
      id: 3,
      icon: Sliders,
      title: "Hyper-Flexible Fleet Tailoring",
      description: "From luxury sedans and premium SUVs (Crysta, Fortuner) to 32-seater Extra Deluxe Coaches and premium Urbania vans—we configure the vehicle mix perfectly to your asset footprint."
    },
    {
      id: 4,
      icon: Users,
      title: "The Professional Workforce Layer",
      description: "We don't just hire drivers; we deploy trained transit professionals well-versed in optimal navigation, emergency response, and refined corporate decorum."
    }
  ];

  // Deep-Dive FAQ / Detail Section
  const deepDives = [
    {
      question: "What makes your fleet management infrastructure superior to standard car rentals?",
      answer: "We run a wholly company-managed grid system instead of relying on decentralized third-party aggregators. This guarantees uniform vehicle quality, strict legal compliance, verified commercial permits, and an absolute guarantee against last-minute vendor cancellations."
    },
    {
      question: "How does Sonu Tour and Travel handle emergency breakdowns or flight delays?",
      answer: "Our 24/7 centralized support desk monitors flight timelines and telematics streams live. If a route delay or mechanical anomaly is detected, a backup vehicle is automatically rerouted or dispatched from our nearest regional hub before it impacts the schedule."
    },
    {
      question: "Are your transit solutions fully legally compliant for multinational corporate clients?",
      answer: "Yes. We maintain complete statutory compliance including comprehensive passenger insurance covers, active commercial permits for all operating zones, strict driver licensing verifications, and structured tax invoice tracking."
    }
  ];

  return (
    <div className="bg-stone-950 text-white min-h-screen font-sans antialiased overflow-hidden">
      
      {/* Decorative Core Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Hero Header Block */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EAB308] bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          <Gem className="w-3.5 h-3.5" /> Operational Distinctions
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
          The <span className="text-[#EAB308]">Sonu tour and travel Advantage</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-stone-400 leading-relaxed">
          Discover the deliberate logistical standards, compliance metrics, and technical assets that separate our premium transport network from standard market alternatives.
        </p>
      </div>

      {/* Core Pillars Grid Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {coreUsps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div 
                key={usp.id} 
                className="bg-stone-900/60 border border-stone-800 p-6 sm:p-8 rounded-2xl relative group hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="p-3 bg-amber-500/10 rounded-xl text-[#EAB308] w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{usp.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed">{usp.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Category Value Matrix Section */}
      <div className="bg-stone-900/40 border-y border-stone-800/80 my-16 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tailored Pillars For <span className="text-[#EAB308]">Every Domain</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2">
              Click through our custom service paradigms to see how we adapt our operations to your direct industry needs.
            </p>

            {/* Interactive Tab Controls */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 p-1.5 bg-stone-900 border border-stone-800 rounded-xl w-fit mx-auto">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#EAB308] text-stone-950 shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Panel */}
          <div className="max-w-4xl mx-auto bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-xl min-h-[320px] flex flex-col justify-between transition-all duration-500">
            <div>
              <span className="text-xs font-bold text-[#EAB308] tracking-widest uppercase block mb-2">
                Operational Guarantee //
              </span>
              <h3 className="text-2xl font-bold text-white transition-all">
                {categories[activeCategory].title}
              </h3>
              <p className="text-stone-400 text-sm sm:text-base mt-2 italic">
                "{categories[activeCategory].tagline}"
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {categories[activeCategory].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 bg-stone-950/50 p-3 rounded-lg border border-stone-800/60">
                    <CheckCircle className="w-4 h-4 text-[#EAB308] shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm text-stone-300 leading-normal">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>SECURITY_COMPLIANCE_PASS</span>
              <span className="text-[#EAB308]">The Sonu Tour & Travel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Accordion / Assurance Clarifications Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
        <div className="text-center mb-10">
          <div className="inline-p-2 bg-stone-900 rounded-lg text-amber-500 mb-3 w-fit mx-auto">
            <Layers className="w-5 h-5 mx-auto text-[#EAB308]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Commitment Under the Hood</h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">Transparency behind our operational blueprint.</p>
        </div>

        <div className="space-y-3">
          {deepDives.map((dive, index) => (
            <div 
              key={index}
              className="bg-stone-900/80 border border-stone-800 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-white hover:text-[#EAB308] transition-colors focus:outline-none"
              >
                <span className="text-sm sm:text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#EAB308] shrink-0" />
                  {dive.question}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                    activeFaq === index ? 'rotate-180 text-[#EAB308]' : ''
                  }`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out border-stone-800 overflow-hidden ${
                  activeFaq === index ? 'max-h-60 border-t p-5 bg-stone-950/40' : 'max-h-0'
                }`}
              >
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  {dive.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Action Architecture Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 p-8 sm:p-12 rounded-3xl border border-stone-800 text-center relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 opacity-5 text-amber-400 pointer-events-none">
            <Zap className="w-48 h-48" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to Optimize Your Fleet Logistics?</h3>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mt-3">
            Incorporate our verified dynamic fleet ecosystem into your corporate frameworks or high-profile events today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#inquiry" 
              className="inline-flex items-center justify-center gap-2 bg-[#EAB308] hover:bg-amber-400 text-stone-950 font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm uppercase tracking-wider"
            >
              Initiate Corporate Tie-up <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OurAdvantage;