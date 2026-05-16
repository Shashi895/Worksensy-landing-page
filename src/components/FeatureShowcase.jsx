import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckSquare, FolderKanban, Users, GitBranch, BarChart3,
  ChevronRight, ShieldCheck, Zap, Puzzle, Headphones, Sparkles
} from 'lucide-react';

const tabs = [
  {
    id: 'task',
    icon: CheckSquare,
    iconBg: 'bg-indigo-50 text-indigo-600',
    title: 'Task Management',
    desc: 'Create, assign, and track tasks with complete visibility.',
    image: '/1.png',
  },
  {
    id: 'project',
    icon: FolderKanban,
    iconBg: 'bg-purple-50 text-purple-600',
    title: 'Project Tracking',
    desc: 'Plan projects, set milestones, and keep everything on track.',
    image: '/2.png',
  },
  {
    id: 'team',
    icon: Users,
    iconBg: 'bg-green-50 text-green-600',
    title: 'Team Collaboration',
    desc: 'Communicate, share updates, and collaborate in real time.',
    image: '/3.png',
  },
  {
    id: 'approvals',
    icon: GitBranch,
    iconBg: 'bg-orange-50 text-orange-600',
    title: 'Approvals & Workflows',
    desc: 'Automate approvals and streamline your business processes.',
    image: '/4.png',
  },
  {
    id: 'reports',
    icon: BarChart3,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Reports & Insights',
    desc: 'Get real-time insights and make data-driven decisions.',
    image: '/5.png',
  },
];

const trustItems = [
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Enterprise-grade security you can trust.', color: 'text-indigo-600 bg-indigo-50' },
  { icon: Zap, title: 'Fast & Efficient', desc: 'Built for speed to help your team stay productive.', color: 'text-yellow-600 bg-yellow-50' },
  { icon: Puzzle, title: 'Easy to Integrate', desc: 'Works seamlessly with the tools you already use.', color: 'text-green-600 bg-green-50' },
  { icon: Headphones, title: 'Always Here', desc: 'Our support team is ready whenever you need us.', color: 'text-purple-600 bg-purple-50' },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState('task');
  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <section className="py-10 bg-[#f5f5ff] overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            Built for modern teams
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
            Everything you need to<br />
            run your team, <span className="text-indigo-600">in one place</span>
          </h2>
          <p className="text-slate-500 text-[16px] max-w-lg mx-auto leading-relaxed">
            Worksensy brings your tasks, projects, approvals, and insights<br />
            together—so your team can move faster and achieve more.
          </p>
        </motion.div>

        {/* Main Feature Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mb-10">

          {/* LEFT: Tab List */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ x: isActive ? 0 : 5, transition: { type: 'spring', stiffness: 400, damping: 30 } }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 group ${
                    isActive
                      ? 'bg-white border-indigo-200 shadow-md shadow-indigo-100/50'
                      : 'bg-white/50 border-slate-100 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  {/* Left accent bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full" />
                  )}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    isActive ? tab.iconBg : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                  }`}>
                    <tab.icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-[14px] font-black leading-none mb-1 ${isActive ? 'text-indigo-600' : 'text-slate-800 group-hover:text-slate-900'}`}>
                      {tab.title}
                    </p>
                    <p className="text-[11px] text-slate-500 leading-tight">{tab.desc}</p>
                  </div>

                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                    isActive ? 'text-indigo-500' : 'text-slate-300 group-hover:text-slate-400'
                  }`} />
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Image Preview (blurred placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(99,102,241,0.10)] overflow-hidden relative min-h-[280px] md:min-h-[400px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full absolute inset-0"
              >
                {activeTabData.image ? (
                  /* Real image with subtle blur */
                  <div className="relative w-full h-full">
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.title}
                      className="w-full h-full object-cover blur-[2px]"
                    />
                    {/* Subtle glass overlay */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
                    {/* Coming soon badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-md border border-indigo-100/50 shadow-xl rounded-2xl px-8 py-5 text-center">
                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <activeTabData.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <p className="text-[13px] font-black text-slate-900 mb-1">{activeTabData.title}</p>
                        <p className="text-[11px] text-slate-500">Preview coming soon</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Placeholder when no image provided */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50/30 p-10">
                    {/* Blurred placeholder blocks */}
                    <div className="w-full max-w-xl space-y-4 blur-[3px] opacity-50 pointer-events-none select-none mb-6">
                      <div className="h-8 bg-slate-200 rounded-xl w-3/4" />
                      <div className="grid grid-cols-4 gap-3">
                        {[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-indigo-100/60 rounded-xl" />)}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-32 bg-slate-100 rounded-xl" />
                        <div className="h-32 bg-purple-100/50 rounded-xl" />
                      </div>
                      <div className="h-6 bg-slate-200 rounded-lg w-1/2" />
                      <div className="h-6 bg-slate-200 rounded-lg w-2/3" />
                    </div>

                    {/* Coming soon overlay */}
                    <div className="bg-white/90 backdrop-blur-sm border border-indigo-100 shadow-xl rounded-2xl px-8 py-5 text-center">
                      <div className={`w-12 h-12 ${activeTabData.iconBg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                        <activeTabData.icon className="w-6 h-6" />
                      </div>
                      <p className="text-[14px] font-black text-slate-900 mb-1">{activeTabData.title}</p>
                      <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto">{activeTabData.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full">
                        <Sparkles className="w-2.5 h-2.5" />
                        Screenshot coming soon
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                <item.icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[13px] font-black text-slate-900 leading-none mb-1">{item.title}</p>
                <p className="text-[11px] text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureShowcase;
