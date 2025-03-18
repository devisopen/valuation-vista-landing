
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-muted-foreground">Login to your account</p>
      </div>
      
      <form className="space-y-4">
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
            placeholder="••••••••"
            className="w-full p-2 rounded-md border border-input bg-background"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" type="checkbox" className="h-4 w-4 mr-2" />
            <label htmlFor="remember-me" className="text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
        </div>
        
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90"
        >
          Sign in
        </button>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <a 
            href="/register" 
            className="text-primary hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
