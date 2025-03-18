
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-md mx-auto">
          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('login')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'login'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'register'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Request Membership
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-xl p-6 md:p-8 shadow-lg"
          >
            {activeTab === 'login' ? <Login /> : <Register />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
