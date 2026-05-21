const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'history', label: 'History' },
];

export default function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="flex min-w-0 items-center overflow-x-auto border-b border-ink-200" role="tablist">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={[
              'h-11 whitespace-nowrap border-b-2 px-4 text-sm font-semibold transition-colors',
              isActive
                ? 'border-brand-500 text-brand-600'
                : 'border-transparent text-ink-500 hover:text-ink-900',
            ].join(' ')}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
