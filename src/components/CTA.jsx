import React from 'react';
import { Mail, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-10 md:py-32">
      <div className="container-custom">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-white mb-6 font-heading">
              Something powerful is on{' '}
              <span className="text-indigo-400">the way</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-sans">
              We're putting the finishing touches on WorkSensy to bring you the best way to manage
              operations, tasks, and teams.
            </p>

            {/* Email + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full sm:max-w-md">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-sans"
                />
              </div>
              <button className="btn-primary w-full sm:w-auto py-4 px-8 whitespace-nowrap">
                Join the Waitlist
              </button>
            </div>

            <p className="mt-6 text-slate-500 text-sm flex items-center justify-center gap-2 font-sans">
              <Shield className="w-4 h-4" /> We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
