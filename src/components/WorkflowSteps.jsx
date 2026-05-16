import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Create your workspace',
    desc: 'Sign up in seconds and set up your workspace for your team.',
  },
  {
    num: '02',
    title: 'Invite your team',
    desc: 'Bring your team together and define roles and permissions.',
  },
  {
    num: '03',
    title: 'Set up your workflow',
    desc: 'Customize projects, tasks, and approvals to match your process.',
  },
  {
    num: '04',
    title: 'Track and optimize',
    desc: 'Monitor progress, gain insights and continuously improve.',
  },
];

const WorkflowSteps = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 font-heading">
            Get started in minutes and <br />
            <span className="text-gradient">transform</span> operations
          </h2>
          <p className="text-slate-500 font-sans">
            Follow these simple steps to streamline your operations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-slate-100 mb-6 font-heading">{step.num}</div>
              <h4 className="text-lg font-bold mb-3 font-heading">{step.title}</h4>
              <p className="text-sm text-slate-500 font-sans leading-relaxed">{step.desc}</p>
              {/* Connector line between steps */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-slate-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
