import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, Rocket, ShieldCheck } from 'lucide-react';

const STATS = [
  { label: 'Active teams', val: '10K+', icon: Users },
  { label: 'Tasks completed', val: '2M+', icon: CheckCircle2 },
  { label: 'Customer satisfaction', val: '98%', icon: Rocket },
  { label: 'Uptime guarantee', val: '99.9%', icon: ShieldCheck },
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-slate-100 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <stat.icon size={20} />
              </div>
              <h4 className="text-3xl font-heading mb-1">{stat.val}</h4>
              <p className="text-sm text-slate-500 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
