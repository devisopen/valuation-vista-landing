
import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          New Valuation
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Stats cards */}
        {['Total Valuations', 'Pending Reviews', 'Completed'].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-muted-foreground font-medium text-sm mb-1">{title}</h3>
            <p className="text-2xl font-bold">{(i + 1) * 12}</p>
            <div className="text-xs text-emerald-500 mt-2">
              +{(i + 1) * 4}% from last month
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Recent valuations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-card rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Recent Valuations</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium">123 Main Street, Suite {i+1}</p>
                  <p className="text-sm text-muted-foreground">Commercial Building</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(800000 + i * 50000).toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(2023, 5, 10 + i).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Right column - Tips and updates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Tips & Updates</h2>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-medium text-blue-600 dark:text-blue-400">New Feature</h3>
              <p className="text-sm mt-1">AI-powered valuation suggestions now available!</p>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <h3 className="font-medium text-amber-600 dark:text-amber-400">Market Update</h3>
              <p className="text-sm mt-1">Commercial property values increased by 3.2% this quarter.</p>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <h3 className="font-medium text-emerald-600 dark:text-emerald-400">Tip</h3>
              <p className="text-sm mt-1">Use comparative analysis for more accurate valuations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
