import React from 'react';
import { motion } from 'framer-motion';
import { 
  Folder, 
  CheckCircle2, 
  Users, 
  FileText, 
  BookOpen, 
  BarChart3, 
  ShieldCheck, 
  Lock, 
  Cloud, 
  Globe, 
  Zap,
  Sparkles,
  Heart,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: 'Project Management',
    desc: 'Plan, organize and track projects from start to finish with complete visibility.',
    icon: Folder,
    color: 'bg-purple-50 text-purple-600',
    iconColor: 'purple'
  },
  {
    title: 'Task Tracking',
    desc: 'Break work into tasks, assign owners and track progress in real time.',
    icon: CheckCircle2,
    color: 'bg-blue-50 text-blue-600',
    iconColor: 'blue'
  },
  {
    title: 'Team Collaboration',
    desc: 'Collaborate seamlessly with your team and keep everyone aligned on goals.',
    icon: Users,
    color: 'bg-green-50 text-green-600',
    iconColor: 'green'
  },
  {
    title: 'Approvals & Workflows',
    desc: 'Create custom approval flows and automate routine operational processes.',
    icon: FileText,
    color: 'bg-orange-50 text-orange-600',
    iconColor: 'orange'
  },
  {
    title: 'Documents & Knowledge',
    desc: 'Centralize documents, SOPs and knowledge to keep your team informed.',
    icon: BookOpen,
    color: 'bg-indigo-50 text-indigo-600',
    iconColor: 'indigo'
  },
  {
    title: 'Reports & Insights',
    desc: 'Get real-time insights and make data-driven decisions with powerful dashboards.',
    icon: BarChart3,
    color: 'bg-slate-50 text-slate-600',
    iconColor: 'slate'
  }
];

const Features = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[11px] font-bold mb-6 border border-indigo-100 uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3" />
            Everything you need, in one place
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
          >
            A complete operations platform<br />
            built for <span className="text-indigo-600">modern teams</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 text-[16px] leading-relaxed max-w-2xl mx-auto"
          >
            WorkSensy brings all your operations together — projects, tasks, people, 
            approvals, documentation, and insights in a single, intelligent workspace.
          </motion.p>
        </div>

        {/* Features Grid - Compact Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group relative h-full flex flex-col"
            >
              <div className="flex items-start gap-5 mb-4">
                <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-2">
                <a href="#" className="inline-flex items-center gap-1.5 text-indigo-600 text-[12px] font-bold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Banner - Even more compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f8fafc] border border-slate-100 rounded-[2rem] p-6 mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Left side main content */}
            <div className="flex-[1.2] flex items-center gap-5 lg:pr-6 lg:border-r border-slate-200 w-full lg:w-auto">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-[15px] font-bold text-slate-900 mb-0.5">Built with security, scale & reliability</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Enterprise-grade security and infrastructure built to grow.
                </p>
              </div>
            </div>
            
            {/* Right side sub-features */}
            <div className="flex-[2.5] grid grid-cols-2 md:grid-cols-4 gap-4 py-1 w-full">
              {[
                { label: 'Enterprise Security', desc: 'Your data is safe and private', icon: Lock },
                { label: '99.9% Uptime', desc: 'Reliable platform you count on', icon: Zap },
                { label: 'Scalable by Design', desc: 'Built to support any team size', icon: Cloud },
                { label: 'Global Ready', desc: 'Accessible from anywhere', icon: Globe },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start pl-2">
                  <div className="mb-2 flex items-center justify-start">
                    <item.icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h5 className="text-[12px] font-bold text-slate-900 mb-0.5 leading-tight">{item.label}</h5>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-50/50 px-5 py-2 rounded-full border border-indigo-100/50">
            <Heart className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
            <span className="text-[12px] font-bold text-indigo-900/60 uppercase tracking-tight">Built for operations. Designed for people.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
