import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Compass, Calendar, Users, Globe, Star, ArrowRight, MessageCircle, HelpCircle, Search } from 'lucide-react';

// ==========================================
// 1. TOUR PACKAGES DATA STRUCTURE
// ==========================================
const TOUR_CATEGORIES = {
  PILGRIMAGE: 'Pilgrimage Tours',
  HERITAGE: 'Heritage Tours',
  SHORT_TRIPS: 'Short Trips',
  LONG_GETAWAYS: 'Long Getaways',
  HILL_STATIONS: 'Hill Stations',
};

const packagesData = [
  {
    id: 'buddhism-pilgrimage',
    name: 'Buddhism Pilgrimage Tour',
    category: TOUR_CATEGORIES.PILGRIMAGE,
    duration: '5 Nights / 6 Days',
    price: '₹18,500',
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUy4Sov53lku6WhsZpnl1K396PUxGJDE5Pg&s',
    destinations: 'Bodhgaya, Sarnath, Nalanda, Rajgir',
    bestSeason: 'October to March',
    groupSize: '2 - 12 Pax',
    languages: 'English, Hindi',
    difficulty: 'Easy',
    highlights: ['Visit Mahabodhi Temple', 'Explore ancient Nalanda University', 'Holy Sarnath deer park tour'],
  },
  {
    id: 'char-dham',
    name: 'Char Dham Tour',
    category: TOUR_CATEGORIES.PILGRIMAGE,
    duration: '11 Nights / 12 Days',
    price: '₹34,999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626621422537-49619e9c493c?auto=format&fit=crop&w=600&q=80',
    destinations: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
    bestSeason: 'May to October',
    groupSize: '4 - 20 Pax',
    languages: 'Hindi, English',
    difficulty: 'Challenging',
    highlights: ['Sacred Himalayan Darshan', 'VVIP temple pass arrangements', 'Experienced mountain drivers'],
  },
  {
    id: 'delhi-agra-same-day',
    name: 'Delhi-Agra Same Day Tour',
    category: TOUR_CATEGORIES.SHORT_TRIPS,
    duration: '1 Day',
    price: '₹2,499',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    destinations: 'Taj Mahal, Agra Fort, Sikandra',
    bestSeason: 'Year-Round',
    groupSize: '1 - 7 Pax',
    languages: 'English, Hindi, French',
    difficulty: 'Easy',
    highlights: ['Expressway AC sedan trip', 'Sunrise/Sunset Taj view', 'Professional tour guide included'],
  },
  {
    id: 'delhi-agra-overnight',
    name: 'Delhi-Agra Overnight Tour',
    category: TOUR_CATEGORIES.SHORT_TRIPS,
    duration: '2 Days / 1 Night',
    price: '₹5,200',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    destinations: 'Agra, Fatehpur Sikri, Mathura Temples',
    bestSeason: 'October to April',
    groupSize: '2 - 6 Pax',
    languages: 'English, Hindi',
    difficulty: 'Easy',
    highlights: ['Overnight 4-star luxury stay', 'Explore eerie Fatehpur Sikri', 'Yamuna expressway cruising'],
  },
  {
    id: 'delhi-jaipur-delhi',
    name: 'Delhi-Jaipur-Delhi Tour',
    category: TOUR_CATEGORIES.HERITAGE,
    duration: '3 Days / 2 Nights',
    price: '₹8,499',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
    destinations: 'Hawa Mahal, Amer Fort, Chokhi Dhani',
    bestSeason: 'October to March',
    groupSize: '2 - 8 Pax',
    languages: 'English, Hindi',
    difficulty: 'Easy',
    highlights: ['Royal heritage palace stay', 'Elephant ride at Amer Fort', 'Authentic Rajasthani dinner show'],
  },
  {
    id: 'delhi-srinagar',
    name: 'Delhi-Srinagar Tour',
    category: TOUR_CATEGORIES.HILL_STATIONS,
    duration: '5 Nights / 6 Days',
    price: '₹19,999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1566121318599-23ef6f4ce00b?auto=format&fit=crop&w=600&q=80',
    destinations: 'Srinagar, Gulmarg, Pahalgam, Sonamarg',
    bestSeason: 'April to October / Jan for Snow',
    groupSize: '2 - 10 Pax',
    languages: 'English, Hindi',
    difficulty: 'Moderate',
    highlights: ['Luxury Houseboat overnight stay', 'Shikara Ride on Dal Lake', 'Gulmarg Gondola cable car ride'],
  },
  {
    id: 'dharamshala-tour',
    name: 'Dharamshala Tour',
    category: TOUR_CATEGORIES.HILL_STATIONS,
    duration: '4 Nights / 5 Days',
    price: '₹11,500',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1626621422119-073041933a0b?auto=format&fit=crop&w=600&q=80',
    destinations: 'Mcleodganj, Cricket Stadium, Bhagsunag',
    bestSeason: 'March to June / Sept to Dec',
    groupSize: '2 - 8 Pax',
    languages: 'English, Hindi',
    difficulty: 'Moderate',
    highlights: ['Visit His Holiness Dalai Lama Temple', 'Scenic HPCA Stadium tour', 'Stunning Dhauladhar peak views'],
  },
  {
    id: 'golden-triangle',
    name: 'Golden Triangle Tour',
    category: TOUR_CATEGORIES.HERITAGE,
    duration: '5 Nights / 6 Days',
    price: '₹16,999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1598977123418-45f04b01d423?auto=format&fit=crop&w=600&q=80',
    destinations: 'Delhi, Agra, Jaipur Circuit',
    bestSeason: 'October to March',
    groupSize: '2 - 15 Pax',
    languages: 'English, Hindi, Spanish',
    difficulty: 'Easy',
    highlights: ['Comprehensive North India intro', '3 UNESCO World Heritage Sites', 'Premium dedicated private cab'],
  },
  {
    id: 'south-india-extensive',
    name: 'South India Extensive Tour',
    category: TOUR_CATEGORIES.LONG_GETAWAYS,
    duration: '8 Nights / 9 Days',
    price: '₹27,500',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80',
    destinations: 'Cochin, Munnar, Alleppey Houseboat, Kanyakumari',
    bestSeason: 'September to March',
    groupSize: '2 - 12 Pax',
    languages: 'English, Hindi, Malayalam',
    difficulty: 'Moderate',
    highlights: ['Tea garden trails in Munnar', 'Backwater luxury cruise overnight', 'Tranquil ocean sunset confluence'],
  },
  {
    id: 'mumbai-goa',
    name: 'Mumbai-Goa Tour',
    category: TOUR_CATEGORIES.LONG_GETAWAYS,
    duration: '6 Nights / 7 Days',
    price: '₹21,000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
    destinations: 'Gateway of India, North Goa Beaches, Old Goa',
    bestSeason: 'November to February',
    groupSize: '4 - 10 Pax',
    languages: 'English, Hindi',
    difficulty: 'Easy',
    highlights: ['Mumbai Bollywood & Marine drive', 'Goa beach resort relaxation', 'Scuba diving options available'],
  },
  {
    id: 'rajasthan-tour',
    name: 'Rajasthan Tour',
    category: TOUR_CATEGORIES.HERITAGE,
    duration: '10 Nights / 11 Days',
    price: '₹38,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
    destinations: 'Jaipur, Jodhpur, Jaisalmer Desert, Udaipur',
    bestSeason: 'October to March',
    groupSize: '2 - 10 Pax',
    languages: 'English, Hindi',
    difficulty: 'Moderate',
    highlights: ['Thar Desert camping & camel safari', 'Udaipur romantic lake boat tour', 'Massive fort explorations'],
  },
  {
    id: 'vaishno-devi',
    name: 'Vaishno Devi Tour',
    category: TOUR_CATEGORIES.PILGRIMAGE,
    duration: '3 Nights / 4 Days',
    price: '₹7,999',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&w=600&q=80',
    destinations: 'Katra, Bhawan, Ardhkuwari',
    bestSeason: 'Year-Round / Avoid Monsoons',
    groupSize: '2 - 15 Pax',
    languages: 'Hindi, English',
    difficulty: 'Challenging',
    highlights: ['Seamless Katra hotel pickup', 'Helicopter ticket booking help', 'Yatra Parchi protocol assistance'],
  },
];

// ==========================================
// 2. WHATSAPP LINK GENERATOR ENGINE
// ==========================================
const getWhatsAppLink = (pkg) => {
  const phone = '919870120218';
  const text = `Hi Sonu Tour & Travels,
I'm interested in the *${pkg.name}*.
Duration: ${pkg.duration}
Travelers: [Number of people]
Preferred Date: [DD/MM/YYYY]

Please share:
- Best price for our group size
- Hotel details
- Detailed Itinerary
- Vehicle Availability`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

// ==========================================
// 3. MAIN COMPONENT LAYOUT
// ==========================================
const TourPackages = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle auto-scroll hooks triggered from Header navigation selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('cat');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      const cleanId = categoryParam.toLowerCase().replace(/\s+/g, '-');
      const targetSection = document.getElementById(cleanId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'moderate': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'challenging': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-stone-500/20 text-stone-400';
    }
  };

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.destinations.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#130b02] text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Title Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[#EAB308] text-xs font-bold tracking-widest uppercase bg-[#EAB308]/10 px-4 py-1.5 rounded-full border border-yellow-600/20">
          Sonu Tour & Travels Fleet Packages
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-white uppercase">
          Exclusive <span className="text-[#EAB308]">Tour Packages</span>
        </h1>
        <p className="max-w-2xl mx-auto text-stone-400 text-sm sm:text-base">
          Embark on highly curated custom itineraries spanning northern historical gems, peaceful holy shrines, and vast tropical shorelines.
        </p>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="max-w-7xl mx-auto mb-12 bg-[#2B1B04]/60 backdrop-blur-md p-4 rounded-2xl border border-yellow-600/10 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input Box */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
          <input
            type="text"
            placeholder="Search destination or package..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1f1303] border border-stone-800 focus:border-[#EAB308] rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium text-stone-200 outline-none transition-all placeholder-stone-600"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          {['All', ...Object.values(TOUR_CATEGORIES)].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#EAB308] text-stone-950 shadow-lg shadow-yellow-600/20'
                  : 'bg-[#1f1303] text-stone-400 hover:text-white border border-stone-800/60'
              }`}
            >
              {category.replace(" Tours", "").replace(" Trips", "").replace(" Getaways", "")}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive 3D Flip Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
        {filteredPackages.map((pkg) => (
          <div 
            key={pkg.id} 
            id={pkg.category.toLowerCase().replace(/\s+/g, '-')}
            className="group h-[500px] [perspective:1200px] cursor-pointer"
          >
            {/* 3D Flip Engine */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* CARD FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-xl border border-yellow-600/10 bg-[#1f1303]">
                <div className="relative h-2/3 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1303] via-transparent to-black/40 z-10" />
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-[#EAB308] text-stone-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {pkg.duration}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 z-20 flex items-center bg-stone-950/80 backdrop-blur-sm border border-stone-800 px-2 py-1 rounded-md">
                    <Star size={12} className="text-amber-400 fill-current mr-1" />
                    <span className="text-white text-xs font-bold">{pkg.rating}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[#EAB308] text-[10px] font-bold tracking-widest uppercase block mb-1">
                      {pkg.category}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide line-clamp-1 drop-shadow-md">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="h-1/3 p-5 flex flex-col justify-between bg-[#1f1303]">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-stone-500 text-[10px] block font-medium tracking-wider uppercase">Starting From</span>
                      <span className="text-2xl font-black text-white tracking-tight">{pkg.price}/-</span>
                      <span className="text-stone-400 text-xs font-semibold ml-1">per person</span>
                    </div>
                    <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border ${getDifficultyColor(pkg.difficulty)}`}>
                      {pkg.difficulty}
                    </span>
                  </div>

                  <div className="border-t border-stone-800/60 pt-3 flex items-center justify-between text-stone-500 text-xs">
                    <span className="flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-[#EAB308]/60" /> Hover to Explore
                    </span>
                    <ArrowRight size={14} className="transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* CARD BACK SIDE */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-[#2B1B04] p-6 border-2 border-[#EAB308]/60 shadow-2xl flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-extrabold text-white uppercase tracking-wide leading-tight max-w-[75%]">
                      {pkg.name}
                    </h3>
                    <span className="text-[#EAB308] font-black text-sm whitespace-nowrap bg-[#EAB308]/10 px-2.5 py-1 rounded-lg">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="mb-4">
                    <span className="text-[#EAB308] text-[10px] font-bold tracking-wider uppercase block mb-2">Key Highlights</span>
                    <ul className="space-y-1.5">
                      {pkg.highlights.map((hl, i) => (
                        <li key={i} className="text-xs text-stone-300 flex items-start gap-2">
                          <span className="text-[#EAB308] mt-0.5">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro Grid Metadata */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-yellow-600/10 text-xs">
                    <div className="flex items-center gap-2 text-stone-300">
                      <Compass size={14} className="text-[#EAB308] shrink-0" />
                      <div className="truncate">
                        <span className="text-stone-500 text-[9px] block uppercase">Destinations</span>
                        <span className="font-semibold">{pkg.destinations}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-stone-300">
                      <Calendar size={14} className="text-[#EAB308] shrink-0" />
                      <div>
                        <span className="text-stone-500 text-[9px] block uppercase">Best Season</span>
                        <span className="font-semibold">{pkg.bestSeason}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-stone-300">
                      <Users size={14} className="text-[#EAB308] shrink-0" />
                      <div>
                        <span className="text-stone-500 text-[9px] block uppercase">Group Size</span>
                        <span className="font-semibold">{pkg.groupSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-stone-300">
                      <Globe size={14} className="text-[#EAB308] shrink-0" />
                      <div>
                        <span className="text-stone-500 text-[9px] block uppercase">Languages</span>
                        <span className="font-semibold">{pkg.languages}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action CTA */}
                <div className="mt-4 pt-4 border-t border-yellow-600/10">
                  <a
                    href={getWhatsAppLink(pkg)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#EAB308] hover:bg-[#FACC15] active:scale-95 text-stone-950 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-600/10 transition-all duration-300"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Empty State Fallback Handler */}
      {filteredPackages.length === 0 && (
        <div className="text-center max-w-md mx-auto mt-20 p-8 border border-stone-800 bg-[#1f1303] rounded-2xl">
          <p className="text-stone-400 font-medium">No custom tour packages match your search selection.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="text-[#EAB308] text-xs font-bold underline uppercase tracking-widest mt-3 block mx-auto"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TourPackages;