import React, { useState, useEffect } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ArrowUp } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useTranslation } from 'react-i18next';

    const ScrollToTopButton = () => {
      const { t } = useTranslation();
      const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`fixed bottom-8 ${document.body.classList.contains('lang-ar') ? 'left-8' : 'right-8'} z-50`}
            >
              <Button
                onClick={scrollToTop}
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg w-12 h-12 transform hover:scale-110 transition-transform duration-300"
                aria-label={t('scroll_to_top.aria_label')}
              >
                <ArrowUp className="h-6 w-6" style={document.body.classList.contains('lang-ar') ? { transform: 'scaleX(-1)' } : {}} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      );
    };

    export default ScrollToTopButton;