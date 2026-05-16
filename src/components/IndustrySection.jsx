import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, Building2, Building, Landmark,
  CheckCircle2, Users, ShieldCheck, Zap,
  ArrowRight, Clock, Sparkles
} from 'lucide-react';

const audiences = [
  {
    icon: Rocket,
    iconBg: 'bg-purple-50 text-purple-600',
    title: 'Startups',
    desc: 'Move fast and build strong operational foundations from day one.',
    features: ['Agile workflows', 'Everything in one place'],
    featureColor: 'text-purple-500',
  },
  {
    icon: Building2,
    iconBg: 'bg-green-50 text-green-600',
    title: 'Growing Teams',
    desc: 'Streamline processes and improve collaboration as your team grows.',
    features: ['Better visibility', 'Scalable operations'],
    featureColor: 'text-green-500',
  },
  {
    icon: Building,
    iconBg: 'bg-orange-50 text-orange-600',
    title: 'Enterprises',
    desc: 'Standardize operations and drive efficiency across multiple teams.',
    features: ['Advanced controls', 'Enterprise grade security'],
    featureColor: 'text-orange-500',
  },
  {
    icon: Landmark,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Public Sector',
    desc: 'Deliver better outcomes with transparency and accountability.',
    features: ['Compliance ready', 'Secure & reliable'],
    featureColor: 'text-blue-500',
  },
];

const upcomingFeatures = [
  { name: 'AI-Powered Insights', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { name: 'Smart Automation', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
  { name: 'Advanced Analytics', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'Custom Dashboards', color: 'bg-green-50 text-green-600 border-green-100' },
  { name: 'Multi-org Support', color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { name: 'API Integrations', color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { name: 'Mobile App', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { name: 'SSO & SAML', color: 'bg-slate-50 text-slate-600 border-slate-200' },
];

const stats = [
  { icon: Users, val: '10K+', label: 'Active teams', color: 'text-indigo-600 bg-indigo-50' },
  { icon: CheckCircle2, val: '2M+', label: 'Tasks completed', color: 'text-green-600 bg-green-50' },
  { icon: Rocket, val: '98%', label: 'Customer satisfaction', color: 'text-orange-600 bg-orange-50' },
  { icon: ShieldCheck, val: '99.9%', label: 'Uptime guarantee', color: 'text-blue-600 bg-blue-50' },
];

const IndustrySection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            Loved by teams worldwide
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
            Built for teams of every size,<br />
            <span className="text-indigo-600">across every industry</span>
          </h2>
          <p className="text-slate-500 text-[16px] max-w-xl mx-auto leading-relaxed">
            From startups to enterprises, WorkSensy adapts to the way you work<br />
            and scales with you as you grow.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${a.iconBg}`}>
                <a.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-black text-slate-900 mb-2">{a.title}</h3>
              <p className="text-slate-500 text-[12px] leading-relaxed mb-5">{a.desc}</p>
              <div className="space-y-2">
                {a.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${a.featureColor}`} />
                    <span className="text-[12px] text-slate-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-slate-50/80 border border-slate-200 rounded-2xl px-8 py-6"
        >
          {/* Upcoming Features — full width, ALL blurred */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full mb-2">
              <Clock className="w-2.5 h-2.5" />
              Upcoming Features
            </div>
            <h3 className="text-[16px] font-black text-slate-900 mb-0.5">What's coming next</h3>
            <p className="text-slate-500 text-[11px]">We're constantly building. Here's a peek at what's in the pipeline.</p>
          </div>

          {/* Feature tags — all blurred */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 select-none">
              {upcomingFeatures.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[10px] font-bold ${f.color} opacity-40 blur-[2px]`}
                >
                  <Sparkles className="w-2.5 h-2.5 flex-shrink-0" />
                  {f.name}
                </div>
              ))}
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50/90 via-slate-50/20 to-transparent pointer-events-none rounded-xl" />
          </div>

          <a href="#" className="inline-flex items-center gap-1.5 text-indigo-600 text-[11px] font-bold mt-3 hover:gap-2.5 transition-all">
            See full roadmap <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustrySection;
