import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import NotificationPopup from '@/components/NotificationPopup';
import Layout from '@/components/Layout';

function App() {
  const { i18n } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.classList.add('font-arabic', 'lang-ar');
      document.body.classList.remove('lang-en');
    } else {
      document.body.classList.remove('font-arabic', 'lang-ar');
      document.body.classList.add('lang-en');
    }
  }, [location, i18n]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  
  return (
    <Layout scrollToSection={scrollToSection}>
      {showNotification && <NotificationPopup onClose={handleCloseNotification} scrollToSection={scrollToSection} />}
      <Outlet />
    </Layout>
  );
}

export default App;