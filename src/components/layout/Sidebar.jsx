import { BarChart3, FolderKanban, LayoutDashboard, MessageSquare, Users, X } from 'lucide-react';
import logo from '../../assets/logo.svg';
import Button from '../common/Button.jsx';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Team', icon: Users },
  { label: 'Messages', icon: MessageSquare },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={[
          'fixed inset-0 z-30 bg-ink-900/40 transition-opacity lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-ink-200 bg-white px-4 py-5 transition-transform lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center gap-3 px-2">
          <img src={logo} alt="Figma assignment logo" className="h-10 w-10" />
          <div>
            <p className="font-heading text-lg font-bold text-ink-900">FigmaFlow</p>
            <p className="text-xs font-medium text-ink-500">Design to React</p>
          </div>
          <Button
            variant="ghost"
            icon={X}
            className="ml-auto lg:hidden"
            onClick={onClose}
            ariaLabel="Close navigation"
          />
        </div>

        <nav className="mt-8 space-y-1" aria-label="Primary navigation">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={[
                'flex h-11 items-center gap-3 rounded-figma-md px-3 text-sm font-semibold transition-colors',
                active
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
              ].join(' ')}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-auto rounded-figma-lg border border-ink-200 bg-ink-50 p-4">
          <p className="text-sm font-semibold text-ink-900">Design tokens synced</p>
          <p className="mt-2 text-sm leading-6 text-ink-500">
            Colors, typography, spacing, and radii are mapped in Tailwind for consistent implementation.
          </p>
        </div>
      </aside>
    </>
  );
}
