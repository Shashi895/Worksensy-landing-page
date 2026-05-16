import React from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus, FolderOpen, ListTodo, TrendingUp,
  ArrowRight, Play, CheckCircle2, CreditCard, XCircle,
  Rocket, ClipboardList, Users, Clock, CheckCircle,
  Search, Bell, ChevronDown, BarChart3, FileText, Calendar
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    iconBg: 'bg-indigo-50 text-indigo-600',
    numColor: 'text-indigo-600',
    title: 'Create your workspace',
    desc: 'Sign up in seconds and set up your workspace for your team.',
  },
  {
    num: '02',
    icon: FolderOpen,
    iconBg: 'bg-green-50 text-green-600',
    numColor: 'text-green-500',
    title: 'Invite your team',
    desc: 'Bring your team together and define roles and permissions.',
  },
  {
    num: '03',
    icon: ListTodo,
    iconBg: 'bg-orange-50 text-orange-500',
    numColor: 'text-orange-500',
    title: 'Set up your workflow',
    desc: 'Customize projects, tasks and approvals to match your process.',
  },
  {
    num: '04',
    icon: TrendingUp,
    iconBg: 'bg-purple-50 text-purple-600',
    numColor: 'text-purple-600',
    title: 'Track and optimize',
    desc: 'Monitor progress, gain insights and continuously improve.',
  },
];

const statCards = [
  { label: 'Projects', val: '24', change: '+12% vs last week', icon: ClipboardList, color: 'text-blue-600 bg-blue-50', positive: true },
  { label: 'Tasks', val: '156', change: '+8% vs last week', icon: CheckCircle2, color: 'text-green-600 bg-green-50', positive: true },
  { label: 'Team Utilization', val: '78%', change: '+5% vs last week', icon: Users, color: 'text-teal-600 bg-teal-50', positive: true },
  { label: 'Pending Approvals', val: '12', change: '-3 vs last week', icon: Clock, color: 'text-orange-600 bg-orange-50', positive: false },
];

const GetStartedSection = ({ onOpenWaitlist }) => {
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
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Rocket className="w-3 h-3" />
            Simple. Powerful. Effective.
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
            Get started in minutes and<br />
            <span className="text-indigo-600">transform operations</span>
          </h2>
          <p className="text-slate-500 text-[16px] max-w-lg mx-auto leading-relaxed">
            WorkSensy is easy to set up and even easier to use.<br />
            Follow these simple steps to streamline your operations.
          </p>
        </motion.div>

        {/* 4 Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-50/40 transition-all group z-10 relative flex flex-col"
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[24px] font-black opacity-10 ${step.numColor}`}>{step.num}</span>
                </div>
                
                <h3 className="text-[16px] font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-[12px] leading-relaxed mb-5 flex-1">{step.desc}</p>
                

              </motion.div>

              {/* HIGH-FIDELITY ANIMATED ARROW (At Top Edge) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-0 -right-7 -translate-y-1/2 z-20 items-center pointer-events-none">
                  <svg width="50" height="20" viewBox="0 0 50 20" fill="none" className="overflow-visible">
                    {/* Background line */}
                    <path d="M0 10 L40 10" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Animated flowing line */}
                    <motion.path 
                      d="M0 10 L40 10" 
                      stroke="#818cf8" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [-8, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Pulsing Arrowhead */}
                    <motion.path 
                      d="M34 5 L40 10 L34 15" 
                      stroke="#6366f1" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#f5f5ff] border border-indigo-100/60 rounded-3xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center"
        >
          {/* LEFT: CTA Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Ready to transform your operations?
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.2] mb-4">
              Join teams already<br />
              building <span className="text-indigo-600">better, every day.</span>
            </h2>

            <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
              WorkSensy helps modern teams save time, reduce chaos<br />
              and focus on what truly matters.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button onClick={onOpenWaitlist} className="btn-primary flex items-center gap-2 text-[13px] font-bold px-6 py-3 shadow-lg shadow-indigo-200 w-full sm:w-auto justify-center">
                Start Your Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onOpenWaitlist} className="flex items-center gap-2.5 text-slate-700 text-[13px] font-bold bg-white border border-slate-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all w-full sm:w-auto justify-center">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold">
                <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* RIGHT: Mini Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden"
          >
            <div className="flex">
              {/* Sidebar */}
              <div className="w-10 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-4 gap-4 flex-shrink-0">
                <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
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
                    <h3 className="text-[11px] font-black text-slate-900">Good morning, Rohit 👋</h3>
                    <p className="text-[9px] text-slate-700 font-medium mt-0.5">Here's what's happening with your operations today.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2 py-1">
                      <span className="text-[8px] text-slate-700 font-bold">This Week</span>
                      <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Bell className="w-3.5 h-3.5 text-slate-500" />
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                    </div>
                    <img src="https://i.pravatar.cc/24?u=9" alt="" className="w-5 h-5 rounded-full border border-slate-200" />
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {statCards.map((card, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mb-1 ${card.color}`}>
                        <card.icon className="w-2.5 h-2.5" />
                      </div>
                      <p className="text-[7px] text-slate-800 uppercase tracking-wide font-black">{card.label}</p>
                      <p className="text-[12px] font-black text-slate-900 leading-none">{card.val}</p>
                      <p className={`text-[6.5px] font-bold mt-0.5 ${card.positive ? 'text-green-600' : 'text-red-500'}`}>
                        {card.positive ? '↑' : '↓'} {card.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Row */}
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-3 bg-white border border-slate-100 rounded-xl p-2.5 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black text-slate-900">Operations Overview</span>
                      <div className="flex items-center gap-0.5 bg-white border border-slate-200 rounded px-1.5 py-0.5">
                        <span className="text-[7px] text-slate-700 font-bold">This Week</span>
                        <ChevronDown className="w-2 h-2 text-slate-400" />
                      </div>
                    </div>
                    <div className="relative h-20">
                      <div className="absolute inset-0 flex flex-col justify-between pb-4 pointer-events-none">
                        {[100,75,50,25,0].map(v => (
                          <div key={v} className="flex items-center gap-1">
                            <span className="text-[5.5px] text-slate-500 font-bold w-3 text-right">{v}</span>
                            <div className="flex-1 h-px bg-slate-50" />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 ml-5 pb-4">
                        <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="ctaGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.01" />
                            </linearGradient>
                          </defs>
                          <path d="M 0,55 C 20,55 20,40 50,40 C 75,40 75,55 100,55 C 125,55 125,30 150,30 C 175,30 175,60 200,60 C 225,60 225,35 250,35 C 275,35 275,15 300,15 L 300,70 L 0,70 Z" fill="url(#ctaGrad)" />
                          <path d="M 0,55 C 20,55 20,40 50,40 C 75,40 75,55 100,55 C 125,55 125,30 150,30 C 175,30 175,60 200,60 C 225,60 225,35 250,35 C 275,35 275,15 300,15" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                          {[{x:0,y:55},{x:50,y:40},{x:100,y:55},{x:150,y:30},{x:200,y:60},{x:250,y:35},{x:300,y:15}].map((p,i)=>(
                            <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="#6366f1" stroke="white" strokeWidth="1.5" />
                          ))}
                          <g transform="translate(112, 2)">
                            <rect width="48" height="26" rx="7" fill="#1e293b" />
                            <text x="24" y="12" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="bold">Thu, 16 May</text>
                            <text x="10" y="22" fill="#22c55e" fontSize="7" fontWeight="bold">↑</text>
                            <text x="18" y="22" fill="white" fontSize="8" fontWeight="bold">78%</text>
                          </g>
                          <line x1="150" y1="30" x2="150" y2="70" stroke="#6366f1" strokeWidth="1" strokeDasharray="3,3" opacity="0.2" />
                        </svg>
                      </div>
                      <div className="absolute bottom-0 left-5 right-0 flex justify-between">
                        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>(
                          <span key={d} className="text-[5.5px] text-slate-600 font-bold">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Donut */}
                  <div className="col-span-2 bg-white border border-slate-100 rounded-xl p-2.5 shadow-sm">
                    <span className="text-[9px] font-black text-slate-900 block mb-2">Task Progress</span>
                    <div className="flex items-center gap-2">
                      <div className="relative w-11 h-11 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="63 37" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="16 84" strokeDashoffset="-63" strokeLinecap="round" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="9 91" strokeDashoffset="-79" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[9px] font-black text-slate-900">156</span>
                          <span className="text-[5.5px] text-slate-500">Total</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {[
                          {l:'Completed',p:'72%',c:'bg-green-500'},
                          {l:'In Progress',p:'18%',c:'bg-indigo-500'},
                          {l:'To Do',p:'10%',c:'bg-slate-200'},
                        ].map((t,i)=>(
                          <div key={i} className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${t.c}`}/>
                            <span className="text-[6.5px] text-slate-700 font-medium">{t.l}</span>
                            <span className="text-[6.5px] font-black text-slate-900 ml-auto pl-1">{t.p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetStartedSection;
