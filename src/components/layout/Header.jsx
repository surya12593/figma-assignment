import { Menu, Settings } from 'lucide-react';
import Button from '../common/Button.jsx';
import SearchBar from '../common/SearchBar.jsx';

export default function Header({ query, onQueryChange, onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          icon={Menu}
          className="lg:hidden"
          onClick={onMenuClick}
          ariaLabel="Open navigation"
        />
        <SearchBar value={query} onChange={onQueryChange} />
        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary" icon={Settings} ariaLabel="Open settings" />
          <div className="hidden items-center gap-3 rounded-figma-md border border-ink-200 px-3 py-2 sm:flex">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
              AR
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">Avery Reed</p>
              <p className="text-xs text-ink-500">Product lead</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
