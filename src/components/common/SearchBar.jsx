import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <label className="relative block w-full max-w-md">
      <span className="sr-only">Search projects</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search projects or owners"
        className="h-11 w-full rounded-figma-md border border-ink-200 bg-white pl-10 pr-4 text-sm text-ink-800 shadow-sm placeholder:text-ink-400"
      />
    </label>
  );
}
