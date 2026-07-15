'use client';

import { motion } from 'framer-motion';
import { Layers, Rocket, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Platform Strategy',
    description: 'Roadmaps and product strategy tailored for gig-economy marketplaces.',
    icon: Layers
  },
  {
    title: 'Product Development',
    description: 'Fast, iterative builds for customer portals, booking flows, and dashboards.',
    icon: Rocket
  },
  {
    title: 'Security & Reliability',
    description: 'Performance tuning and secure implementation patterns for production scale.',
    icon: ShieldCheck
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Services</h2>
          <p className="mt-3 max-w-2xl text-slate-400">Comprehensive support for launching and scaling service-first digital products.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="card group p-6 transition hover:-translate-y-1 hover:border-indigo-400/40"
              >
                <Icon className="mb-4 text-indigo-300" />
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
