import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';

const navText = {
  en: {
    home: "Home",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
    slogan: "Govt. Services",
    brand: "RAALC"
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    testimonials: "الشهادات",
    contact: "التواصل",
    slogan: "خدمات حكومية",
    brand: "رالك"
  }
};

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';

  const navItems = [
    { name: navText[lang].home, id: 'home' },
    { name: navText[lang].services, id: 'services' },
    { name: navText[lang].testimonials, id: 'testimonials' },
    { name: navText[lang].contact, id: 'contact' },
  ];

  // Keep RTL order for Arabic navigation
  const navItemsToRender = lang === 'ar' ? [...navItems].reverse() : navItems;

  const changeLanguage = (lng) => {
    const path = lng === 'ar' ? '/ar' : '/';
    navigate(path);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    if (isOpen) toggleMenu();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="h-28 bg-white/20 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-white/30"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo + Title - Consistent layout for both languages */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 h-full focus:outline-none"
          >
            <img
              src="/images/LOGO-BLACK FONT.png"
              alt="RAALC Logo"
              className="h-16 w-auto"
            />
            <span
              className="flex flex-col items-center text-primary leading-none"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif !important' }}
            >
              <span className={`text-3xl font-black tracking-widest bg-gradient-to-r from-primary via-blue-500 to-blue-300 bg-clip-text text-transparent drop-shadow-lg ${lang === 'ar' ? 'font-arabic' : ''}`} style={{ animation: 'smooth-glow 3s ease-in-out infinite' }}>{navText[lang].brand}</span>
              <span className={`text-sm font-bold ${lang === 'ar' ? 'font-arabic leading-tight' : '-mt-2'}`}>{navText[lang].slogan}</span>
            </span>
          </button>

          {/* Desktop Links - Fixed positioning for consistency */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItemsToRender.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-6 py-4 rounded-md text-xl font-bold text-brand-dark-grey hover:text-primary transition duration-200 transform hover:scale-110 whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher - ALWAYS in the same position */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')}>
              English
            </Button>
            <Button variant="ghost" size="sm" onClick={() => changeLanguage('ar')}>
              العربية
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-primary hover:text-primary/80"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Language buttons ALWAYS in same position */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/30 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItemsToRender.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 rounded-md text-base font-medium text-brand-dark-grey hover:text-primary hover:bg-secondary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            {/* Language selection ALWAYS at the bottom in same position */}
            <div className="flex justify-center items-center space-x-2 pt-4 border-t border-white/30">
              <Button variant="ghost" size="sm" onClick={() => changeLanguage('en')}>
                English
              </Button>
              <Button variant="ghost" size="sm" onClick={() => changeLanguage('ar')}>
                العربية
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
