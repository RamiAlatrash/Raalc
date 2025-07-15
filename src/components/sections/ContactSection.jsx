import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
    {/* Animated Blob */}
    <div className="absolute top-1/2 left-0 w-[350px] h-[350px] z-0 opacity-30 pointer-events-none blob-animate-3"
      style={{ transform: 'translateY(-50%)' }}>
      <svg viewBox="0 0 350 350">
        <defs>
          <radialGradient id="contactBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <ellipse cx="175" cy="175" rx="150" ry="110" fill="url(#contactBlob)" />
      </svg>
    </div>
    {children}
  </motion.section>
);

const ContactSection = ({ id }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all fields to send a message.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    console.log("Submitting form...", formData);

    // Create mailto link with form data
    const mailtoLink = `mailto:consult2@raalc.ae?subject=Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message Sent!",
        description: "We've opened your email client for you to send the message.",
      });
    }, 2000);
  };

  const handleSocialClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id={id} className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6 relative">
         
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-center mb-4 text-primary">
            Contact Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8 glassmorphism-card p-8 rounded-xl border border-primary/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-heading text-primary mb-3">Get in Touch</h3>
              <p className="text-brand-dark-grey font-body">Have a question or a project in mind? We'd love to hear from you.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-brand-dark-grey font-body">+971 4 342 5006</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:ceo@aladheed.govservices.ae" className="text-brand-dark-grey hover:text-primary transition-colors font-body">ceo@aladheed.govservices.ae</a>
                  <a href="mailto:digital@aladheed.govservices.ae" className="text-brand-dark-grey hover:text-primary transition-colors font-body text-sm opacity-80">digital@aladheed.govservices.ae</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="text-brand-dark-grey font-body">1st Floor - Bin Sougat Center, Airport Road</span>
                  <span className="text-brand-dark-grey font-body">Al Rashidiya - Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-xl font-heading text-primary mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-6 w-6 text-primary" />, label: 'Facebook', url: 'https://www.facebook.com/aladheed.raalc/' },
                  { icon: <Twitter className="h-6 w-6 text-primary" />, label: 'Twitter', url: 'https://x.com/AladheedA' },
                  { icon: <Instagram className="h-6 w-6 text-primary" />, label: 'Instagram', url: 'https://www.instagram.com/aladheed.raalc/' }
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                    onClick={e => e.stopPropagation()}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="relative flex-1">
            {/* Robot sitting on the top right */}
            <img
              src="/images/robot-images/robot12.png"
              alt="Contact Robot"
              className="absolute -top-16 right-4 w-24 h-24 md:w-32 md:h-32 z-20 animate-bounce-slow"
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.10))' }}
            />
            <motion.div 
              className="glassmorphism-card p-8 rounded-xl border border-primary/20 flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading text-primary mb-6">Send a Message</h3>
              <form 
                action="https://formsubmit.co/ceo@aladheed.govservices.ae" 
                method="POST"
                className="space-y-6"
              >
                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Success page */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark-grey mb-1 font-body">Your Name</label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="" 
                    required 
                    className="font-body"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark-grey mb-1 font-body">Your Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="" 
                    required 
                    className="font-body"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark-grey mb-1 font-body">Message</label>
                  <Textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    placeholder="How can we help you today?" 
                    required 
                    className="font-body"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base font-body"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Form'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;