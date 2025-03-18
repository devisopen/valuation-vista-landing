
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart4, Building, Lock, Map, RefreshCw, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
    title: 'Advanced Analytics',
    description: 'Get detailed market insights and property valuation trends with our powerful analytics engine.'
  },
  {
    icon: <Building className="h-6 w-6 text-primary" />,
    title: 'Property Comparison',
    description: 'Compare properties across different neighborhoods, time periods, and market conditions.'
  },
  {
    icon: <Map className="h-6 w-6 text-primary" />,
    title: 'Geospatial Mapping',
    description: 'Visualize property values across regions with our interactive mapping technology.'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-primary" />,
    title: 'Real-time Updates',
    description: 'Receive instant notifications when market conditions change affecting valuations.'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'AI-Powered Insights',
    description: 'Our machine learning algorithms predict market trends and optimize valuations.'
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: 'Secure Data Handling',
    description: 'Your property data is encrypted and handled with the highest security standards.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-balance">
              Precision Tools for Property Valuation
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our comprehensive suite of valuation tools delivers the accuracy and insights real estate professionals demand.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
