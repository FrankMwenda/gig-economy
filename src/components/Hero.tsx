import { BusinessPreset } from '../types';

type Props = {
  preset: BusinessPreset;
};

export function Hero({ preset }: Props) {
  return (
    <section className="container-wrap pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="rounded-3xl bg-white p-8 sm:p-12 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{preset.label} Template</p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          {preset.businessName}
        </h1>
        <p className="mt-4 text-lg text-slate-700">{preset.tagline}</p>
        <p className="mt-4 max-w-2xl text-slate-600">{preset.heroDescription}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-slate-800">
            Request a Quote
          </button>
          <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-700 font-semibold hover:bg-slate-50">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
