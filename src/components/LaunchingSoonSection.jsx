import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, User, Mail, Building2, Bell, ShieldCheck,
  Calendar, Gift, CheckCircle2, Sparkles, Clock,
  ClipboardList, Users, BarChart3, FileText, Loader2
} from 'lucide-react';
import { GOOGLE_SHEETS_URL } from '../config/sheets';

const benefits = [
  {
    icon: Calendar,
    color: 'text-indigo-600 bg-indigo-50',
    title: 'Early Access',
    desc: 'Be the first to explore Worksensy.',
  },
  {
    icon: Bell,
    color: 'text-purple-600 bg-purple-50',
    title: 'Product Updates',
    desc: 'Get notified about new features.',
  },
  {
    icon: Gift,
    color: 'text-green-600 bg-green-50',
    title: 'Exclusive Offers',
    desc: 'Special deals only for early users.',
  },
  {
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50',
    title: 'Built for You',
    desc: 'Help shape the product.',
  },
];

const teamSizes = ['Just me', '2–10', '11–50', '51–200', '200+'];

const InputField = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-50 transition-all">
    <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
    {children}
  </div>
);

const LaunchingSoonSection = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', teamSize: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // no-cors returns opaque response — we assume success if no network error
      fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          teamSize: form.teamSize,
          source: 'LaunchingSoon',
          timestamp: new Date().toISOString()
        }),
      });
      // With no-cors, we can't read the response — treat submission as success
      setSubmitted(true);
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <Rocket className="w-3 h-3" />
            Launching Soon
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
            Something powerful<br />
            is on <span className="text-indigo-600">the way</span>
          </h2>
          <p className="text-slate-500 text-[16px] max-w-lg mx-auto leading-relaxed">
            We're putting the finishing touches on Worksensy to bring you
            the best way to manage operations, tasks, and teams.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-slate-100/60 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] mb-6"
        >
          {/* LEFT: Form */}
          <div className="p-6 md:p-10 lg:border-r border-slate-100">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold px-3 py-1 rounded-full mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Be the first to know
            </div>

            <h3 className="text-[24px] font-black text-slate-900 leading-tight mb-2">
              Worksensy is<br />
              launching <span className="text-indigo-600">soon</span>
            </h3>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-6">
              Join the waitlist and get early access,<br />
              product updates, and exclusive offers.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <p className="text-[16px] font-black text-slate-900 mb-1">You're on the list! 🎉</p>
                  <p className="text-[12px] text-slate-500">We'll notify you as soon as we launch.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                  initial={{ opacity: 1 }}
                >
                  {/* Name */}
                  <InputField icon={User}>
                    <input
                      type="text"
                      placeholder="Full name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="flex-1 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
                      required
                    />
                  </InputField>

                  {/* Email */}
                  <InputField icon={Mail}>
                    <input
                      type="email"
                      placeholder="Work email *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="flex-1 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
                      required
                    />
                  </InputField>

                  {/* Company */}
                  <InputField icon={Building2}>
                    <input
                      type="text"
                      placeholder="Company name (optional)"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="flex-1 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </InputField>

                  {/* Team size */}
                  <InputField icon={Users}>
                    <select
                      value={form.teamSize}
                      onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                      className="flex-1 text-[13px] text-slate-800 outline-none bg-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Team size (optional)</option>
                      {teamSizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </InputField>

                  {error && (
                    <p className="text-red-500 text-[12px] text-center">{error}</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 text-[14px] font-bold shadow-lg shadow-indigo-200 disabled:opacity-70"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <><Bell className="w-4 h-4" /> Notify Me</>
                    )}
                  </motion.button>

                  <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3 h-3" />
                    We respect your privacy. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Premium Visual Panel */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-slate-50 overflow-hidden min-h-[460px] items-center justify-center p-8">

            {/* Background dot grid */}
            <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

            {/* Glow blobs */}
            <div className="absolute top-8 left-8 w-40 h-40 bg-indigo-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-8 right-8 w-36 h-36 bg-purple-300/20 rounded-full blur-3xl" />

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              animate={{ y: [0, -6, 0] }}
              className="absolute top-10 left-8 bg-white border border-indigo-100 rounded-2xl px-4 py-2.5 shadow-lg shadow-indigo-100/60 flex items-center gap-2.5 z-20"
            >
              <div className="flex -space-x-1.5">
                {['bg-indigo-400', 'bg-purple-400', 'bg-pink-400'].map((c, i) => (
                  <div key={i} className={`w-6 h-6 ${c} rounded-full border-2 border-white flex items-center justify-center text-white text-[8px] font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-900 leading-none">1,200+ joined</p>
                <p className="text-[9px] text-slate-400 mt-0.5">on the waitlist</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 right-8 bg-white border border-green-100 rounded-2xl px-4 py-2.5 shadow-lg shadow-green-100/60 flex items-center gap-2.5 z-20"
            >
              <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-900 leading-none">Free Early Access</p>
                <p className="text-[9px] text-slate-400 mt-0.5">for first 500 users</p>
              </div>
            </motion.div>

            {/* Feature chips — top right */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="absolute top-10 right-8 flex flex-col gap-1.5 z-20"
            >
              {['Tasks & Projects', 'Team Management', 'Live Analytics'].map((tag, i) => (
                <div key={i} className="bg-white/90 backdrop-blur-sm border border-slate-100 text-slate-600 text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">
                  ✦ {tag}
                </div>
              ))}
            </motion.div>

            {/* Center Launch Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 220, damping: 25 }}
              className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_24px_64px_rgba(99,102,241,0.22)] border border-indigo-100/60 px-10 py-9 text-center"
            >
              {/* Animated ring around logo */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20 animate-pulse" />
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-100 shadow-xl shadow-indigo-200/60">
                  <img src="/worksensy.png" alt="Worksensy Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              <p className="text-[22px] font-black text-slate-900 mb-1 tracking-tight">Worksensy</p>
              <p className="text-[12px] text-slate-500 leading-relaxed mb-1">Operations OS for Modern Teams</p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                ))}
                <span className="text-[10px] text-slate-400 ml-1">4.9 / 5</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-bold px-5 py-2.5 rounded-full shadow-lg shadow-indigo-300/50">
                <Sparkles className="w-3 h-3" />
                Launching Soon
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${b.color}`}>
                <b.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[13px] font-black text-slate-900 leading-none mb-1">{b.title}</p>
                <p className="text-[11px] text-slate-500 leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default LaunchingSoonSection;
