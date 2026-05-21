import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Dynamic glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu completely on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveMobileSubmenu(null);
  }, [location]);

  // Handle outside clicks to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Advanced structured Navigation Map
  const navLinks = [
    { name: 'HOME', path: '/' },
    {
      name: 'PROFILE',
      hasDropdown: true,
      subLinks: [
        { name: 'About Us', path: '/about-us' },
        { name: 'Our USP', path: '/usp' },
      ],
    },
    // {
    //   name: 'SERVICES',
    //   hasDropdown: true,
    //   subLinks: [
    //     { name: 'Services Offered', path: '/services-offered' },
    //     { name: 'Major Events Handled', path: '/events' },
    //   ],
    // },
    {
      name: 'PACKAGES',
      hasDropdown: true,
      subLinks: [
        { name: 'Featured Packages', path: '/featured-packages' },
        { name: 'Tour Packages', path: '/tour-packages' },
      ],
    },

    // Replace the old PACKAGES object structure inside your Header.jsx navLinks array:
// {
//   name: 'PACKAGES',
//   hasDropdown: true,
//   subLinks: [
//     { name: 'Pilgrimage Tours', path: '/tour-packages?cat=Pilgrimage Tours', scrollId: 'pilgrimage-tours' },
//     { name: 'Heritage Tours', path: '/tour-packages?cat=Heritage Tours', scrollId: 'heritage-tours' },
//     { name: 'Short Trips', path: '/tour-packages?cat=Short Trips', scrollId: 'short-trips' },
//     { name: 'Long Getaways', path: '/tour-packages?cat=Long Getaways', scrollId: 'long-getaways' },
//     { name: 'Hill Stations', path: '/tour-packages?cat=Hill Stations', scrollId: 'hill-stations' },
//   ],
// },
    {
      name: 'CAR FLEET',
      hasDropdown: true,
      subLinks: [
        { name: 'Maruti Dzire', path: '/fleet/dzire' },
        { name: 'Maruti Ciaz', path: '/fleet/ciaz' },
        { name: 'Toyota Fortuner', path: '/fleet/fortuner' },
        { name: 'Maruti Ertiga', path: '/fleet/ertiga' },
        { name: 'Toyota Crysta', path: '/fleet/crysta' },
        { name: 'Toyota Camry', path: '/fleet/camry' },
      ],
    },
    {
      name: 'PRIVACY POLICY',  
      hasDropdown: false,
      path: '/privacy-policy',
    },
  ];

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2B1B04]/95 backdrop-blur-md shadow-2xl border-b border-yellow-600/20 py-1' 
          : 'bg-[#2B1B04] py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group transform transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src="/logo/logo.webp"
              alt="Sonu Tour & Travel Logo" 
              className="h-16 w-auto object-contain drop-shadow-[0_2px_8px_rgba(234,179,8,0.2)]"
            />
          </Link>

          {/* Desktop Navigation Engine */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group/dropdown py-4">
                {link.hasDropdown ? (
                  // Dropdown Trigger Link
                  <button className="flex items-center space-x-1 text-xs lg:text-sm font-bold tracking-wider text-stone-200 hover:text-[#EAB308] transition-colors duration-200 uppercase">
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="transform transition-transform duration-200 group-hover/dropdown:rotate-180 text-stone-400 group-hover/dropdown:text-[#EAB308]" />
                  </button>
                ) : (
                  // Standard Link
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-xs lg:text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${
                        isActive ? 'text-[#EAB308]' : 'text-stone-200 hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                    <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#EAB308] transition-all duration-300 group-hover/dropdown:w-full" />
                  </NavLink>
                )}

                {/* Premium Animated Flyout Sub-menu panel */}
                {link.hasDropdown && (
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-200 ease-out z-50">
                    <div className="bg-[#1f1303] border border-yellow-600/20 rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                      {link.subLinks.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-xs lg:text-sm font-semibold rounded-lg transition-all duration-150 ${
                              isActive 
                                ? 'bg-[#EAB308] text-stone-950' 
                                : 'text-stone-300 hover:bg-stone-800/60 hover:text-[#EAB308]'
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Accent Yellow Action CTA */}
            <Link
              to="/contact"
              className="bg-[#EAB308] hover:bg-[#FACC15] text-stone-950 font-bold text-xs lg:text-sm uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-[0_4px_20px_rgba(234,179,8,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              CONTACT US
            </Link>
          </div>

          {/* Quick Contact Widget */}
          <div className="hidden xl:flex items-center space-x-3 bg-stone-900/40 border border-stone-700/50 px-4 py-2 rounded-full text-stone-300">
            <div className="bg-[#EAB308] p-1.5 rounded-full text-stone-950">
              <Phone size={14} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-stone-400 font-medium tracking-wider uppercase">24/7 Support</span>
              <a href="tel:+919870120218" className="text-sm font-bold hover:text-[#EAB308] transition-colors">+91 9870120218</a>
            </div>
          </div>

          {/* Responsive Mobile Trigger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-200 hover:text-[#EAB308] hover:bg-stone-800/50 transition-all z-[60]"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Full-screen Overlay Mobile Component */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="fixed inset-0 top-[80px] md:hidden bg-[#2B1B04] z-[55] overflow-y-auto px-5 py-6 border-t border-yellow-600/10 shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col space-y-2 max-w-md mx-auto pb-12">
              {navLinks.map((link, idx) => (
                <div key={idx} className="border-b border-stone-800/40 last:border-0 pb-1">
                  {link.hasDropdown ? (
                    <>
                      {/* Accordion header line toggler */}
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="flex justify-between items-center w-full text-base font-bold tracking-wide uppercase py-3.5 px-4 rounded-xl text-stone-300 active:bg-stone-800/40"
                      >
                        <span className={activeMobileSubmenu === idx ? 'text-[#EAB308]' : ''}>{link.name}</span>
                        <ChevronDown 
                          size={18} 
                          className={`transform transition-transform duration-200 ${
                            activeMobileSubmenu === idx ? 'rotate-180 text-[#EAB308]' : 'text-stone-500'
                          }`} 
                        />
                      </button>

                      {/* Smooth collapsible Accordion item container */}
                      <div 
                        className={`transition-all duration-300 overflow-hidden ${
                          activeMobileSubmenu === idx ? 'max-h-[350px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="bg-[#1f1303] rounded-xl p-1.5 space-y-1 ml-2 border border-yellow-600/5">
                          {link.subLinks.map((sub, subIdx) => (
                            <NavLink
                              key={subIdx}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block text-sm font-semibold py-3 px-4 rounded-lg transition-all ${
                                  isActive 
                                    ? 'bg-[#EAB308]/20 text-[#EAB308] border-l-4 border-[#EAB308]' 
                                    : 'text-stone-400 hover:text-white'
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-base font-bold tracking-wide uppercase py-3.5 px-4 rounded-xl block transition-all ${
                          isActive 
                            ? 'bg-[#EAB308]/10 text-[#EAB308] border-l-4 border-[#EAB308]' 
                            : 'text-stone-300 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile Bottom Extra Info Widgets */}
              <div className="pt-6 mt-2 border-t border-stone-800/80 flex flex-col space-y-4">
                <Link
                  to="/contact"
                  className="w-full text-center bg-[#EAB308] text-stone-950 font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg hover:bg-[#FACC15]"
                >
                  CONTACT US
                </Link>

                <a 
                  href="tel:+919870120218" 
                  className="flex items-center justify-center space-x-3 text-stone-300 py-3 bg-stone-900/30 rounded-xl border border-stone-800/50"
                >
                  <Phone size={18} />
                  <span className="font-bold text-sm">+91 9870120218</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;