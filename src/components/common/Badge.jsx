const variants = {
  healthy: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'at-risk': 'bg-amber-50 text-amber-700 ring-amber-200',
  paused: 'bg-slate-100 text-slate-600 ring-slate-200',
  positive: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  negative: 'bg-rose-50 text-rose-700 ring-rose-200',
};

const labels = {
  healthy: 'Healthy',
  'at-risk': 'At risk',
  paused: 'Paused',
};

export default function Badge({ value, children }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        variants[value] || variants.paused,
      ].join(' ')}
    >
      {children || labels[value] || value}
    </span>
  );
}
