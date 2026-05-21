import Badge from '../common/Badge.jsx';
import { formatCurrency } from '../../utils/formatters.js';

const tabCopy = {
  overview: 'Current delivery snapshot',
  analytics: 'Performance by project',
  history: 'Recent project history',
};

export default function DataTable({ projects, activeTab }) {
  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-ink-900">{tabCopy[activeTab]}</h2>
        <p className="text-sm font-medium text-ink-500">{projects.length} projects</p>
      </div>

      <div className="overflow-hidden rounded-figma-md border border-ink-200">
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full border-collapse bg-white text-left">
            <thead className="bg-ink-50">
              <tr>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-500">Project</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-500">Owner</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-500">Budget</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-500">Progress</th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {projects.map((project) => (
                <tr key={project.id} className="transition-colors hover:bg-ink-50/70">
                  <td className="px-4 py-4">
                    <p className="font-semibold text-ink-900">{project.name}</p>
                    <p className="mt-1 text-sm text-ink-500">{project.category}</p>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-ink-700">{project.owner}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-ink-900">
                    {formatCurrency(project.budget)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-28 overflow-hidden rounded-full bg-ink-100">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-ink-700">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge value={project.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {projects.length === 0 && (
          <div className="bg-white px-4 py-12 text-center">
            <p className="font-semibold text-ink-900">No matching projects</p>
            <p className="mt-2 text-sm text-ink-500">Try adjusting the search term or status filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
