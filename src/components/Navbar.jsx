import React from 'react';

export const Navbar = ({ currentMode, setCurrentMode, search, setSearch, onOpenAuth, user, onLogout }) => {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentMode('marketplace')}>
            <span className="bg-indigo-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">U</span>
            <span className="text-lg font-bold tracking-tight">UstozHub</span>
          </div>
          <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700 hidden sm:inline">v2.4</span>
        </div>

        <div className="flex-1 max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Kurs yoki ustozni qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition shadow-inner"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
            <button onClick={() => setCurrentMode('marketplace')} className={`px-3 py-1.5 rounded-lg font-medium transition ${currentMode === 'marketplace' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}>Marketplace</button>
            <button onClick={() => setCurrentMode('talaba')} className={`px-3 py-1.5 rounded-lg font-medium transition ${currentMode === 'talaba' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}>Talaba</button>
            <button onClick={() => setCurrentMode('studio')} className={`px-3 py-1.5 rounded-lg font-medium transition ${currentMode === 'studio' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}>Studio</button>
            <button onClick={() => setCurrentMode('erp')} className={`px-3 py-1.5 rounded-lg font-medium transition ${currentMode === 'erp' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}>ERP</button>
            <button onClick={() => setCurrentMode('admin')} className={`px-3 py-1.5 rounded-lg font-medium transition ${currentMode === 'admin' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}>Admin</button>
          </div>

          {user ? (
            <div className="flex items-center gap-3 border-l border-slate-700 pl-3">
              <span className="text-xs font-semibold text-slate-200 hidden sm:inline">{user.name}</span>
              <button 
                onClick={onLogout}
                className="text-xs bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white px-3 py-1.5 rounded-xl transition"
              >
                Chiqish
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 border-l border-slate-700 pl-3">
              <button 
                onClick={() => onOpenAuth('login')}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800 transition"
              >
                Kirish
              </button>
              <button 
                onClick={() => onOpenAuth('register')}
                className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-xl transition shadow"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};