import React from 'react';

const LOGOS = ['TechNova', 'BrightLabs', 'NovaTech', 'CloudPeak', 'SoftWarely', 'Nexify'];

const LogoCloud = () => {
  return (
    <div className="py-12 border-y border-slate-100 bg-white">
      <div className="container-custom">
        <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest font-sans">
          Trusted by operations teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-xl font-bold font-heading text-slate-400">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
