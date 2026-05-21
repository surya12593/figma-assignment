import { CheckCircle2, CircleAlert, Clock3 } from 'lucide-react';

const activities = [
  {
    title: 'Dashboard polish approved',
    time: '12 min ago',
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Mobile navigation needs QA',
    time: '1 hr ago',
    icon: CircleAlert,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    title: 'Export assets queued',
    time: 'Yesterday',
    icon: Clock3,
    color: 'text-brand-600 bg-brand-50',
  },
];

export default function ActivityPanel() {
  return (
    <aside className="rounded-figma-lg border border-ink-200 bg-white p-5 shadow-figma-sm">
      <h2 className="font-heading text-lg font-bold text-ink-900">Recent activity</h2>
      <div className="mt-5 space-y-4">
        {activities.map(({ title, time, icon: Icon, color }) => (
          <div key={title} className="flex gap-3">
            <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-figma-md ${color}`}>
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{title}</p>
              <p className="mt-1 text-xs font-medium text-ink-500">{time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-figma-md bg-ink-900 p-4 text-white">
        <p className="text-sm font-semibold">Responsive QA</p>
        <p className="mt-2 text-sm leading-6 text-ink-200">
          Verify desktop, tablet, and mobile widths before submitting the portfolio link.
        </p>
      </div>
    </aside>
  );
}
