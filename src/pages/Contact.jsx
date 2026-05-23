import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Outstation Journey',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `Hello Sonu Tour and Travel, I would like to make an inquiry.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919870120218?text=${whatsappMsg}`, '_blank');
  };

  return (
    <div className="bg-stone-950 text-white min-h-screen pt-24 font-sans selection:bg-[#EAB308] selection:text-stone-950">
      {/* Contact Hero */}
      <div className="relative bg-gradient-to-r from-stone-900 to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EAB308_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#EAB308] uppercase bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
            <Phone size={14} className="text-[#EAB308]" /> 24/7 Support Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-[#EAB308]">Our Team</span>
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Have questions about fleet availability, custom routing, corporate contracts, or pricing? Reach out and we'll reply instantly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#EAB308] font-bold text-xs uppercase tracking-widest block">Connect Instantly</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">We Are Ready To Plan Your Journey</h2>
              <p className="text-stone-400 text-sm leading-relaxed">
                Our operations room is active around the clock. Use the links below to call, email, or find us.
              </p>
            </div>

            <div className="space-y-4">
              {/* Call Card */}
              <div className="flex items-center space-x-4 bg-stone-900/60 p-5 rounded-xl border border-stone-800 hover:border-amber-500/20 transition duration-300">
                <div className="bg-[#EAB308] text-stone-950 p-3 rounded-lg"><Phone size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold tracking-wider">Call Assistance</span>
                  <a href="tel:+919870120218" className="text-base sm:text-lg font-bold hover:text-[#EAB308] transition-colors">+91 9870120218</a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center space-x-4 bg-stone-900/60 p-5 rounded-xl border border-stone-800 hover:border-amber-500/20 transition duration-300">
                <div className="bg-[#EAB308] text-stone-950 p-3 rounded-lg"><MessageSquare size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold tracking-wider">24x7 WhatsApp Desk</span>
                  <a href="https://wa.me/919870120218" target="_blank" rel="noreferrer" className="text-base sm:text-lg font-bold hover:text-[#EAB308] transition-colors">Chat Instantly</a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center space-x-4 bg-stone-900/60 p-5 rounded-xl border border-stone-800 hover:border-amber-500/20 transition duration-300">
                <div className="bg-[#EAB308] text-stone-950 p-3 rounded-lg"><Mail size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold tracking-wider">Email Inquiry</span>
                  <a href="mailto:Info@sonutourandtravel.com" className="text-base sm:text-lg font-bold hover:text-[#EAB308] transition-colors">Info@sonutourandtravel.com</a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start space-x-4 bg-stone-900/60 p-5 rounded-xl border border-stone-800 hover:border-amber-500/20 transition duration-300">
                <div className="bg-[#EAB308] text-stone-950 p-3 rounded-lg mt-1"><MapPin size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold tracking-wider">Corporate Office</span>
                  <p className="text-sm text-stone-300 font-semibold mt-1 leading-relaxed">
                    Shop No: 08, Sector-35, Noida,<br />Uttar Pradesh - 201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl shadow-xl space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold tracking-wide">Instant Route & Rate Inquiry</h3>
                <p className="text-stone-400 text-xs">Fill out the details below to message us directly on WhatsApp.</p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Your Name" 
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg text-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="Your Active Number" 
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg text-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Required Service Route</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange} 
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg text-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] transition"
                    >
                      <option>Airport Pick / Drop</option>
                      <option>Outstation Journey</option>
                      <option>Corporate Contract</option>
                      <option>Wedding Luxury Rental</option>
                      <option>Local Hourly Rental</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Travel Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      required 
                      value={formData.date} 
                      onChange={handleInputChange} 
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg text-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">Additional Requirements (Optional)</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    rows="3" 
                    placeholder="E.g., Number of passengers, luggage details, specific pickup location..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg text-sm px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#EAB308] focus:border-[#EAB308] transition resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#EAB308] hover:bg-amber-400 text-stone-950 font-bold uppercase tracking-wider py-4 rounded-lg mt-2 shadow-lg transition duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={18} fill="currentColor" /> <span>Send inquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
