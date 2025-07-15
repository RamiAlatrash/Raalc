import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const footerText = {
  en: {
    description_p1: "RAALC provides top-tier government and legal consulting services, simplifying complex procedures with expertise and efficiency.",
    description_p2: "Your trusted partner for navigating the legal landscape in the UAE.",
    quick_links: "Quick Links",
    home: "Home",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
    copyright: "© {{year}} Raalc Technologies Inc. All rights reserved.",
    made_by: "Made by Raalc Govt. Services"
  },
  ar: {
    description_p1: "تقدم رالك أفضل الخدمات الحكومية والاستشارات القانونية، وتبسط الإجراءات المعقدة بالخبرة والكفاءة.",
    description_p2: "شريكك الموثوق للتنقل في المشهد القانوني في الإمارات العربية المتحدة.",
    quick_links: "روابط سريعة",
    home: "الرئيسية",
    services: "الخدمات",
    testimonials: "الشهادات",
    contact: "التواصل",
    copyright: "© {{year}} شركة رالك تكنولوجيز. جميع الحقوق محفوظة.",
    made_by: "صنع بواسطة رالك للخدمات الحكومية"
  }
};

const Footer = ({ scrollToSection }) => {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';
  const t = (key, params) => {
    let text = footerText[lang][key] || key;
    if (params) {
      Object.keys(params).forEach(pKey => {
        text = text.replace(`{{${pKey}}}`, params[pKey]);
      });
    }
    return text;
  };
  
  const currentYear = new Date().getFullYear();

  const handleSocialClick = () => {
    scrollToSection('home');
  };

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, label: 'Facebook' },
    { icon: <Twitter className="h-6 w-6" />, label: 'Twitter' },
    { icon: <Instagram className="h-6 w-6" />, label: 'Instagram' },
  ];

  const quickNavLinks = [
    { name: t('home'), id: 'home' },
    { name: t('services'), id: 'services' },
    { name: t('testimonials'), id: 'testimonials' },
    { name: t('contact'), id: 'contact' },
  ];

  return (
    <footer dir={lang === 'ar' ? 'rtl' : 'ltr'} className="relative bg-gradient-to-br from-[#e3ecf7] via-[#f5f7fa] to-[#d1e3f8] border-t border-border text-foreground overflow-hidden">
      <img
        src="/images/robot-images/robot15.png"
        alt=""
        className="absolute -bottom-4 -left-8 w-24 opacity-30 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Animated Blob */}
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] z-0 opacity-30 pointer-events-none blob-animate-1">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="footerBlob" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#footerBlob)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-4">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 focus:outline-none">
              <img src="/images/logwhite.png" alt="RAALC Logo" className="h-8 w-auto" />
              <span className={`text-2xl font-heading text-primary ${lang === 'ar' ? 'font-arabic' : ''}`}>Raalc</span>
            </button>
            <p className={`text-base md:text-lg text-brand-dark-grey ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}>
              {t('description_p1')}
            </p>
            <p className={`text-base md:text-lg text-brand-dark-grey ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}>
              {t('description_p2')}
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <button
                  key={social.label}
                  onClick={handleSocialClick}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-row items-start space-x-4 relative">
            <div className="flex flex-col justify-start">
              <p className={`font-heading text-xl text-primary mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t('quick_links')}</p>
              <ul className="space-y-4">
                {quickNavLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.id)} 
                      className={`hover:text-primary transition-colors duration-300 text-base md:text-lg text-brand-dark-grey focus:outline-none ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Robot17 beside Quick Links */}
            <img
              src="/images/robot-images/robot17.png"
              alt="Footer Robot"
              className="w-24 h-24 md:w-36 md-h-36 ml-4 animate-footer-robot-move"
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
          </div>
        </div>

        <div className={`border-t border-border pt-8 mt-8 text-center text-sm text-brand-dark-grey ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}>
          <p>{t('copyright', { year: currentYear })}</p>
          <p className="mt-1">
            {t('made_by')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;