import React, { useState, useMemo } from 'react';
import { 
  Shield, Eye, Lock, FileText, Search, 
  ChevronDown, CheckCircle, Scale, 
  RefreshCw, Server, UserCheck, AlertTriangle 
} from 'lucide-react';

// Structured Policy Data Model matching Sonu Tour and Travels operations
const policyData = [
  {
    id: 0,
    icon: Eye,
    title: "1. Information We Collect",
    tagline: "What clear datasets are compiled during your booking lifecycle.",
    content: "We collect personal parameters required to execute legal travel operations cleanly. This includes individual names, phone tracking indices, corporate email points, precise pickup/drop-off geographic coordinates, billing frameworks, and target itinerary specifics. For corporate clients, statutory registration tags or GST identification markers are also indexed securely."
  },
  {
    id: 1,
    icon: Server,
    title: "2. Real-Time Telematics & GPS Tracking",
    tagline: "Telemetry policies regarding our active fleet operations.",
    content: "To guarantee operational efficiency, client safety, and optimal route generation, our fleet utilizes embedded satellite GPS and onboard telematics. Geographic data endpoints are continuously transmitted to our central servers. This location positioning history is kept securely for compliance audits and corporate safety reviews."
  },
  {
    id: 2,
    icon: Lock,
    title: "3. Data Security & Encryption Standards",
    tagline: "Our engineering approaches to securing your private files.",
    content: "Your operational profiles are protected with industrial transport encryption systems. We apply physical firewalls, modern network perimeter restrictions, and strict access controls. Access to user location data and identity matrix logs is locked exclusively to authorized dispatch controllers and verification managers."
  },
  {
    id: 3,
    icon: UserCheck,
    title: "4. Information Sharing & Third-Party Metrics",
    tagline: "Clear disclosures regarding external vendor interactions.",
    content: "Sonu Tour and Travels does not trade or monetize your operational logs. Your itinerary points are shared strictly with assigned professional chauffeurs and regional dispatch hubs to complete the journey. When necessary, encrypted billing signatures are transmitted securely to payment gateways or your enterprise's processing systems."
  },
  {
    id: 4,
    icon: Scale,
    title: "5. Legal Obligations & Statutory Compliance",
    tagline: "Procedures followed under local statutory regulatory mandates.",
    content: "We reserve the right to disclose personal data endpoints if explicitly ordered by valid legal processes or state security divisions (such as regional highway authorities and government event security wings). This protocol is enforced to safeguard public safety, check compliance rules, or defend corporate assets."
  },
  {
    id: 5,
    icon: RefreshCw,
    title: "6. Operational Updates & Policy Alterations",
    tagline: "Tracking evolutionary patches to this privacy structure.",
    content: "This operational framework may undergo routine optimizations to match evolving logistics tech, security mandates, or state transport adjustments. We recommend tracking this portal regularly. Continued deployment of our fleet networks post-update forms a constructive confirmation of our policy parameters."
  }
];

const PrivacyPolicy = () => {
  // State for tracking active dropdown elements
  const [openSection, setOpenSection] = useState(0);
  // State for dynamic Client-side filtering
  const [searchQuery, setSearchQuery] = useState('');

  // Client-side real-time matching engine
  const filteredPolicy = useMemo(() => {
    return policyData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleDropdown = (id) => {
    setOpenSection(openSection === id ? -1 : id);
  };

  return (
    <div className="bg-stone-950 text-white min-h-screen font-sans antialiased relative">
      
      {/* Background Ambience Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Corporate Header Block */}
      <div className="relative border-b border-stone-900 bg-stone-900/20 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#EAB308] uppercase bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
            <Shield className="w-3.5 h-3.5" /> Security Assurance Core
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Privacy & <span className="text-[#EAB308]">Data Operations</span> Policy
          </h1>
          <p className="mt-4 text-stone-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Effective Date: May 20, 2026 | Document Reference: STT-POL-2026-V1.2
          </p>

          {/* Real-time Document Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search sections or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 text-stone-200 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] placeholder-stone-500 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* Main Core Document Workspace Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sticky Left Sidebar Navigation Map (Hidden on Mobile viewports) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 bg-stone-900/50 rounded-xl border border-stone-800/80 p-4 space-y-1">
              <span className="text-[10px] font-mono tracking-wider uppercase text-stone-500 block px-3 mb-2">
                Document Blueprint
              </span>
              {policyData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleDropdown(item.id)}
                  className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg transition-all truncate block ${
                    openSection === item.id
                      ? 'bg-amber-500/10 text-[#EAB308] border border-amber-500/20'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Accordion Dropdown List Workspace */}
          <div className="lg:col-span-3 space-y-4">
            {filteredPolicy.length > 0 ? (
              filteredPolicy.map((section) => {
                const SectionIcon = section.icon;
                const isSelected = openSection === section.id;

                return (
                  <div 
                    key={section.id}
                    className={`bg-stone-900/60 border rounded-xl overflow-hidden transition-all duration-200 ${
                      isSelected ? 'border-amber-500/20 shadow-md shadow-amber-500/[0.02]' : 'border-stone-800'
                    }`}
                  >
                    {/* Header Anchor Trigger */}
                    <button
                      onClick={() => toggleDropdown(section.id)}
                      className="w-full p-5 flex items-center justify-between gap-4 text-left transition-colors focus:outline-none group"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                          isSelected ? 'bg-amber-500/10 text-[#EAB308]' : 'bg-stone-950 text-stone-400 group-hover:text-stone-200'
                        }`}>
                          <SectionIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <h3 className={`font-bold text-sm sm:text-base tracking-wide transition-colors ${
                            isSelected ? 'text-[#EAB308]' : 'text-white group-hover:text-amber-400'
                          }`}>
                            {section.title}
                          </h3>
                          <p className="text-stone-400 text-xs mt-0.5 font-medium leading-normal">
                            {section.tagline}
                          </p>
                        </div>
                      </div>

                      <ChevronDown 
                        className={`w-4 h-4 text-stone-500 transition-transform duration-300 shrink-0 group-hover:text-[#EAB308] ${
                          isSelected ? 'rotate-180 text-[#EAB308]' : ''
                        }`} 
                      />
                    </button>

                    {/* Content Panel Area */}
                    <div 
                      className={`transition-all duration-300 ease-in-out border-stone-800 overflow-hidden ${
                        isSelected ? 'max-h-[500px] border-t bg-stone-950/40' : 'max-h-0'
                      }`}
                    >
                      <div className="p-5 sm:p-6 text-stone-300 text-xs sm:text-sm leading-relaxed tracking-normal font-normal">
                        {section.content}
                        
                        {/* Interactive Compliance Stamp Inside Expanded Dropdowns */}
                        <div className="mt-4 pt-4 border-t border-stone-900 flex items-center gap-2 text-[11px] font-mono text-stone-500">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Internal Regulatory Audit Passed — STT_SECURED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Fallback State for Null Query Matches */
              <div className="text-center py-16 bg-stone-900/30 rounded-xl border border-stone-800 border-dashed">
                <AlertTriangle className="w-8 h-8 text-[#EAB308] mx-auto mb-3 opacity-60" />
                <h4 className="text-white font-bold">No Policy Sections Found</h4>
                <p className="text-stone-400 text-xs mt-1">Adjust your keywords or term spelling queries.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Security Inquiry Assistance Block */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="p-6 bg-stone-900 border border-stone-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 max-sm:flex-col">
            <div className="p-3 bg-amber-500/5 text-[#EAB308] rounded-xl border border-stone-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">Have Data Protection Queries?</h4>
              <p className="text-stone-400 text-xs mt-0.5">Connect directly with our corporate operations team for clarity.</p>
            </div>
          </div>
          <a 
            href="mailto:privacy@sonutravels.com" 
            className="bg-[#EAB308] hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md shrink-0"
          >
            Contact Desk
          </a>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;