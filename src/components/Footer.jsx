import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Globe, Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', soon: false },
      { label: 'How it Works', soon: false },
      { label: 'Pricing', soon: true },
      { label: 'Roadmap', soon: false },
      { label: 'Changelog', soon: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', soon: false },
      { label: 'Our Mission', soon: false },
      { label: 'Careers', soon: true },
      { label: 'Blog', soon: true },
      { label: 'Press', soon: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', soon: true },
      { label: 'Guides', soon: true },
      { label: 'API', soon: true },
      { label: 'Status', soon: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', soon: false },
      { label: 'Terms of Service', soon: false },
      { label: 'Security', soon: false },
      { label: 'Data Processing Agreement', soon: false },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-50/40 via-slate-50/30 to-white pt-0 pb-8 overflow-hidden">

      {/* Wave — absolute inside footer, blends with bg */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 w-full leading-none pointer-events-none"
      >
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <defs>
            <linearGradient id="waveG1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.10" />
            </linearGradient>
            <linearGradient id="waveG2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ddd6fe" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Deep back fill */}
          <path d="M0,30 C360,80 1080,0 1440,50 L1440,0 L0,0 Z" fill="url(#waveG1)" />
          {/* Mid wave */}
          <path d="M0,50 C240,10 480,70 720,40 C960,10 1200,65 1440,35 L1440,0 L0,0 Z" fill="url(#waveG2)" />
          {/* Stroke line */}
          <path d="M0,50 C240,10 480,70 720,40 C960,10 1200,65 1440,35"
            fill="none" stroke="#a5b4fc" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </motion.div>

      <div className="container-custom pt-20 md:pt-24">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 mb-12">
          {/* Brand section right border on desktop */}
          <div className="lg:border-r lg:border-slate-100 lg:pr-12 pb-10 lg:pb-0">
            {/* Logo — same style as Navbar */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-indigo-200 flex-shrink-0">
                <img src="/worksensy.png" alt="WorkSensy Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading leading-none">
                  <span className="text-slate-900">Work</span>
                  <span className="text-indigo-600">Sensy</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight mt-0.5">Operations OS for Modern Teams</span>
              </div>
            </div>

            <p className="text-slate-700 text-[13px] font-medium leading-relaxed mb-5">
              All your operations. One smarter platform.<br />
              Manage tasks, projects, approvals, and<br />
              teams—seamlessly.
            </p>

            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-7">
              <Rocket className="w-3 h-3" />
              Launching Soon
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-3">
              <a href="mailto:hello@worksensy.com" className="flex items-center gap-2.5 text-slate-700 text-[13px] font-medium hover:text-indigo-600 transition-colors group">
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-indigo-500 transition-colors" />
                hello@worksensy.com
              </a>
              <a href="https://www.worksensy.com" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-700 text-[13px] font-medium hover:text-indigo-600 transition-colors group">
                <Globe className="w-4 h-4 text-slate-500 group-hover:text-indigo-500 transition-colors" />
                www.worksensy.com
              </a>
            </div>
          </div>

          {/* RIGHT: Link Columns — with dividers between each */}
          <div className="lg:pl-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {footerLinks.map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-6 first:pl-0"
              >
                <h4 className="text-[13px] font-black text-slate-900 mb-5">{col.title}</h4>
                <ul className="space-y-3.5">
                  {col.links.map((link, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <a
                        href="#"
                        className={`text-[13px] font-medium transition-colors ${link.soon ? 'text-slate-400 cursor-default pointer-events-none' : 'text-slate-700 hover:text-indigo-600'}`}
                      >
                        {link.label}
                      </a>
                      {link.soon && (
                        <span className="text-[9px] font-bold text-indigo-500 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-full leading-none">
                          Soon
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-slate-600 font-medium">
            © 2024 Worksensy. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[12px] text-slate-600 font-medium">Follow us</span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-sm transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-red-500 hover:border-red-200 hover:shadow-sm transition-all">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
