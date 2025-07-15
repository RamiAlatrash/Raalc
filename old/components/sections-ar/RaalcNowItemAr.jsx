import React from 'react';
import { motion } from 'framer-motion';

const RaalcNowItemAr = ({ title, description, imageUrl, altText, listItems, customClasses, imgClassName }) => {
  return (
    <div dir="rtl" className={`flex flex-col md:flex-row items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20 ${customClasses}`}>
      <motion.img
        src={imageUrl}
        alt={altText}
        className={`rounded-lg shadow-md object-cover ${imgClassName || 'w-full md:w-1/2'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      />
      <div className="flex-1">
        <h3 className="text-2xl font-heading text-primary mb-3 font-arabic">{title}</h3>
        <p className="text-brand-dark-grey mb-4 font-arabic leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-brand-dark-grey font-arabic"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-5 h-5 flex-shrink-0 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RaalcNowItemAr; 