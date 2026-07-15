'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Urban Task Marketplace',
    summary: 'Redesigned booking flow increased completed orders by 37% in 90 days.',
    tag: 'Marketplace UX'
  },
  {
    title: 'Provider Success Dashboard',
    summary: 'Introduced analytics suite helping workers improve conversion and retention.',
    tag: 'Data Product'
  },
  {
    title: 'On-Demand Services Launch',
    summary: 'End-to-end launch strategy for a multi-city service platform with rapid adoption.',
    tag: 'Go-to-Market'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-900/40 py-20">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <p className="mt-3 max-w-2xl text-slate-400">Selected case studies highlighting measurable outcomes for clients.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="card p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-300">{project.tag}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{project.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
