
import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-medium text-foreground">
                ValuationVista
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Precision property valuation for modern real estate professionals.
            </p>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ValuationVista<br />
              All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
