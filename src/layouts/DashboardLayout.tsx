
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Building2, ChevronLeft, Menu, User, LogOut, Home, PieChart, FileText, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Analytics', icon: PieChart, path: '/dashboard/analytics' },
    { name: 'Reports', icon: FileText, path: '/dashboard/reports' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation */}
      <nav className="bg-background border-b border-border h-16 flex items-center px-4 sticky top-0 z-10">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-secondary"
            >
              {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-medium hidden sm:inline-block">
                ValuationVista
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-secondary">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-secondary">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.aside 
          initial={false}
          animate={{ width: sidebarOpen ? '240px' : '64px' }}
          className={cn(
            "bg-background border-r border-border h-full transition-all duration-300",
            !sidebarOpen && "overflow-hidden"
          )}
        >
          <nav className="p-2 space-y-1">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className={cn(
                  "transition-opacity duration-200",
                  !sidebarOpen && "opacity-0"
                )}>
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </motion.aside>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
