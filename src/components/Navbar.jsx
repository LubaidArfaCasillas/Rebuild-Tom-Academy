import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Tentang');

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tahapan', href: '#tahapan' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/logo.svg"
            alt="TOM Academy"
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-slate-950 font-semibold' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kontak"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 active:scale-98 transition shadow-xs"
          >
            Daftar Sekarang
          </a>
          <button
            type="button"
            aria-label="User Account"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                activeTab === link.name ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 rounded-xl bg-slate-950 text-white font-medium text-sm"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
