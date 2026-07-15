type Props = {
  options: Array<{ id: string; label: string }>;
  value: string;
  onChange: (id: string) => void;
};

export function PresetSwitcher({ options, value, onChange }: Props) {
  return (
    <div className="inline-flex flex-wrap gap-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
      {options.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
