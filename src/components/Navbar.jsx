import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layout, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", hasDropdown: true },
    { name: "Features", hasDropdown: true },
    { name: "Use Cases", hasDropdown: true },
    { name: "Insights", hasDropdown: true },
  ];

  return (
    <>
      {/* Top blur strip — covers the gap above the floating navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 h-8 backdrop-blur-md" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0) 100%)' }} />

      <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-10">
      <nav className={cn(
        "max-w-[1600px] mx-auto rounded-3xl transition-all duration-300 py-4 px-6 md:px-10",
        "bg-white/80 backdrop-blur-xl border border-slate-100/80 shadow-xl shadow-slate-200/40"
      )}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-11 overflow-hidden rounded-xl shadow-lg shadow-indigo-200">
              <img src="/worksensy.png" alt="WorkSensy Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading leading-none">
                <span className="text-slate-900">Work</span>
                <span className="text-indigo-600">Sensy</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight mt-1">Operations OS for Modern Teams</span>
            </div>
            {/* Divider */}
            <div className="" />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href="#" 
                className="flex items-center gap-1 text-[13px] font-[700] text-slate-900 hover:text-indigo-600 transition-colors group"
              >
                {link.name}
                
              </a>
            ))}
            <button onClick={onOpenWaitlist} className="text-[13px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
              Early Access
            </button>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100">
              <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span className="text-[11px] font-bold text-indigo-600 whitespace-nowrap">Early Access Open</span>
            </div>
            
            <button 
              onClick={onOpenWaitlist}
              className="text-sm font-bold text-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-50 border border-slate-200 transition-all"
            >
              Join Waitlist
            </button>
            <button 
              onClick={onOpenWaitlist}
              className="btn-primary py-2.5 px-3 flex items-center gap-2 shadow-xl shadow-indigo-100 text-sm"
            >
              Get Early Access <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-slate-900 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col gap-4 pb-4">
                {navLinks.map((link) => (
                  <a key={link.name} href="#" className="flex items-center justify-between text-lg font-medium text-slate-900 px-2">
                    {link.name}
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </a>
                ))}
                <button onClick={onOpenWaitlist} className="text-left text-lg font-bold text-indigo-600 px-2">Early Access</button>
                <hr className="border-slate-100" />
                <div className="flex flex-col gap-3 px-2">
                   <button 
                    onClick={() => { setIsMenuOpen(false); onOpenWaitlist(); }}
                    className="w-full py-3.5 rounded-xl border border-slate-200 font-bold text-slate-700"
                   >
                    Join Waitlist
                   </button>
                   <button 
                    onClick={() => { setIsMenuOpen(false); onOpenWaitlist(); }}
                    className="btn-primary w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
                   >
                    Get Early Access <ArrowRight />
                   </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
