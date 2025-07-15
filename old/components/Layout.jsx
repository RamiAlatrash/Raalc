import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children, scrollToSection }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">{children}</main>
      <Footer scrollToSection={scrollToSection} />
      <Toaster />
    </div>
  );
};

export default Layout; 