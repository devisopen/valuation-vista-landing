
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handleRequestMembership = () => {
    toast({
      title: "Request Membership",
      description: "Redirecting you to our registration page."
    });
  };

  const handleLogin = () => {
    toast({
      title: "Login",
      description: "Redirecting you to our login page."
    });
  };

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Hero />
      <Features />
      <Testimonials />
      
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        id="pricing"
        className="py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Transform Your Property Valuations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of real estate professionals who trust ValuationVista for precision property valuations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/register" onClick={handleRequestMembership}>
                  <button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3 transition-colors w-full">
                    Request Membership
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/login" onClick={handleLogin}>
                  <button className="bg-white text-foreground font-medium rounded-lg px-6 py-3 border border-gray-200 hover:bg-gray-50 transition-colors w-full">
                    Log In
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Index;
