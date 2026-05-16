import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Search, 
  Bell, 
  MoreVertical, 
  Rocket, 
  ClipboardList, 
  CheckCircle2, 
  Users, 
  Clock,
  Sparkles,
  Target
} from 'lucide-react';

const Hero = ({ onOpenWaitlist }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/30 pt-28 pb-10">

        {/* Decorative dot patterns */}
        <div className="absolute top-24 left-8 grid grid-cols-6 gap-2 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-indigo-400" />
          ))}
        </div>
        <div className="absolute bottom-24 right-8 grid grid-cols-6 gap-2 opacity-20">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-purple-400" />
          ))}
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-[80px] -z-0" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold px-4 py-1.5 rounded-full w-fit mb-6 uppercase tracking-wider">
                <Rocket className="w-3.5 h-3.5" />
                Building in Public
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 leading-[1.1] mb-6">
                The future of<br />
                operations is<br />
                <span className="text-indigo-600">being built.</span>
              </h1>

              {/* Subtext */}
              <p className="text-slate-500 text-base md:text-[17px] leading-relaxed mb-10 max-w-md">
                WorkSensy is the all-in-one operations platform designed to help modern teams plan, track, collaborate and scale with clarity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button 
                  onClick={onOpenWaitlist}
                  className="btn-primary flex items-center gap-2 text-sm font-semibold px-6 py-3.5"
                >
                  Get Early Access <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onOpenWaitlist}
                  className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold bg-white border border-slate-200 px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                  </div>
                  See How It Works
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[11, 12, 13, 14].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?u=${i}`}
                      alt="user"
                      className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Join <span className="font-bold text-slate-800">200+</span> operations leaders<br />
                  shaping the future with us
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE - Dashboard Mockup */}
          <motion.div
              initial={{ opacity: 0, x: 50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100/60 border border-slate-100 overflow-hidden">
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-12 bg-slate-50/80 border-r border-slate-100 flex flex-col items-center py-4 gap-5">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
                      <span className="text-white text-xs font-black">W</span>
                    </div>
                    {['▦', '☰', '⊞', '≡', '⚙'].map((icon, i) => (
                      <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${i === 0 ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:text-indigo-400 transition-colors'}`}>
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-5">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Good morning, Rohit</h3>
                        <p className="text-[10px] text-slate-800 mt-1 font-medium">Here's what's happening with your operations today.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1">
                          <Search className="w-3 h-3 text-slate-400" />
                          <span className="text-[10px] text-slate-400">Search anything...</span>
                        </div>
                        <div className="relative">
                          <Bell className="w-4 h-4 text-slate-500" />
                          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
                        </div>
                        <img src="https://i.pravatar.cc/32?u=9" alt="" className="w-6 h-6 rounded-full border border-slate-200 shadow-sm" />
                      </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { label: 'Projects', val: '24', change: '+12% vs last week', icon: ClipboardList, color: 'text-blue-600 bg-blue-50' },
                        { label: 'Tasks', val: '156', change: '+8% vs last week', icon: CheckCircle2, color: 'text-green-600 bg-green-50' },
                        { label: 'Team Utilization', val: '78%', change: '+3% vs last week', icon: Users, color: 'text-teal-600 bg-teal-50' },
                        { label: 'Pending Approvals', val: '12', change: '+3 vs last week', icon: Clock, color: 'text-orange-600 bg-orange-50' },
                      ].map((card, i) => (
                        <div key={i} className="bg-white border border-slate-100 rounded-xl p-2.5 shadow-sm">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs mb-1.5 ${card.color}`}>
                            <card.icon className="w-3.5 h-3.5" />
                          </div>
                          <p className="text-[9px] text-slate-800 uppercase tracking-wide font-black">{card.label}</p>
                          <p className="text-base font-black text-slate-900 leading-tight">{card.val}</p>
                          <p className="text-[8px] text-green-600 font-bold mt-1">{card.change}</p>
                        </div>
                      ))}
                    </div>

                    {/* Charts Row */}
                    <div className="grid grid-cols-5 gap-3">
                      {/* Line Chart */}
                      <div className="col-span-3 bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-slate-800">Operations Overview</span>
                          <span className="text-[9px] text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">This Week ↓</span>
                        </div>
                        {/* SVG Line Chart */}
                        <div className="relative h-20">
                          <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path d="M0,45 L28,38 L57,48 L85,22 L113,30 L142,15 L170,25 L200,18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M0,45 L28,38 L57,48 L85,22 L113,30 L142,15 L170,25 L200,18 L200,60 L0,60Z" fill="url(#lineGrad)" />
                            {/* Tooltip dot */}
                            <circle cx="113" cy="30" r="3" fill="#6366f1" />
                            {/* Tooltip */}
                            <rect x="100" y="5" width="48" height="16" rx="4" fill="#1e293b" />
                            <text x="124" y="16" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">Thu, 16 May</text>
                            <text x="124" y="22" textAnchor="middle" fill="#818cf8" fontSize="5">● 79%</text>
                          </svg>
                          {/* Day labels */}
                          <div className="flex justify-between mt-1">
                            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                              <span key={d} className="text-[7px] text-slate-300">{d}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Donut Chart - Task Progress */}
                      <div className="col-span-2 bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-800 block mb-2">Task Progress</span>
                        <div className="flex items-center gap-3">
                          {/* Donut */}
                          <div className="relative w-14 h-14 flex-shrink-0">
                            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="63 37" strokeLinecap="round" />
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="16 84" strokeDashoffset="-63" strokeLinecap="round" />
                              <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="9 91" strokeDashoffset="-79" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-[11px] font-black text-slate-900">156</span>
                              <span className="text-[7px] text-slate-400">Total</span>
                            </div>
                          </div>
                          {/* Legend */}
                          <div className="flex flex-col gap-1">
                            {[
                              { l: 'Completed', p: '72%', c: 'bg-green-500' },
                              { l: 'In Progress', p: '18%', c: 'bg-indigo-500' },
                              { l: 'To Do', p: '10%', c: 'bg-slate-200' },
                            ].map((t, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <div className={`w-2 h-2 rounded-full ${t.c}`} />
                                <span className="text-[8px] text-slate-500">{t.l}</span>
                                <span className="text-[8px] font-bold text-slate-700 ml-auto">{t.p}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating Cards - Outside main dashboard for the 'floating' effect */}
                {/* Team Workload */}
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    y: [0, -10, 0],
                  }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.5 },
                    x: { duration: 0.5, delay: 0.5 },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' }
                  }}
                  className="absolute -bottom-10 -left-10 bg-white border border-slate-100 rounded-2xl p-4 shadow-2xl shadow-indigo-100/50 max-w-[220px] z-20 cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-slate-800 block mb-3">Team Workload</span>
                  <div className="flex items-center gap-1 mb-4">
                    {[11, 12, 13].map((u) => (
                      <img key={u} src={`https://i.pravatar.cc/24?u=${u}`} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0 object-cover shadow-sm" />
                    ))}
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center -ml-1 shadow-lg shadow-indigo-100">+6</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '76%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 flex-shrink-0">76%</span>
                  </div>
                </motion.div>

                {/* Recent Approval */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    y: [0, 10, 0],
                  }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.6 },
                    x: { duration: 0.5, delay: 0.6 },
                    y: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
                  }}
                  className="absolute -bottom-16 -right-6 bg-white border border-slate-100 rounded-2xl p-4 shadow-2xl shadow-indigo-100/50 max-w-[240px] z-20 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-slate-800">Recent Approval</span>
                    <MoreVertical className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-800 truncate">Creative Brief v2.0</p>
                      <p className="text-[10px] text-slate-400 font-medium">Approved by Ayesha Khan</p>
                    </div>
                    <span className="text-[9px] text-slate-300 flex-shrink-0 font-bold">2m ago</span>
                  </div>
                </motion.div>
              </div>

              {/* Floating AI Insight Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0],
                  x: [0, 5, 0]
                }}
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.7 },
                  scale: { duration: 0.5, delay: 0.7 },
                  y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
                  x: { repeat: Infinity, duration: 7, ease: 'easeInOut' }
                }}
                className="absolute -top-5 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-3 max-w-[180px] z-20 cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-indigo-600 text-xs">✦</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">AI Insight</p>
                    <p className="text-[10px] font-bold text-slate-800 leading-snug">2 projects are at risk of delay this week.</p>
                    <a href="#" className="text-[9px] text-indigo-600 font-semibold mt-1 flex items-center gap-0.5">View Details →</a>
                  </div>
                </div>
              </motion.div>

              {/* Bottom decorative circle */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-indigo-200/30 blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Hero;
