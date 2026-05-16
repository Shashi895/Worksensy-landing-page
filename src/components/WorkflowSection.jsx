import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye, Zap, TrendingUp, Sparkles,
  Search, Bell, ChevronDown, MoreHorizontal,
  FileText, CheckCircle, Calendar, BarChart3,
  Users, ClipboardList, Clock, CheckCircle2
} from 'lucide-react';
import { Star } from 'lucide-react';

const WorkflowSection = () => {
  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="container-custom">

        {/* TOP: Left Text + Right Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start mb-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              Built for Modern Operations
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Clarity in operations.<br />
              <span className="text-indigo-600">Every day.</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 text-[16px] leading-relaxed mb-12 max-w-sm">
              From planning to execution, get complete visibility into your work, your team, and what matters most.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-7">
              {[
                {
                  icon: Eye,
                  title: 'Full Visibility',
                  desc: 'See everything that\'s happening across projects and teams.',
                  bg: 'bg-purple-50',
                  color: 'text-purple-600'
                },
                {
                  icon: Zap,
                  title: 'Smarter Execution',
                  desc: 'Automate workflows and eliminate manual busywork.',
                  bg: 'bg-indigo-50',
                  color: 'text-indigo-600'
                },
                {
                  icon: TrendingUp,
                  title: 'Data-Driven Decisions',
                  desc: 'Real-time insights help you act faster and with confidence.',
                  bg: 'bg-green-50',
                  color: 'text-green-600'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-5"
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(99,102,241,0.12)] overflow-hidden relative z-10"
          >
            <div className="flex">
              {/* Sidebar */}
              <div className="w-12 bg-slate-50/90 border-r border-slate-100 flex flex-col items-center py-4 gap-5">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-200">
                  <span className="text-white text-xs font-black">W</span>
                </div>
                {[ClipboardList, Users, FileText, BarChart3, Clock].map((Icon, i) => (
                  <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-indigo-400 transition-colors'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Welcome back, Rohit 👋</h3>
                    <p className="text-[10px] text-slate-800 mt-1 font-medium">Here's an overview of your operations.</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg px-3 py-1.5">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-500 font-semibold">This Week</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="relative">
                      <Bell className="w-4 h-4 text-slate-500" />
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                    </div>
                    <img src="https://i.pravatar.cc/32?u=9" alt="" className="w-7 h-7 rounded-full border-2 border-indigo-100 shadow-sm" />
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: 'Projects', val: '24', change: '+12% vs last week', icon: ClipboardList, color: 'text-indigo-600 bg-indigo-50', positive: true },
                    { label: 'Tasks', val: '156', change: '+8% vs last week', icon: CheckCircle2, color: 'text-blue-600 bg-blue-50', positive: true },
                    { label: 'Team Utilization', val: '78%', change: '+5% vs last week', icon: Users, color: 'text-teal-600 bg-teal-50', positive: true },
                    { label: 'Pending Approvals', val: '12', change: '-3 vs last week', icon: Clock, color: 'text-orange-600 bg-orange-50', positive: false },
                  ].map((card, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-xl p-2.5 shadow-sm">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center mb-2 ${card.color}`}>
                        <card.icon className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[9px] text-slate-800 uppercase tracking-wide font-black">{card.label}</p>
                      <p className="text-base font-black text-slate-900 leading-tight">{card.val}</p>
                      <p className={`text-[8px] font-bold mt-1 ${card.positive ? 'text-green-600' : 'text-red-500'}`}>
                        {card.positive ? '↑' : '↓'} {card.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Middle Row: Chart + Donut */}
                <div className="grid grid-cols-[1fr_auto] gap-3 mb-3">
                  {/* Operations Overview */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[13px] font-bold text-slate-800 tracking-tight">Operations Overview</span>
                      <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-2.5 py-1 shadow-sm cursor-pointer hover:bg-slate-50 transition-all group">
                        <span className="text-[10px] text-slate-800 font-bold group-hover:text-indigo-600">This Week</span>
                        <ChevronDown className="w-3 h-3 text-slate-600 group-hover:text-indigo-600 transition-transform group-hover:translate-y-0.5" />
                      </div>
                    </div>
                    
                    <div className="relative h-40 w-full mt-2">
                      {/* Grid Lines - Very subtle */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-5">
                        {[100, 75, 50, 25, 0].map((val) => (
                          <div key={val} className="flex items-center gap-3 w-full">
                            <span className="text-[9px] text-slate-600 font-bold w-4 text-right">{val}</span>
                            <div className="flex-1 h-px bg-slate-50" />
                          </div>
                        ))}
                      </div>

                      {/* Vertical Grid Lines - Very subtle */}
                      <div className="absolute inset-0 flex justify-between ml-8 pointer-events-none pb-5 pr-2">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div key={i} className="w-px h-full bg-slate-50/50" />
                        ))}
                      </div>

                      {/* SVG Chart */}
                      <div className="absolute inset-0 ml-8 pb-5 pr-2">
                        <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.01" />
                            </linearGradient>
                            <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="rgba(0,0,0,0.06)" />
                            </filter>
                          </defs>
                          
                          {/* Smooth Cubic Bezier Path */}
                          <path 
                            d="M 0,90 C 30,90 30,70 60,70 C 90,70 90,85 120,85 C 150,85 150,55 180,55 C 210,55 210,95 240,95 C 270,95 270,65 300,65 C 330,65 330,35 360,35 C 390,35 390,25 400,25 L 400,120 L 0,120 Z" 
                            fill="url(#chartGradient)" 
                          />
                          
                          <path 
                            d="M 0,90 C 30,90 30,70 60,70 C 90,70 90,85 120,85 C 150,85 150,55 180,55 C 210,55 210,95 240,95 C 270,95 270,65 300,65 C 330,65 330,35 360,35 C 390,35 390,25 400,25" 
                            fill="none" 
                            stroke="#6366f1" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                          
                          {/* Data Points */}
                          {[
                            { x: 0, y: 90 }, { x: 60, y: 70 }, { x: 120, y: 85 }, 
                            { x: 180, y: 55 }, { x: 240, y: 95 }, { x: 300, y: 65 }, 
                            { x: 360, y: 35 }, { x: 400, y: 25 }
                          ].map((p, i) => (
                            <circle 
                              key={i} 
                              cx={p.x} 
                              cy={p.y} 
                              r="4" 
                              fill="#6366f1" 
                              stroke="white" 
                              strokeWidth="2"
                            />
                          ))}

                          {/* Floating Tooltip at Thursday position */}
                          <g transform="translate(148, 5)">
                            <rect width="70" height="50" rx="12" fill="white" filter="url(#tooltipShadow)" stroke="#f1f5f9" strokeWidth="1" />
                            <text x="12" y="20" className="text-[9px] fill-slate-400 font-bold tracking-tight">Thu, 16 May</text>
                            <text x="12" y="38" className="text-[12px] fill-green-500 font-black">↑</text>
                            <text x="24" y="38" className="text-[14px] fill-slate-900 font-black tracking-tighter">78%</text>
                          </g>
                          
                          {/* Vertical Guide Line */}
                          <line x1="180" y1="55" x2="180" y2="120" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" opacity="0.15" />
                        </svg>
                      </div>

                      {/* X Axis Labels */}
                      <div className="absolute bottom-0 left-8 right-2 flex justify-between">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                          <span key={d} className="text-[10px] text-slate-600 font-bold">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Task Progress Donut */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm w-[140px]">
                    <span className="text-[11px] font-bold text-slate-800 block mb-3">Task Progress</span>
                    <div className="relative flex items-center justify-center mb-3">
                      <svg viewBox="0 0 80 80" className="w-16 h-16 -rotate-90">
                        <circle cx="40" cy="40" r="28" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                        <circle cx="40" cy="40" r="28" fill="none" stroke="#6366f1" strokeWidth="10" strokeDasharray="125.6" strokeDashoffset="34.9" strokeLinecap="round" />
                        <circle cx="40" cy="40" r="28" fill="none" stroke="#a5b4fc" strokeWidth="10" strokeDasharray="22.6" strokeDashoffset="-90.7" strokeLinecap="round" />
                      </svg>
                      <div className="absolute text-center">
                        <p className="text-base font-black text-slate-900 leading-none">156</p>
                        <p className="text-[8px] text-slate-400 font-medium">Total</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[
                        { label: 'Completed', val: '72%', color: 'bg-indigo-500' },
                        { label: 'In Progress', val: '18%', color: 'bg-indigo-300' },
                        { label: 'To Do', val: '10%', color: 'bg-slate-200' },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                            <span className="text-[8px] text-slate-500">{s.label}</span>
                          </div>
                          <span className="text-[8px] font-bold text-slate-700">{s.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Team Workload + Recent Activity */}
                <div className="grid grid-cols-[1fr_1.2fr] gap-3">
                  {/* Team Workload */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-800 block mb-3">Team Workload</span>
                    <div className="flex items-center gap-1 mb-3">
                      {[11,12,13].map((u) => (
                        <img key={u} src={`https://i.pravatar.cc/24?u=${u}`} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-1.5 first:ml-0 object-cover" />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[7px] font-bold flex items-center justify-center -ml-1.5 shadow-sm">+6</div>
                      <span className="text-[9px] text-slate-400 ml-2 font-semibold">78%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '78%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                    <p className="text-[8px] text-slate-600 mt-2 font-medium">Workload is balanced</p>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                    <span className="text-[11px] font-bold text-slate-800 block mb-3">Recent Activity</span>
                    <div className="space-y-2.5">
                      {[
                        { icon: CheckCircle2, color: 'text-green-500 bg-green-50', title: 'Creative Brief v2.0 approved', sub: 'Ayesha Khan · 2m ago' },
                        { icon: FileText, color: 'text-blue-500 bg-blue-50', title: 'New SOP uploaded', sub: 'Rahul Verma · 18m ago' },
                        { icon: Calendar, color: 'text-orange-500 bg-orange-50', title: 'Design review scheduled', sub: 'Neha Sharma · 1h ago' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${item.color}`}>
                            <item.icon className="w-2.5 h-2.5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-slate-700 leading-tight">{item.title}</p>
                             <p className="text-[8px] text-slate-600 font-medium">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM: Testimonial Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50/80 border border-slate-200 rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
        >
          {/* Quote */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-8 h-8 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 text-xl font-black leading-none">"</span>
            </div>
            <p className="text-slate-900 text-[13px] leading-relaxed font-bold italic">
              WorkSensy gives us the clarity and control we needed to scale our operations seamlessly.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-slate-300" />

          {/* Person */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src="https://i.pravatar.cc/48?u=arjun" alt="Arjun Mehta" className="w-10 h-10 rounded-full object-cover shadow-sm border-2 border-white" />
            <div>
              <p className="text-[13px] font-black text-slate-900 leading-none mb-1">Arjun Mehta</p>
              <p className="text-[10px] text-slate-700 font-bold">Head of Operations, TechNova</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-slate-300" />

          {/* Rating */}
          <div className="flex-shrink-0 text-center">
            <div className="flex items-center gap-0.5 mb-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[12px] font-black text-slate-900 leading-none">4.9/5</p>
            <p className="text-[9px] text-slate-700 font-bold">early access users</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkflowSection;
