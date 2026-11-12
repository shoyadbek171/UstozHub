import React, { useState } from 'react';

export const StudentPanel = () => {
  const [isLessonOpen, setIsLessonOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            SO
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">O'quvchi Kabineti</h2>
            <p className="text-xs text-slate-500">Shoyadbek Odilov (ID: ST-9021)</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl text-xs font-semibold">
          <span className="px-4 py-2 bg-white rounded-xl shadow-sm text-indigo-600">Mening Kurslarim</span>
          <span className="px-4 py-2 text-slate-600 hover:text-slate-900 cursor-pointer">Sertifikatlar</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Aktiv Kurslarim (1)</h3>
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 hover:border-slate-300 transition">
          <div className="flex items-center gap-5 w-full lg:w-auto">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" 
              alt="Course" 
              className="w-28 h-20 rounded-2xl object-cover shadow-sm" 
            />
            <div>
              <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2.5 py-0.5 rounded-md">Dasturlash</span>
              <h4 className="font-bold text-slate-900 text-base mt-1">Full-Stack Web Dasturlash (React & Node.js)</h4>
              <p className="text-xs text-slate-500 mt-0.5">Ustoz: Anvar Toshmatov</p>
            </div>
          </div>

          <div className="w-full lg:w-64 space-y-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-500">O'zlashtirish darajasi</span>
              <span className="text-indigo-600">50%</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden p-0.5">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full rounded-full w-1/2"></div>
            </div>
          </div>

          <button 
            onClick={() => setIsLessonOpen(true)}
            className="w-full lg:w-auto bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold px-6 py-3.5 rounded-2xl transition shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs group-hover:scale-110 transition">▶</span>
            Darsni Davom Ettirish
          </button>
        </div>
      </div>

      {/* Interaktiv Dars Modali */}
      {isLessonOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-slate-900 text-base">Modul 3: React Router va Hooks</h3>
              <button onClick={() => setIsLessonOpen(false)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center text-white text-sm relative overflow-hidden">
              <div className="text-center space-y-2">
                <span className="text-4xl">▶</span>
                <p className="text-xs text-slate-400">Video darslik ijro etilmoqda (HLS Stream)</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-slate-500">Keyingi dars: Tailwind bilan Responsive dizayn</span>
              <button onClick={() => setIsLessonOpen(false)} className="bg-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition">
                Darsni yakunlash ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};