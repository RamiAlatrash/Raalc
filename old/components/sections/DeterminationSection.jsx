import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Ear, Accessibility, Brain, Zap } from 'lucide-react';

const determinationData = {
  "title": "Unique Needs of <1>People of Determination</1>",
  "subtitle": "We provide highly specialized and adaptive services, leveraging technology to ensure every individual's unique requirements are met with precision and care.",
  "features": [
    {
      "title": "Visual Support",
      "description": "Enhanced digital accessibility and document readability."
    },
    {
      "title": "Auditory Assistance",
      "description": "Clear communication channels and assistive technologies."
    },
    {
      "title": "Physical Accessibility",
      "description": "Accessible office spaces and remote service options."
    },
    {
      "title": "Cognitive Support",
      "description": "Simplified processes and patient, clear explanations."
    }
  ],
  "approach": {
    "title": "Futuristic & Inclusive Approach",
    "description": "RAALC is committed to a forward-thinking vision of legal services. We integrate advanced AI tools and adaptive technologies to create a truly inclusive environment. Our goal is to dismantle barriers and provide seamless, empowering experiences for all People of Determination, ensuring their legal needs are addressed with the dignity and efficiency they deserve."
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
    <h3 className="text-xl font-heading text-primary mb-2">{title}</h3>
    <p className="text-sm text-brand-dark-grey font-body leading-relaxed">{description}</p>
  </motion.div>
);

const DeterminationSection = ({ id }) => {
  const features = [
    { icon: <Eye size={32} />, title: determinationData.features[0].title, description: determinationData.features[0].description, delay: 0.2 },
    { icon: <Ear size={32} />, title: determinationData.features[1].title, description: determinationData.features[1].description, delay: 0.4 },
    { icon: <Accessibility size={32} />, title: determinationData.features[2].title, description: determinationData.features[2].description, delay: 0.6 },
    { icon: <Brain size={32} />, title: determinationData.features[3].title, description: determinationData.features[3].description, delay: 0.8 },
  ];

  return (
    <SectionWrapper id={id} className="futuristic-determination-bg overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4 text-primary"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.5}}
        >
          Unique Needs of <span className="gradient-text-blue">People of Determination</span>
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-brand-dark-grey mb-12 max-w-3xl mx-auto font-body"
          initial={{ opacity:0, y: -20}}
          whileInView={{ opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.5, delay:0.2}}
        >
          {determinationData.subtitle}
        </motion.p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Background animated elements */}
          <motion.div 
            className="absolute -top-16 -left-16 w-72 h-72 bg-primary/10 rounded-full filter blur-2xl opacity-70 animate-spin-slow"
            initial={{scale:0}} animate={{scale:1}} transition={{duration:1, delay:0.5}}
          />
          <motion.div 
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl opacity-80 animate-pulse-glow"
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
          <h3 className="text-2xl font-heading text-primary mb-3">{determinationData.approach.title}</h3>
          <p className="text-brand-dark-grey font-body leading-relaxed">
            {determinationData.approach.description}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default DeterminationSection;