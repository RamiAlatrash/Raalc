import React, { Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const notificationText = {
  en: {
    close_aria_label: "Close notification",
    title: "GET SERVED ONLINE",
    subtitle: "The Best way to experience government services!",
    button_text: "GET Online token",
    enquiry_label: "For Enquiry:",
    enquiry_number: "+971 4 342 5006",
    complaints_label: "For Complaints:",
    complaints_number: "+971 55 120 7555",
    working_hours_title: "Working Hours",
    working_hours_day1: "Mon–Thu: 8 am–7:30 pm",
    working_hours_day2: "Friday: 8 am–12 pm"
  },
  ar: {
    close_aria_label: "إغلاق الإشعار",
    title: "احصل على الخدمة عبر الإنترنت",
    subtitle: "!أفضل طريقة لتجربة الخدمات الحكومية",
    button_text: "احصل على توكن عبر الإنترنت",
    enquiry_label: "للاستفسار:",
    enquiry_number: "+971 4 342 5006",
    complaints_label: "للشكاوى:",
    complaints_number: "+971 55 120 7555",
    working_hours_title: "ساعات العمل",
    working_hours_day1: "الاثنين - الخميس: 8 صباحًا - 7:30 مساءً",
    working_hours_day2: "الجمعة: 8 صباحًا - 12 ظهرًا"
  }
};

const NotificationPopup = ({ onClose, scrollToSection }) => {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ar') ? 'ar' : 'en';
  const t = (key) => notificationText[lang][key] || key;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <Fragment>
        {/* Background Dimming Overlay */}
        <motion.div
          key="notification-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-[50]"
        />
        
        <motion.div
          key="notification-content"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="fixed top-24 inset-x-0 mx-auto w-11/12 max-w-md rounded-xl z-[60] overflow-hidden min-h-[500px]"
        >
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/notification-bg.mp4" type="video/mp4" />
            </video>
            {/* Overlay with 50% transparency */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
          </div>

          {/* Content */}
          <div className="relative p-6 border border-primary/30 h-full flex flex-col justify-between">
            <button
              onClick={onClose}
              className={`absolute top-3 ${lang === 'ar' ? 'left-3' : 'right-3'} text-brand-dark-grey hover:text-primary transition-colors`}
              aria-label={t('close_aria_label')}
            >
              <X size={20} />
            </button>

            {/* IMAGE FROM PUBLIC FOLDER */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/LOGO-BLACK FONT.png"
                alt="RAALC Govt. Services Logo"
                className="w-40 h-auto object-contain"
              />
            </div>

            <div className={`text-center space-y-3 flex-grow ${lang === 'ar' ? 'font-arabic' : 'font-body'}`}>
              <h2 className={`text-2xl text-primary ${lang === 'ar' ? 'font-arabic' : 'font-heading'}`}>{t('title')}</h2>

              <p className="text-sm text-brand-dark-grey mb-4">
                {t('subtitle')}
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=971564044137&text=Welcome%20to%20RAALC.%20Please%20press%20enter%20to%20get%20a%20virtual%C2%A0token"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base text-center rounded"
                onClick={() => onClose()}
              >
                {t('button_text')}
              </a>

              <div className="text-sm text-brand-dark-grey space-y-1 mt-6">
                <p>
                  {t('enquiry_label')}{' '}
                  <span className="inline-block" dir="ltr">{t('enquiry_number')}</span>
                </p>
                <p>
                  {t('complaints_label')}{' '}
                  <span className="inline-block" dir="ltr">{t('complaints_number')}</span>
                </p>
              </div>

              <div className="mt-4">
                <p className={`text-md text-primary mb-1 ${lang === 'ar' ? 'font-arabic' : 'font-heading'}`}>{t('working_hours_title')}</p>
                <div className="text-sm text-brand-dark-grey">
                  <p>{t('working_hours_day1')}</p>
                  <p>{t('working_hours_day2')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Fragment>
    </AnimatePresence>
  );
};

export default NotificationPopup;
