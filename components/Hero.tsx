'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="bg-hero-gradient pb-24 pt-24 sm:pt-28">
      <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200">
            Built for business growth
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            We help gig-economy brands turn ideas into revenue-driving digital experiences.
          </h1>
          <p className="max-w-xl text-slate-300">
            From service marketplaces to operations dashboards, we design and deliver modern web products that make client acquisition and retention easier.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              View Our Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-300 hover:text-indigo-200">
              Book a Discovery Call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="card p-6"
        >
          <p className="text-sm text-slate-300">Client Results Snapshot</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-bold text-indigo-300">120+</p>
              <p className="text-xs text-slate-400">Projects delivered</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-bold text-indigo-300">98%</p>
              <p className="text-xs text-slate-400">Client satisfaction</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="text-2xl font-bold text-indigo-300">42%</p>
              <p className="text-xs text-slate-400">Avg. lead growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
