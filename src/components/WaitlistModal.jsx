import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Building2, Users, Send, ShieldCheck, Bell, Sparkles, Gift, Heart, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import { GOOGLE_SHEETS_URL } from '../config/sheets';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', teamSize: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          teamSize: form.teamSize,
          source: 'WaitlistModal',
          timestamp: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      // Auto-close popup after 1.5 seconds
      setTimeout(() => handleClose(), 1500);

    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', teamSize: '' });
      setSubmitted(false);
      setError('');
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-[6px]"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.8 }}
          className="relative w-full max-w-3xl bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT SIDE: Form */}
          <div className="flex-[1.1] p-6 sm:p-10">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-indigo-100 mb-6">
              <img src="/worksensy.png" alt="Logo" className="w-full h-full object-cover" />
            </div>

            <h2 className="text-2xl font-black text-slate-900 mb-1.5 tracking-tight">Join the waitlist</h2>
            <p className="text-[13px] text-slate-500 mb-6 leading-relaxed">
              Be the first to know when Worksensy launches.<br />
              Get early access, updates, and exclusive offers.
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
                  className="space-y-3.5"
                  initial={{ opacity: 1 }}
                >
                  {/* Full Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 outline-none focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50/50 transition-all text-sm text-slate-900 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="Work email *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 outline-none focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50/50 transition-all text-sm text-slate-900 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Company name (optional)"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-4 outline-none focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50/50 transition-all text-sm text-slate-900 font-medium placeholder:text-slate-400"
                    />
                  </div>

                  {/* Team Size */}
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      value={form.teamSize}
                      onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-11 pr-10 outline-none focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50/50 transition-all text-sm font-medium appearance-none cursor-pointer"
                      style={{ color: form.teamSize ? '#0f172a' : '#94a3b8' }}
                    >
                      <option value="">Team size (optional)</option>
                      <option value="1-10">1–10 members</option>
                      <option value="11-50">11–50 members</option>
                      <option value="51-200">51–200 members</option>
                      <option value="201+">201+ members</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-[12px] text-center">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 group transition-all active:scale-[0.98] mt-2"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <><Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Join the Waitlist</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>We respect your privacy. No spam, ever.</span>
            </div>
          </div>

          {/* RIGHT SIDE: Benefits */}
          <div className="hidden md:flex flex-1 bg-slate-50 p-10 flex-col border-l border-slate-100">
            {/* Illustration Area */}
            <div className="relative flex-1 flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-indigo-100/50 rounded-full blur-[60px] opacity-60" />
              <div className="relative bg-white p-6 rounded-[32px] shadow-2xl shadow-indigo-100/50 border border-white">
                <div className="w-12 h-12 rounded-2xl overflow-hidden">
                  <img src="/worksensy.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-indigo-500">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center text-indigo-500">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </div>

            <h3 className="text-lg font-black text-slate-900 mb-6">What you'll get</h3>

            <div className="space-y-5">
              {[
                { icon: Bell, title: 'Early Access', desc: 'Be the first to explore Worksensy.', color: 'text-indigo-600 bg-indigo-50' },
                { icon: Gift, title: 'Product Updates', desc: 'Get notified about features.', color: 'text-purple-600 bg-purple-50' },
                { icon: Heart, title: 'Exclusive Offers', desc: 'Special offers for early users.', color: 'text-pink-600 bg-pink-50' },
                { icon: ShieldCheck, title: 'Built for You', desc: 'Help shape our product.', color: 'text-green-600 bg-green-50' },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${benefit.color}`}>
                    <benefit.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] leading-none mb-1">{benefit.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug max-w-[150px]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WaitlistModal;
