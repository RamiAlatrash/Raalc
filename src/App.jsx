import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import NotificationPopup from '@/components/NotificationPopup';
import Layout from '@/components/Layout';

function App() {
  const { i18n } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const location = useLocation();
  const lastDismissedRef = useRef(Date.now());

  useEffect(() => {
    // Show after 1 second on first load
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);

    // Show every minute, but only if not recently dismissed
    const interval = setInterval(() => {
      if (Date.now() - lastDismissedRef.current > 45000) {
        setShowNotification(true);
      }
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';
    i18n.changeLanguage(lang);
    // Remove global document direction setting to preserve animations
    // document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
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
    lastDismissedRef.current = Date.now();
  };
  
  return (
    <Layout scrollToSection={scrollToSection}>
      {showNotification && <NotificationPopup onClose={handleCloseNotification} scrollToSection={scrollToSection} />}
      <Outlet />
    </Layout>
  );
}

export default App;