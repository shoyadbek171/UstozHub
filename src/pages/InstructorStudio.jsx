import React from 'react';

export const InstructorStudio = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">Jami Daromad (Sof 85%)</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">4,250,000 UZS</p>
          <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">💵 To'g'ridan-to'g'ri karta balansi</span>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">Jami O'quvchilar</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">142 nafar</p>
          <span className="text-xs text-indigo-600 font-semibold mt-2 inline-block">👥 Faol tinglovchilar</span>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">Faol Kurslarim</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">2 ta</p>
          <span className="text-xs text-slate-500 mt-2 inline-block">📚 Nashr etilgan</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <span>➕</span> Yangi Kurs Yaratish
          </h3>
          <p className="text-xs text-slate-500">Moderatsiyaga yuborish uchun ma'lumotlarni kiriting</p>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-600 font-medium block mb-1">Kurs Nomi</label>
              <input type="text" placeholder="Masalan: Flutter Mobile Dasturlash" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">Kategoriya</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none">
                  <option>Dasturlash</option>
                  <option>Dizayn</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">Narxi (UZS)</label>
                <input type="number" placeholder="800000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-600 font-medium block mb-1">Tavsif</label>
              <textarea rows="2" placeholder="Kurs haqida qisqacha..." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none"></textarea>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2.5 rounded-xl transition">
              Moderatsiyaga Yuborish
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Mening Kurslarim va Holatlar</h3>
          <div className="space-y-3">
            {[
              { title: "Full-Stack Web Dasturlash (React & Node.js)", price: "1,200,000 UZS", status: "Nashr etilgan", color: "bg-emerald-50 text-emerald-600" },
              { title: "UI/UX Dizayn: Figma va Prototiplash Mastery", price: "950,000 UZS", status: "Nashr etilgan", color: "bg-emerald-50 text-emerald-600" },
              { title: "Python bilan Ma'lumotlar Tahlili va AI", price: "1,500,000 UZS", status: "Tekshiruvda", color: "bg-amber-50 text-amber-600" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="font-bold text-slate-900">{item.title}</span>
                  <span className="text-slate-400 block mt-0.5">{item.price}</span>
                </div>
                <span className={`px-3 py-1 rounded-full font-semibold ${item.color}`}>
                  {item.status === 'Nashr etilgan' ? '✓ ' : '⏳ '}{item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};