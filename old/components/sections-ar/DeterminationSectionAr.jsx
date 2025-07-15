import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Ear, Accessibility, Brain, Zap } from 'lucide-react';

const determinationDataAr = {
  "title": "الاحتياجات الفريدة <1>لأصحاب الهمم</1>",
  "subtitle": "نحن نقدم خدمات متخصصة ومتكيفة للغاية، مع الاستفادة من التكنولوجيا لضمان تلبية المتطلبات الفريدة لكل فرد بدقة وعناية.",
  "features": [
    {
      "title": "الدعم البصري",
      "description": "تحسين إمكانية الوصول الرقمي وقراءة الوثائق."
    },
    {
      "title": "المساعدة السمعية",
      "description": "قنوات اتصال واضحة وتقنيات مساعدة."
    },
    {
      "title": "إمكانية الوصول الجسدي",
      "description": "مساحات مكتبية متاحة وخيارات خدمة عن بعد."
    },
    {
      "title": "الدعم المعرفي",
      "description": "عمليات مبسطة وشروحات واضحة وصبورة."
    }
  ],
  "approach": {
    "title": "نهج مستقبلي وشامل",
    "description": "تلتزم شركة راك للمحاماة برؤية مستقبلية للخدمات القانونية. نحن ندمج أدوات الذكاء الاصطناعي المتقدمة والتقنيات التكيفية لإنشاء بيئة شاملة حقًا. هدفنا هو إزالة الحواجز وتوفير تجارب سلسة وتمكينية لجميع أصحاب الهمم، مما يضمن تلبية احتياجاتهم القانونية بالكرامة والكفاءة التي يستحقونها."
  }
};

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

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="determination-card p-6 rounded-lg text-center flex flex-col items-center"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
  >
    <motion.div 
      className="p-4 bg-primary rounded-full text-primary-foreground mb-4 inline-block"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-heading text-primary mb-2 font-arabic">{title}</h3>
    <p className="text-sm text-brand-dark-grey font-body leading-relaxed font-arabic">{description}</p>
  </motion.div>
);

const DeterminationSectionAr = ({ id }) => {
  const features = [
    { icon: <Eye size={32} />, title: determinationDataAr.features[0].title, description: determinationDataAr.features[0].description, delay: 0.2 },
    { icon: <Ear size={32} />, title: determinationDataAr.features[1].title, description: determinationDataAr.features[1].description, delay: 0.4 },
    { icon: <Accessibility size={32} />, title: determinationDataAr.features[2].title, description: determinationDataAr.features[2].description, delay: 0.6 },
    { icon: <Brain size={32} />, title: determinationDataAr.features[3].title, description: determinationDataAr.features[3].description, delay: 0.8 },
  ];

  return (
    <SectionWrapper id={id} dir="rtl" className="futuristic-determination-bg overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4 text-primary font-arabic"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.5}}
        >
          الاحتياجات الفريدة <span className="gradient-text-blue">لأصحاب الهمم</span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-brand-dark-grey mb-12 max-w-3xl mx-auto font-arabic"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.5, delay:0.2}}
        >
          {determinationDataAr.subtitle}
        </motion.p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="absolute -top-16 -right-16 w-72 h-72 bg-primary/10 rounded-full filter blur-2xl opacity-70 animate-spin-slow"
            initial={{scale:0}} animate={{scale:1}} transition={{duration:1, delay:0.5}}
          />
          <motion.div 
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl opacity-80 animate-pulse-glow"
            initial={{scale:0}} animate={{scale:1}} transition={{duration:1, delay:0.7}}
          />
           <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-dashed border-primary/30 rounded-full animate-spin-slow"
            style={{animationDuration: '40s'}}
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.9}}
          />

          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 p-6 determination-card rounded-lg max-w-4xl mx-auto"
          initial={{ opacity:0, y:30}}
          whileInView={{ opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.5, delay:1}}
        >
          <Zap size={40} className="text-primary mx-auto mb-4 animate-subtle-float" />
          <h3 className="text-2xl font-heading text-primary mb-3 font-arabic">{determinationDataAr.approach.title}</h3>
          <p className="text-brand-dark-grey font-body leading-relaxed font-arabic">
            {determinationDataAr.approach.description}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default DeterminationSectionAr; 