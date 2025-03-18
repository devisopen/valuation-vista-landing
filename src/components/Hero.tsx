
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building, PieChart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Property Valuation Reinvented
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground text-balance">
                Precision Valuation for Modern Properties
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                ValuationVista delivers AI-powered insights and precise property valuations for professionals who demand accuracy and efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium"
                asChild
              >
                <Link to="/register">
                  Request Membership <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/20 text-foreground font-medium"
                asChild
              >
                <Link to="/login">Log In</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-8 pt-6"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Trusted by 2,000+</div>
                <div className="text-sm text-muted-foreground">Real Estate Professionals</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 shadow-xl overflow-hidden aspect-square max-w-lg mx-auto">
              <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] bg-indigo-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/50 mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-medium">Market Analytics</h3>
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-gray-100/80 h-32 rounded-lg flex items-center justify-center">
                    <div className="w-full h-20 px-3 flex items-end">
                      {[40, 65, 48, 80, 55, 70, 45, 60, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 mx-0.5 bg-primary rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/50 mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-medium">Property Value</h3>
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground">$1,250,000</div>
                  <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <span>↑ 4.2%</span>
                    <span className="text-muted-foreground">from last valuation</span>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-medium">Growth Projection</h3>
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-gray-100/80 h-24 rounded-lg flex items-center justify-center">
                    <div className="w-full px-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Current</span>
                        <span>5 Years</span>
                        <span>10 Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
