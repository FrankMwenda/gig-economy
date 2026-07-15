export function Contact() {
  return (
    <section id="contact" className="container-wrap py-12 pb-20">
      <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
        <h2 className="section-title">Request a Free Quote</h2>
        <p className="section-subtitle">This form is frontend-ready and can be connected to email, CRM, or backend API.</p>

        <form className="mt-8 grid gap-4 sm:grid-cols-2">
          <input className="rounded-lg border border-slate-300 px-3 py-2.5" placeholder="Full name" />
          <input className="rounded-lg border border-slate-300 px-3 py-2.5" placeholder="Phone number" />
          <input className="rounded-lg border border-slate-300 px-3 py-2.5 sm:col-span-2" placeholder="Email" />
          <input className="rounded-lg border border-slate-300 px-3 py-2.5 sm:col-span-2" placeholder="Service needed" />
          <textarea className="rounded-lg border border-slate-300 px-3 py-2.5 sm:col-span-2 min-h-28" placeholder="Project details" />
          <button type="button" className="sm:col-span-2 rounded-lg bg-slate-900 px-4 py-3 text-white font-semibold hover:bg-slate-800">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
