import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

const servicesDataAr = [
  {
    "title": "زواج شرعي",
    "description": "شركة العضيد الراشدية تقدم خدمات حكومية متخصصة في تسجيل عقود الزواج الشرعي، وتقدم المساعدة الشخصية بما يتماشى مع أحكام الشريعة الإسلامية. نضمن التوثيق الشامل والامتثال لعملية تسجيل سلسة.",
    "icon": "/images/martial.png"
  },
  {
    "title": "زواج مدني",
    "description": "تسهل شركة العضيد الراشدية خدمات حكومية لتسجيل الزواج المدني في دبي، مما يضمن إكمال جميع الأوراق بدقة. يرشدك فريقنا المتمرس خلال العملية بأكملها، مع تلبية جميع المتطلبات.",
    "icon": "/images/civil-marriage.png"
  },
  {
    "title": "خدمات مدنية وتجارية",
    "description": "تتخصص الشركة في تقديم خدمات حكومية للمطالبات المتعلقة بالفواتير غير المدفوعة أو الشيكات المرتجعة. نساعد في تسجيل المطالبات والإشعارات وأرشفة المستندات، ودحض الادعاءات المعارضة وتسهيل تنفيذ الإشعارات.",
    "icon": "/images/commerical.png"
  },
  {
    "title": "الميراث",
    "description": "تقدم شركة العضيد الراشدية خدمات حكومية ودعمًا شاملاً في مسائل الميراث للمسلمين وغير المسلمين. نساعد في نقل الملكية وتنفيذ الوصايا وحل النزاعات بين الورثة.",
    "icon": "/images/Inheritance.png"
  },
  {
    "title": "العقارات",
    "description": "تساعد شركة العضيد الراشدية في تقديم خدمات حكومية للمطالبات العقارية، بما في ذلك التعويض عن إلغاء المشاريع أو تأخير المطورين. كما ندعم الإجراءات المتعلقة بالمدفوعات المستحقة وغيرها من المسائل العقارية.",
    "icon": "/images/real-estate.png"
  },
  {
    "title": "خدمة كاتب العدل",
    "description": "تضمن خدمات كاتب العدل لدينا سرية مستنداتك الحساسة. تقدم شركة العضيد الراشدية خدمات حكومية لتوثيق الإقرارات والتوكيلات والوصايا وخطابات الكفالة والمزيد. تتوفر الخدمات عن بُعد، ويمكن ترتيب زيارات العملاء عند الضرورة.",
    "icon": "/images/notary.png"
  },
  {
    "title": "شؤون زوجية",
    "description": "هل تواجه مشاكل زوجية؟ تقدم شركة العضيد الراشدية خدمات حكومية في قضايا الطلاق والاتفاقيات وحضانة الأطفال والطعن في الأحكام. نساعد في الإرشاد الأسري والحصول على النفقة أثناء الزواج وبعده.",
    "icon": "/images/marriage.png"
  },
  {
    "title": "إثبات النسب",
    "description": "هل تواجه صعوبة في الحصول على شهادة ميلاد؟ ترشدك شركة العضيد الراشدية من خلال خدمات حكومية خلال الإجراءات، من التقديم الأولي إلى قرارات المحكمة النهائية، لكل من مواطني دولة الإمارات والأجانب، بما في ذلك دعم الأمهات العازبات.",
    "icon": "/images/parentage.png"
  }
];

const SectionWrapper = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const ServicesSectionAr = ({ id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startIndex = servicesDataAr.findIndex(s => s.title.startsWith('شؤون'));
  const len = servicesDataAr.length;

  const centralVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1, scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }
    }
  };

  const iconVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => {
      const order = (i - startIndex + len) % len;
      return {
        opacity: 1, scale: 1,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: 0.6 + order * 0.3
        }
      };
    }
  };

  const openPopup = (svc) => {
    setCurrentService(svc);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentService(null);
  };

  return (
    <SectionWrapper
      id={id}
      className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8] overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] z-0 opacity-70 pointer-events-none blob-animate-1">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="servicesBlob1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#servicesBlob1)" />
        </svg>
      </div>
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] z-0 opacity-60 pointer-events-none blob-animate-2">
        <svg viewBox="0 0 500 500">
          <defs>
            <radialGradient id="servicesBlob2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <ellipse cx="250" cy="250" rx="220" ry="170" fill="url(#servicesBlob2)" />
        </svg>
      </div>
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] z-0 opacity-40 pointer-events-none blob-animate-3"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <svg viewBox="0 0 300 300">
          <defs>
            <radialGradient id="servicesBlob3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <ellipse cx="150" cy="150" rx="130" ry="100" fill="url(#servicesBlob3)" />
        </svg>
      </div>

      {/* Diagonal-lines pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="32" height="32" patternTransform="rotate(45)">
              <rect x="0" y="0" width="16" height="32" fill="#e3ecf7" />
              <rect x="16" y="0" width="16" height="32" fill="#f5f7fa" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

      {/* Header & decorative robot */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-3xl text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4 text-primary font-arabic rtl-text text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            خدماتنا الشاملة
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-brand-dark-grey mb-8 font-body font-arabic text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            .تقدم شركة العضيد الراشدية مجموعة واسعة من الخدمات الحكومية المصممة لتلبية احتياجاتك الخاصة. اكتشف كيف يمكننا مساعدتك
          </motion.p>
        </div>
        
        {/* Mobile Robot */}
        <div className="w-full flex justify-center md:hidden mt-6">
          <div className="relative w-32 h-32 flex flex-col items-center animate-robot-float ltr-preserve">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col space-y-1 mb-6 ltr-preserve">
              <span className="w-4 h-4 bg-primary rounded-full thought-dot-3"></span>
              <span className="w-3 h-3 bg-primary rounded-full thought-dot-2"></span>
              <span className="w-2 h-2 bg-primary rounded-full thought-dot-1"></span>
            </div>
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-speech-bubble-pop">
              <div className="bg-white text-primary px-4 py-2 rounded-full shadow-lg text-sm font-body font-arabic border border-primary rtl-text">
                اكتشف خدماتنا
              </div>
            </div>
            <img
              src="/images/robot-images/robot16.png"
              alt="Decorative Robot"
              className="w-32 h-32 ltr-preserve"
              aria-hidden="true"
            />
          </div>
        </div>
        
        {/* Desktop Robot - Repositioned below service wheel */}
        <div className="w-full flex justify-end mt-8">
          <div
            className={`relative hidden md:flex flex-col items-center animate-robot-float ltr-preserve ${
              isTablet ? 'w-32 h-32 mr-8' : 'w-48 h-48 mr-16'
            }`}
          >
            <div className={`absolute flex flex-col space-y-2 mb-6 ltr-preserve ${
              isTablet ? '-top-12 left-1/2 transform -translate-x-1/2' : '-top-20 left-1/2 transform -translate-x-1/2'
            }`}>
              <span className={`bg-primary rounded-full thought-dot-3 ${
                isTablet ? 'w-6 h-6' : 'w-8 h-8'
              }`}></span>
              <span className={`bg-primary rounded-full thought-dot-2 ${
                isTablet ? 'w-4 h-4' : 'w-6 h-6'
              }`}></span>
              <span className={`bg-primary rounded-full thought-dot-1 ${
                isTablet ? 'w-3 h-3' : 'w-4 h-4'
              }`}></span>
            </div>
            <div className={`absolute animate-speech-bubble-pop ${
              isTablet ? '-top-24 left-1/2 transform -translate-x-1/2' : '-top-36 left-1/2 transform -translate-x-1/2'
            }`}>
              <div className={`bg-white text-primary rounded-full shadow-lg font-body font-arabic border border-primary rtl-text ${
                isTablet ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-lg'
              }`}>
                اكتشف خدماتنا
              </div>
            </div>
            <img
              src="/images/robot-images/robot16.png"
              alt="Decorative Robot"
              className={`object-contain ltr-preserve ${
                isTablet ? 'w-32 h-32' : 'w-48 h-48'
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className={`relative flex justify-center items-center ${
          isMobile ? 'min-h-[300px] -mt-2' : isTablet ? 'min-h-[400px] -mt-4' : 'min-h-[500px] -mt-6'
        }`}
      >
        <motion.div
          className={`absolute z-10 flex items-center justify-center bg-[#047FE1] text-white rounded-full shadow-lg cursor-pointer animate-robot-float ${
            isMobile ? 'w-32 h-32' : isTablet ? 'w-40 h-40' : 'w-64 h-64'
          }`}
          variants={centralVariant}
        >
          <img
            src="/images/543c1ea9-4152-4f62-b395-6fe34c21c568.png"
            alt="روبوت راك"
            className={`object-contain ${
              isMobile ? 'w-28 h-28' : isTablet ? 'w-36 h-36' : 'w-52 h-52'
            }`}
          />
        </motion.div>

        {servicesDataAr.map((service, index) => {
          const angle = (360 / len) * index;
          // Increased radius for larger wheel
          const radius = isMobile ? 160 : isTablet ? 200 : 280;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center cursor-pointer z-20"
              style={{ 
                x, 
                y, 
                width: isMobile ? 70 : isTablet ? 80 : 100, 
                height: isMobile ? 100 : isTablet ? 110 : 130
              }}
              variants={iconVariant}
              custom={index}
              onClick={() => openPopup(service)}
            >
              <motion.div
                className={`bg-[#047FE1] text-white shadow-lg flex items-center justify-center rounded-full ${
                  isMobile ? 'w-14 h-14 p-1.5' : isTablet ? 'w-16 h-16 p-2' : 'w-20 h-20 p-2.5'
                }`}
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`object-contain ${
                    isMobile ? 'w-7 h-7' : isTablet ? 'w-8 h-8' : 'w-10 h-10'
                  }`}
                />
              </motion.div>
              <div 
                className={`font-medium text-primary text-center whitespace-pre-line font-arabic ${
                  isMobile ? 'text-xs mt-2 max-w-[70px]' : 
                  isTablet ? 'text-sm mt-2 max-w-[80px]' : 
                  'text-sm mt-3 max-w-[100px]'
                }`}
              >
                {service.title}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {isPopupOpen && currentService && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            <div
              dir="rtl"
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto relative z-10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 pr-10 font-arabic">
                    {currentService.title.replace('\\n', ' ')}
                  </h3>
                  <button
                    onClick={closePopup}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="إغلاق"
                  >
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-body font-arabic">
                  {currentService.description}
                </p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200 mt-auto">
                <button
                  onClick={closePopup}
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 font-arabic"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ServicesSectionAr; 