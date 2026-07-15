export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gig Economy. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#services" className="transition hover:text-indigo-300">Services</a>
          <a href="#portfolio" className="transition hover:text-indigo-300">Portfolio</a>
          <a href="#contact" className="transition hover:text-indigo-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
