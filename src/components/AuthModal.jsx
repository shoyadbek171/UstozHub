import React, { useState } from 'react';

export const AuthModal = ({ isOpen, onClose, initialTab = 'login', onSuccess }) => {
  const [tab, setTab] = useState(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Real foydalanuvchi ma'lumotini simulyatsiya qilib uzatamiz
    onSuccess({
      name: tab === 'register' ? name : (email.split('@')[0] || 'Foydalanuvchi'),
      email: email || 'user@ustozhub.uz',
      role: 'student'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-slate-100 relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${tab === 'login' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Kirish
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition ${tab === 'register' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Ro'yxatdan O'tish
          </button>
        </div>

        {tab === 'login' ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Email yoki Telefon</label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ustozhub.uz" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Parol</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition" 
                required 
              />
            </div>
            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-xl transition shadow-md">
              Tizimga Kirish
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Ism va Familiya</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Shoyadbek Odilov" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="shoyadbek@example.com" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Parol Yaratish</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-600 transition" 
                required 
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-3 rounded-xl transition shadow-md">
              Hisob Yaratish (Bepul)
            </button>
          </form>
        )}
      </div>
    </div>
  );
};  