import { X } from 'lucide-react';
import Button from '../common/Button.jsx';

export default function ProjectModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink-900/50 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-figma-lg bg-white p-5 shadow-figma">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-heading text-xl font-bold text-ink-900">Create project</h2>
            <p className="mt-1 text-sm text-ink-500">Add a new dashboard item for tracking.</p>
          </div>
          <Button variant="ghost" icon={X} onClick={onClose} ariaLabel="Close modal" />
        </div>

        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">Project name</span>
            <input
              className="mt-2 h-11 w-full rounded-figma-md border border-ink-200 px-3 text-sm"
              placeholder="Mobile onboarding refresh"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-ink-700">Owner</span>
            <input
              className="mt-2 h-11 w-full rounded-figma-md border border-ink-200 px-3 text-sm"
              placeholder="Team member"
            />
          </label>
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="button" onClick={onClose}>
              Save project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
