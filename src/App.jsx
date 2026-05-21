import { useMemo, useState } from 'react';
import { Bell, Download, Plus } from 'lucide-react';
import Button from './components/common/Button.jsx';
import LayoutWrapper from './components/layout/LayoutWrapper.jsx';
import Tabs from './components/dashboard/Tabs.jsx';
import AnalyticsCard from './components/dashboard/AnalyticsCard.jsx';
import DataTable from './components/dashboard/DataTable.jsx';
import ActivityPanel from './components/dashboard/ActivityPanel.jsx';
import ProjectModal from './components/dashboard/ProjectModal.jsx';
import { metrics, projects } from './utils/data.js';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = `${project.name} ${project.owner}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <LayoutWrapper query={query} onQueryChange={setQuery}>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
              Figma conversion
            </p>
            <h1 className="mt-2 font-heading text-3xl font-bold text-ink-900 sm:text-4xl">
              Product analytics dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-500 sm:text-base">
              A responsive implementation with reusable components, tokenized styling, and polished interaction states.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" icon={Bell} ariaLabel="Open notifications" />
            <Button variant="secondary" icon={Download}>
              Export
            </Button>
            <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
              New project
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <AnalyticsCard key={metric.title} {...metric} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-figma-lg border border-ink-200 bg-white p-4 shadow-figma-sm sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="h-10 rounded-figma-md border border-ink-200 bg-white px-3 text-sm font-medium text-ink-700"
                aria-label="Filter projects by status"
              >
                <option value="all">All statuses</option>
                <option value="healthy">Healthy</option>
                <option value="at-risk">At risk</option>
                <option value="paused">Paused</option>
              </select>
            </div>

            <DataTable projects={filteredProjects} activeTab={activeTab} />
          </div>

          <ActivityPanel />
        </div>
      </section>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </LayoutWrapper>
  );
}
