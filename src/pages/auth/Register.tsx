
import React from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Create an account</h1>
        <p className="text-muted-foreground">Enter your information to get started</p>
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium mb-1">First name</label>
            <input
              id="first-name"
              type="text"
              className="w-full p-2 rounded-md border border-input bg-background"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last name</label>
            <input
              id="last-name"
              type="text"
              className="w-full p-2 rounded-md border border-input bg-background"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full p-2 rounded-md border border-input bg-background"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className="w-full p-2 rounded-md border border-input bg-background"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Password must be at least 8 characters long.
          </p>
        </div>
        
        <div className="flex items-center">
          <input id="terms" type="checkbox" className="h-4 w-4 mr-2" />
          <label htmlFor="terms" className="text-sm">
            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90"
        >
          Create account
        </button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <a 
            href="/login" 
            className="text-primary hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;
