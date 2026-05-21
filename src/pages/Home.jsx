import { useState } from 'react';
import { 
  Phone, MessageSquare, Award, ShieldCheck, Clock, MapPin, DollarSign, User, Briefcase, Plane, Building, Compass, Heart, Sparkles, ArrowRight, Star
} from 'lucide-react';

import WelcomeSection from '../section/welcome_section';
import About from '../section/About';
import FleetShowcase from '../section/fleet_showcase';
import Services from '../section/services';
import WhyChoose from '../section/why_choose';
import Testimonials from '../section/testimonials';

const Home = () => {
  // Quick Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Outstation Journey',
    date: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    // Pre-filled message configuration
    const message = `Hello Sonu Tour and Travel, I would like to make an inquiry.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}`;
    window.open(`https://wa.me/919870120218?text=${message}`, '_blank');
  };

 

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 font-sans selection:bg-[#EAB308] selection:text-stone-950">
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-[#2B1B04] text-white overflow-hidden py-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#180f02] via-[#2B1B04]/90 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EAB308]/10 border border-[#EAB308]/30 px-3 py-1.5 rounded-full text-[#EAB308] text-xs font-semibold tracking-wider uppercase">
              <Award size={14} /> <span>Premium Transport Solution</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="block">Book Your Luxury Taxi Now –</span>
              <span className="block overflow-hidden whitespace-nowrap border-r-4 border-[#EAB308] pr-1 text-[#EAB308] typewriter">
                Best Price Guaranteed
              </span>
            </h1>
            <p className="text-stone-300 text-lg max-w-xl">
              Experience unparalleled road travel with North India's elite transport service. Chauffeur-driven executive fleets tailored for luxury, safety, and ultimate comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/919870120218" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 bg-[#EAB308] hover:bg-[#FACC15] text-stone-950 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-yellow-600/10">
                <MessageSquare size={20} fill="currentColor" /> <span>Book Via WhatsApp</span>
              </a>
              <a href="tel:+919870120218" className="flex items-center justify-center space-x-2 border-2 border-stone-400 hover:border-[#EAB308] text-white hover:text-[#EAB308] font-bold px-8 py-4 rounded-xl transition duration-300">
                <Phone size={20} /> <span>Call Now Support</span>
              </a>
            </div>
          </div>

          {/* Quick Instant Inquiry Widget Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-stone-900 border border-white/20">
              <h3 className="text-xl font-bold uppercase tracking-wide text-[#2B1B04] mb-1">Instant Booking Inquiry</h3>
              <p className="text-stone-500 text-sm mb-6">Get a premium tailored quote instantly.</p>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-stone-100 rounded-lg border-none focus:ring-2 focus:ring-[#EAB308] text-sm" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-stone-100 rounded-lg border-none focus:ring-2 focus:ring-[#EAB308] text-sm" placeholder="Your Active Number" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Required Journey Route</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 bg-stone-100 rounded-lg border-none focus:ring-2 focus:ring-[#EAB308] text-sm">
                    <option>Airport Pick / Drop</option>
                    <option>Outstation Journey</option>
                    <option>Corporate Contract</option>
                    <option>Wedding Luxury Rental</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">Travel Date</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 bg-stone-100 rounded-lg border-none focus:ring-2 focus:ring-[#EAB308] text-sm" />
                </div>
                <button type="submit" className="w-full bg-[#2B1B04] text-[#EAB308] hover:bg-stone-900 font-bold uppercase tracking-wider py-4 rounded-lg mt-2 shadow-lg transition duration-300">
                  Request Rate Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <WelcomeSection />
      {/* --- ABOUT US SECTION --- */}
      <About />
      {/* --- FLEET SHOWCASE SECTION --- */}
      <FleetShowcase />
      {/* --- SERVICES SECTION --- */}
      <Services />

      {/* --- WHY CHOOSE US SECTION --- */}
      <WhyChoose />

      {/* --- TESTIMONIALS SECTION --- */}
      <Testimonials />  

      {/* --- CONTACT & INQUIRY INTEGRATION SECTION --- */}
      <section className="bg-[#2B1B04] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <span className="text-[#EAB308] font-bold text-sm tracking-widest uppercase">Connect Desk</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Plan Your Upcoming Journey</h2>
              <p className="text-stone-400 mt-4 max-w-md">Reach out to our operations room via active touchlines. We respond instantly.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <div className="bg-[#EAB308] text-stone-950 p-2.5 rounded-lg"><Phone size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold">Call Assistance</span>
                  <a href="tel:+919870120218" className="text-lg font-bold hover:text-[#EAB308] transition-colors">+91 9870120218</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                <div className="bg-[#EAB308] text-stone-950 p-2.5 rounded-lg"><MessageSquare size={20} /></div>
                <div>
                  <span className="text-xs text-stone-500 block uppercase font-bold">24x7 WhatsApp Desk</span>
                  <a href="https://wa.me/919870120218" target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-[#EAB308] transition-colors">Chat Instantly</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Contextual Form Container */}
          <div className="bg-stone-900/80 border border-stone-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold tracking-wide mb-6 text-center">Send An Quick Message Desk</h3>
            <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full bg-stone-800 border-none rounded-lg text-sm px-4 py-3 text-white focus:ring-2 focus:ring-[#EAB308]" />
              <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full bg-stone-800 border-none rounded-lg text-sm px-4 py-3 text-white focus:ring-2 focus:ring-[#EAB308]" />
              <select name="service" value={formData.service} onChange={handleInputChange} className="w-full sm:col-span-2 bg-stone-800 border-none rounded-lg text-sm px-4 py-3 text-white focus:ring-2 focus:ring-[#EAB308]">
                <option>Outstation Journey</option>
                <option>Airport Transfers</option>
                <option>Corporate Travel</option>
                <option>Luxury Car Rentals</option>
              </select>
              <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full sm:col-span-2 bg-stone-800 border-none rounded-lg text-sm px-4 py-3 text-white focus:ring-2 focus:ring-[#EAB308]" />
              <button type="submit" className="w-full sm:col-span-2 bg-[#EAB308] hover:bg-[#FACC15] text-stone-950 font-bold uppercase tracking-wider py-4 rounded-lg mt-2 shadow-lg transition duration-300">
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;