import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 UstozHub EdTech SaaS Engine. Barcha huquqlar himoyalangan.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-slate-900 cursor-pointer">Maxfiylik Siyosati</span>
          <span className="hover:text-slate-900 cursor-pointer">API Hujjatlar</span>
          <span className="hover:text-slate-900 cursor-pointer">Qo'llab-quvvatlash</span>
        </div>
      </div>
    </footer>
  );
};