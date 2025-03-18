
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-medium text-foreground">
            ValuationVista
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium" onClick={() => window.location.href = '/login'}>
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-sm font-medium" onClick={() => window.location.href = '/register'}>
            Request Membership
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-card"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col pt-4 space-y-3 border-t border-gray-200">
              <Button variant="ghost" className="justify-center text-sm w-full" onClick={() => window.location.href = '/login'}>
                Log In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 justify-center text-sm w-full" onClick={() => window.location.href = '/register'}>
                Request Membership
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
