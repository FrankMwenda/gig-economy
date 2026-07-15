'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-wide text-indigo-300">
          Gig Economy
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-indigo-300">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400">
            Start Project
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-900 md:hidden">
          <div className="section-container flex flex-col gap-3 py-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
