import Badge from '../common/Badge.jsx';

export default function AnalyticsCard({ title, value, change, changeType, icon: Icon }) {
  const isPositive = changeType === 'positive';

  return (
    <article className="rounded-figma-lg border border-ink-200 bg-white p-5 shadow-figma-sm transition-shadow hover:shadow-figma">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink-500">{title}</p>
        <div className="grid h-10 w-10 place-items-center rounded-figma-md bg-brand-50 text-brand-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5">
        <p className="font-heading text-3xl font-bold text-ink-900">{value}</p>
        <div className="mt-3 flex items-center gap-2">
          <Badge value={isPositive ? 'positive' : 'negative'}>
            {isPositive ? '+' : '-'}
            {Math.abs(change)}%
          </Badge>
          <span className="text-xs font-medium text-ink-400">vs last month</span>
        </div>
      </div>
    </article>
  );
}
