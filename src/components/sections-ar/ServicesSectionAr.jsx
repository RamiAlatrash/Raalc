import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

const servicesDataAr = [
  {
    "title": "زواج شرعي",
    "description": "شركة العضيد الراشدية تقدم خدمات حكومية متخصصة في تسجيل عقود الزواج الشرعي، وتقدم المساعدة الشخصية بما يتماشى مع أحكام الشريعة الإسلامية. نضمن التوثيق الشامل والامتثال لعملية تسجيل سلسة.",
    "icon": "/images/martial.png"
  },
  {
    "title": "زواج مدني وتجاري",
    "description": "تسهل شركة العضيد الراشدية خدمات حكومية لتسجيل الزواج المدني في دبي، مما يضمن إكمال جميع الأوراق بدقة. يرشدك فريقنا المتمرس خلال العملية بأكملها، مع تلبية جميع المتطلبات.\n\nكما تتخصص الشركة في تقديم خدمات حكومية للمطالبات المتعلقة بالفواتير غير المدفوعة أو الشيكات المرتجعة. نساعد في تسجيل المطالبات والإشعارات وأرشفة المستندات، ودحض الادعاءات المعارضة وتسهيل تنفيذ الإشعارات.",
    "icon": "/images/civil-marriage.png"
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

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const startIndex = servicesDataAr.findIndex(s => s.title.startsWith('إثبات'));
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-primary font-arabic rtl-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            خدماتنا الشاملة
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-center text-gray-700 mb-8 font-arabic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            تقدم شركة العضيد الراشدية مجموعة واسعة من الخدمات الحكومية المصممة لتلبية احتياجاتك الخاصة. اكتشف كيف يمكننا مساعدتك.
          </motion.p>
        </div>
        <div className="w-full flex justify-end">
          <div
            className={`relative w-48 h-48 mt-8 hidden md:flex flex-col items-center animate-robot-float mr-12 ltr-preserve`}
          >
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex flex-col space-y-2 mb-6 ltr-preserve">
              <span className="w-8 h-8 bg-primary rounded-full thought-dot-3"></span>
              <span className="w-6 h-6 bg-primary rounded-full thought-dot-2"></span>
              <span className="w-4 h-4 bg-primary rounded-full thought-dot-1"></span>
            </div>
            <div className="absolute -top-36 left-1/2 transform -translate-x-1/2 animate-speech-bubble-pop">
              <div className="bg-white text-primary px-8 py-4 rounded-full shadow-lg text-lg font-arabic border border-primary rtl-text">
                اكتشف خدماتنا
              </div>
            </div>
            <img
              src="/images/robot-images/robot16.png"
              alt="Decorative Robot"
              className="w-48 h-48 ltr-preserve"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="relative flex justify-center items-center min-h-[350px] -mt-8"
      >
        <motion.div
          className="absolute z-10 flex items-center justify-center w-56 h-56 bg-[#047FE1] text-white rounded-full shadow-lg cursor-pointer animate-robot-float"
          variants={centralVariant}
        >
          <img
            src="/images/543c1ea9-4152-4f62-b395-6fe34c21c568.png"
            alt="روبوت راك"
            className="w-44 h-44"
          />
        </motion.div>

        {servicesDataAr.map((service, index) => {
          const angle = (360 / len) * index;
          const radius = 200;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center cursor-pointer z-20"
              style={{ x, y, width: 80, height: 110 }}
              variants={iconVariant}
              custom={index}
              onClick={() => openPopup(service)}
            >
              <motion.div
                className="bg-[#047FE1] text-white shadow-lg flex items-center justify-center rounded-full w-16 h-16 p-2"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              <div className="text-xs font-medium text-primary text-center mt-2 whitespace-pre-line font-arabic">
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
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-arabic">
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