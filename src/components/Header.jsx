import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

export default function Header() {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    // In a real app, this would navigate to a search results page
    alert(`Mencari: ${query}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button aria-label="Menu" className="p-2 rounded-md hover:bg-neutral-100 lg:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="flex items-baseline gap-2">
              <span className="inline-block h-6 w-6 bg-red-600 rounded-sm" />
              <span className="text-xl font-extrabold tracking-tight">ilmu baru</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <a href="#terkini" className="hover:text-red-600 transition-colors">Terkini</a>
            <a href="#nasional" className="hover:text-red-600 transition-colors">Nasional</a>
            <a href="#internasional" className="hover:text-red-600 transition-colors">Internasional</a>
            <a href="#teknologi" className="hover:text-red-600 transition-colors">Teknologi</a>
            <a href="#olahraga" className="hover:text-red-600 transition-colors">Olahraga</a>
          </nav>

          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="search"
                placeholder="Cari berita..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 pr-3 py-2 w-44 sm:w-64 md:w-72 rounded-md border border-neutral-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none text-sm"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-orange-500" />
    </header>
  );
}
