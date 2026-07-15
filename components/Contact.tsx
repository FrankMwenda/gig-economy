'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-white">Let&apos;s build your next platform.</h2>
          <p className="text-slate-400">Share your goals and we&apos;ll respond with a clear plan, timeline, and budget range.</p>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-2"><Mail size={16} className="text-indigo-300" /> hello@gigeconomy.dev</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-indigo-300" /> +254 700 000 000</p>
            <p className="flex items-center gap-2"><MapPin size={16} className="text-indigo-300" /> Nairobi, Kenya</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="card space-y-4 p-6"
        >
          <label className="block text-sm text-slate-300">
            Name
            <input required className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-400" />
          </label>
          <label className="block text-sm text-slate-300">
            Email
            <input required type="email" className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-400" />
          </label>
          <label className="block text-sm text-slate-300">
            Project Details
            <textarea required rows={4} className="mt-2 w-full rounded-lg border border-white/15 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-400" />
          </label>
          <button type="submit" className="w-full rounded-full bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
            Send Message
          </button>
          {submitted && <p className="text-sm text-emerald-300">Thanks! We&apos;ll get back to you shortly.</p>}
        </motion.form>
      </div>
    </section>
  );
}
