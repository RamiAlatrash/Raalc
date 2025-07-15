import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

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

const ContactSectionAr = ({ id }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSocialClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      toast({
        title: "نموذج غير مكتمل",
        description: "يرجى ملء جميع الحقول لإرسال رسالة.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    form.submit();
  };

  return (
    <SectionWrapper id={id} dir="rtl" className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-center mb-4 text-primary font-arabic">
            تواصل معنا
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8 glassmorphism-card p-8 rounded-xl border border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-heading text-primary mb-3 font-arabic">ابقى على تواصل</h3>
              <p className="text-brand-dark-grey font-arabic">هل لديك سؤال أو مشروع في ذهنك؟ نود أن نسمع منك.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary ml-3" />
                <span className="text-brand-dark-grey font-arabic" dir="ltr">+971 4 342 5006</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary ml-3" />
                <a href="mailto:consult2@raalc.ae" className="text-brand-dark-grey hover:text-primary transition-colors font-arabic">consult2@raalc.ae</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 ml-3" />
                <span className="text-brand-dark-grey font-arabic">دبي، الإمارات العربية المتحدة</span>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-xl font-heading text-primary mb-3 font-arabic">تابعنا</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-6 w-6" />, label: 'Facebook' },
                  { icon: <Twitter className="h-6 w-6" />, label: 'Twitter' },
                  { icon: <Instagram className="h-6 w-6" />, label: 'Instagram' }
                ].map(social => (
                  <button
                    key={social.label}
                    onClick={handleSocialClick}
                    aria-label={social.label}
                    className="p-2 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="relative flex-1">
            <img
              src="/images/robot-images/robot12.png"
              alt="روبوت الاتصال"
              className="absolute -top-16 left-4 w-24 h-24 md:w-32 md:h-32 z-20 animate-bounce-slow"
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
            <motion.div 
              className="glassmorphism-card p-8 rounded-xl border border-primary/20 flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading text-primary mb-6 font-arabic">أرسل رسالة</h3>
              <form 
                onSubmit={handleSubmit}
                action="https://formsubmit.co/digital@aladheed.govservices.ae" 
                method="POST"
                className="space-y-6"
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark-grey mb-1 font-arabic text-right">اسمك</label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="مثال: جون دو"
                    required 
                    className="font-arabic text-right"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark-grey mb-1 font-arabic text-right">بريدك الإلكتروني</label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="مثال: john.doe@example.com" 
                    required 
                    className="font-arabic text-right"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark-grey mb-1 font-arabic text-right">رسالتك</label>
                  <Textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="كيف يمكننا مساعدتك اليوم؟" 
                    required 
                    className="font-arabic text-right"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-arabic shadow-lg">
                  {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال النموذج'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSectionAr; 