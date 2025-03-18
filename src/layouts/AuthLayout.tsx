
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side with branding */}
      <div className="hidden md:flex md:w-1/2 bg-primary items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Building2 className="h-10 w-10 text-white" />
            <span className="font-display text-2xl font-bold text-white">
              ValuationVista
            </span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-display font-bold mb-4">
            Property Valuation <br />Made Simple
          </h1>
          <p className="text-white/80 max-w-md mx-auto">
            Join thousands of real estate professionals who trust ValuationVista for precision property valuations.
          </p>
        </motion.div>
      </div>
      
      {/* Right side with auth content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-background">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
