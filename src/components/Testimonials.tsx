
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Real Estate Broker',
    company: 'Luxury Homes',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
    text: 'ValuationVista has transformed how we price luxury properties. The precision of the valuations has helped us close deals faster and with greater confidence.'
  },
  {
    name: 'Michael Chen',
    position: 'Property Developer',
    company: 'Urban Constructs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop',
    text: 'The market insights provided by this platform have been invaluable for our development planning. We can now make data-driven decisions that maximize property values.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'Mortgage Advisor',
    company: 'First Capital',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=250&auto=format&fit=crop',
    text: 'I recommend ValuationVista to all my clients. It provides transparent valuations that make the mortgage approval process smoother and builds trust with homebuyers.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-balance">
              Trusted by Industry Professionals
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              See why leading real estate professionals rely on ValuationVista for their property valuation needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 flex-grow">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
