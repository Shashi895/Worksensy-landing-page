import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList, Users, FileText, BarChart3, Clock,
  CheckCircle2, Calendar, ChevronDown, ArrowRight,
  ShieldCheck, Rocket, Zap, Star
} from 'lucide-react';

// Mini dashboard data
const statCards = [
  { label: 'Projects', val: '24', change: '+12% vs last week', icon: ClipboardList, color: 'text-blue-600 bg-blue-50', positive: true },
  { label: 'Tasks', val: '156', change: '+8% vs last week', icon: CheckCircle2, color: 'text-green-600 bg-green-50', positive: true },
  { label: 'Team Utilization', val: '78%', change: '+5% vs last week', icon: Users, color: 'text-teal-600 bg-teal-50', positive: true },
  { label: 'Pending Approvals', val: '12', change: '-3 vs last week', icon: Clock, color: 'text-orange-600 bg-orange-50', positive: false },
];

const leftCards = [
  {
    icon: ClipboardList,
    iconBg: 'bg-indigo-50 text-indigo-600',
    title: 'Plan with confidence',
    desc: 'Break down goals into actionable plans and align your team from day one.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Track what matters',
    desc: 'Monitor progress in real time and stay on top of what drives results.',
  },
];

const rightCards = [
  {
    icon: Users,
    iconBg: 'bg-green-50 text-green-600',
    title: 'Work together seamlessly',
    desc: 'Collaborate in one shared space and keep everyone aligned toward goals.',
  },
  {
    icon: ShieldCheck,
    iconBg: 'bg-orange-50 text-orange-600',
    title: 'Automate with ease',
    desc: 'Streamline approvals and repetitive workflows so your team can focus on what matters.',
  },
];

const stats = [
  { icon: Users, val: '10K+', label: 'Active teams', color: 'text-indigo-600 bg-indigo-50' },
  { icon: CheckCircle2, val: '2M+', label: 'Tasks completed', color: 'text-green-600 bg-green-50' },
  { icon: Rocket, val: '98%', label: 'Customer satisfaction', color: 'text-blue-600 bg-blue-50' },
  { icon: ShieldCheck, val: '99.9%', label: 'Uptime guarantee', color: 'text-orange-600 bg-orange-50' },
];

const BentoSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
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
            <Users className="w-3 h-3" />
            Trusted by modern teams
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
            Everything your team needs<br />
            to run <span className="text-indigo-600">operations better</span>
          </h2>
          <p className="text-slate-500 text-[16px] max-w-xl mx-auto leading-relaxed">
            WorkSensy combines the tools, visibility and intelligence your team needs<br />
            to plan, track and deliver with confidence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5 mb-10">

          {/* LEFT CARDS */}
          <div className="flex flex-row lg:flex-col gap-5">
            {leftCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col flex-1"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.iconBg}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-500 text-[12px] leading-relaxed flex-1">{card.desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-indigo-600 text-[12px] font-bold mt-4 hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* CENTER - Mini Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block bg-white border border-slate-100 rounded-3xl shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden"
          >
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-10 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-4 gap-4 flex-shrink-0">
                <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
                  <span className="text-white text-[10px] font-black">W</span>
                </div>
                {[ClipboardList, Users, FileText, BarChart3, Clock].map((Icon, i) => (
                  <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${i === 0 ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400'}`}>
                    <Icon className="w-3 h-3" />
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 min-w-0">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-[12px] font-black text-slate-900">Good morning, Rohit 👋</h3>
                    <p className="text-[9px] text-slate-700 font-medium mt-0.5">Here's what's happening with your operations.</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2 py-1 shadow-sm">
                    <span className="text-[9px] text-slate-700 font-bold">This Week</span>
                    <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {statCards.map((card, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mb-1.5 ${card.color}`}>
                        <card.icon className="w-2.5 h-2.5" />
                      </div>
                      <p className="text-[7.5px] text-slate-800 uppercase tracking-wide font-black leading-none mb-0.5">{card.label}</p>
                      <p className="text-[13px] font-black text-slate-900 leading-none">{card.val}</p>
                      <p className={`text-[7px] font-bold mt-0.5 ${card.positive ? 'text-green-600' : 'text-red-500'}`}>
                        {card.positive ? '↑' : '↓'} {card.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Row */}
                <div className="grid grid-cols-5 gap-2">
                  {/* Line Chart */}
                  <div className="col-span-3 bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black text-slate-900">Operations Overview</span>
                      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded px-1.5 py-0.5">
                        <span className="text-[7.5px] text-slate-700 font-bold">This Week</span>
                        <ChevronDown className="w-2 h-2 text-slate-500" />
                      </div>
                    </div>

                    {/* Y-axis labels + chart */}
                    <div className="relative h-24">
                      <div className="absolute inset-0 flex flex-col justify-between pb-4 pointer-events-none">
                        {[100, 75, 50, 25, 0].map(v => (
                          <div key={v} className="flex items-center gap-1.5">
                            <span className="text-[6px] text-slate-500 font-bold w-3 text-right">{v}</span>
                            <div className="flex-1 h-px bg-slate-50" />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 ml-5 pb-4">
                        <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="bentoGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.01" />
                            </linearGradient>
                            <filter id="bShadow">
                              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.06)" />
                            </filter>
                          </defs>
                          <path d="M 0,65 C 25,65 25,50 50,50 C 75,50 75,62 100,62 C 125,62 125,38 150,38 C 175,38 175,70 200,70 C 225,70 225,45 250,45 C 275,45 275,20 300,20 L 300,80 L 0,80 Z" fill="url(#bentoGrad)" />
                          <path d="M 0,65 C 25,65 25,50 50,50 C 75,50 75,62 100,62 C 125,62 125,38 150,38 C 175,38 175,70 200,70 C 225,70 225,45 250,45 C 275,45 275,20 300,20" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                          {[{x:0,y:65},{x:50,y:50},{x:100,y:62},{x:150,y:38},{x:200,y:70},{x:250,y:45},{x:300,y:20}].map((p,i) => (
                            <circle key={i} cx={p.x} cy={p.y} r="3" fill="#6366f1" stroke="white" strokeWidth="1.5" />
                          ))}
                          {/* Tooltip */}
                          <g transform="translate(110, 2)">
                            <rect width="55" height="32" rx="8" fill="#1e293b" filter="url(#bShadow)" />
                            <text x="27.5" y="14" textAnchor="middle" fill="#94a3b8" fontSize="6" fontWeight="bold">Thu, 16 May</text>
                            <text x="12" y="26" fill="#22c55e" fontSize="8" fontWeight="bold">↑</text>
                            <text x="21" y="26" fill="white" fontSize="9" fontWeight="bold">78%</text>
                          </g>
                          <line x1="150" y1="38" x2="150" y2="80" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                        </svg>
                      </div>
                      {/* X labels */}
                      <div className="absolute bottom-0 left-5 right-0 flex justify-between">
                        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                          <span key={d} className="text-[6px] text-slate-600 font-bold">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Donut Chart */}
                  <div className="col-span-2 bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                    <span className="text-[9px] font-black text-slate-900 block mb-2">Task Progress</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="63 37" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="16 84" strokeDashoffset="-63" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="9 91" strokeDashoffset="-79" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[10px] font-black text-slate-900">156</span>
                          <span className="text-[6px] text-slate-500">Total</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        {[
                          { l: 'Completed', p: '72%', c: 'bg-green-500' },
                          { l: 'In Progress', p: '18%', c: 'bg-indigo-500' },
                          { l: 'To Do', p: '10%', c: 'bg-slate-200' },
                        ].map((t, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.c}`} />
                            <span className="text-[7px] text-slate-700 font-medium">{t.l}</span>
                            <span className="text-[7px] font-black text-slate-900 ml-auto">{t.p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="flex flex-row lg:flex-col gap-5">
            {rightCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col flex-1"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.iconBg}`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-black text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-500 text-[12px] leading-relaxed flex-1">{card.desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-indigo-600 text-[12px] font-bold mt-4 hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[22px] font-black text-slate-900 leading-none">{s.val}</p>
                <p className="text-[12px] text-slate-600 font-medium mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BentoSection;
