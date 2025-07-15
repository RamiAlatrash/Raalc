import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const RaalcNowItem = ({ title, description, imageUrl, altText, listItems, customClasses = "", imgClassName = "" }) => (
    <motion.div 
      className={`glassmorphism-card p-6 md:p-8 rounded-xl shadow-xl flex flex-col md:flex-row items-center ${customClasses} border border-primary/20 hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300`}
      style={{ borderImage: "linear-gradient(90deg, #38bdf8 0%, #f0abfc 100%) 1" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1 max-w-full md:max-w-[50%]">
        <h3 className="text-2xl md:text-3xl font-heading mb-2 text-primary">{title}</h3>
        <p className="text-brand-dark-grey mb-3 text-sm md:text-base leading-relaxed font-body whitespace-pre-line">
          {description}
        </p>
            {listItems && (
          <ul className="space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="flex items-center font-body text-brand-dark-grey">
                <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
      <div className="flex-shrink-0 w-full md:w-[50%] flex justify-center mt-4 md:mt-0 overflow-hidden">
            <img
              src={imageUrl}
              alt={altText}
              className={`w-80 h-80 object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ${imgClassName}`}
            />
          </div>
    </motion.div>
  );

export default RaalcNowItem; 