import React from 'react';

export const AcademyErp = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white font-extrabold text-xl flex items-center justify-center">
            NT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">Najot Ta'lim Akademiya</h2>
              <span className="bg-indigo-50 text-indigo-600 text-[10px] font-semibold px-2 py-0.5 rounded">Multi-Tenant Verified</span>
            </div>
            <p className="text-xs text-slate-500">Subdomen: <span className="text-indigo-600 font-medium">najot-talim.ustozhub.uz</span></p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition">
            Domen Sozlamalari
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition">
            + Ustoz Taklif Qilish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Moliya va Daromad Taqsimoti</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-500">Jami Brutto Tushum:</span>
              <span className="font-bold text-slate-900">12,800,000 UZS</span>
            </div>
            <div className="flex justify-between items-center text-xs p-3 bg-indigo-50/50 rounded-xl text-indigo-900">
              <span>Platforma Komissiyasi (15%):</span>
              <span className="font-bold">- 1,920,000 UZS</span>
            </div>
            <div className="flex justify-between items-center text-xs p-3 bg-emerald-50 rounded-xl text-emerald-900">
              <span className="font-semibold">Akademiya Sof Daromadi (85%):</span>
              <span className="font-extrabold text-sm">10,880,000 UZS</span>
            </div>
          </div>
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition">
            Payout (Yechib Olish) So'rov Yuborish
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Akademiya Ustozlari va Guruhlar</h3>
          <div className="border border-slate-100 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 font-semibold border-b border-slate-100">
                <tr>
                  <th className="p-3">USTOZ</th>
                  <th className="p-3">KURSLARI</th>
                  <th className="p-3">O'QUVCHILAR</th>
                  <th className="p-3">ULUSH (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium text-slate-900">Anvar Toshmatov</td>
                  <td className="p-3 text-slate-600">Full-Stack React</td>
                  <td className="p-3 text-slate-600">128 nafar</td>
                  <td className="p-3 font-bold text-indigo-600">70% / 30%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-900">Sardor Rahimzoda</td>
                  <td className="p-3 text-slate-600">SMM Mastery</td>
                  <td className="p-3 text-slate-600">62 nafar</td>
                  <td className="p-3 font-bold text-indigo-600">65% / 35%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};