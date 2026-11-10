import React from 'react';

export const SuperAdmin = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Platforma Super Admin Paneli</h2>
          <p className="text-xs text-slate-400 mt-0.5">Barcha moderatsiyalar, split-komissiyalar va payout to'lovlarini nazorat qilish</p>
        </div>
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold px-3 py-1.5 rounded-xl">
          SLA Ishonchlilik: 99.95%
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">JAMI TO'LOV (GROSS)</span>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">1,000,000 UZS</p>
          <span className="text-[10px] text-slate-500 mt-1 block">100% Talaba to'lovi</span>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">PLATFORMA KOMISSIYASI</span>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">150,000 UZS</p>
          <span className="text-[10px] text-indigo-600 mt-1 block">15% SaaS UstozHub ulushi</span>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-medium text-slate-400">USTOZ / AKADEMIYA SOF</span>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">850,000 UZS</p>
          <span className="text-[10px] text-emerald-600 mt-1 block">85% Sof payout balansi</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Kurslar Moderatsiyasi Navbati</h3>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded">PENDING</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1">Python bilan Ma'lumotlar Tahlili va AI</h4>
              <p className="text-xs text-slate-500">Ustoz: Bekzod Alimov | Narx: 1,500,000 UZS</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-xl transition">
                ✓ Tasdiqlash
              </button>
              <button className="flex-1 sm:flex-none bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-3 py-2 rounded-xl transition">
                ✕ Rad etish
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Payouts (Mablag' Yechib Olish) Vedomosti</h3>
          <div className="space-y-3">
            {[
              { name: "Anvar Toshmatov", card: "8600 **** **** 4321", date: "2026-10-24", amount: "3,400,000 UZS", status: "Tasdiqlash", btnClass: "bg-indigo-600 hover:bg-indigo-700 text-white" },
              { name: "Najot Ta'lim Academy", card: "9860 **** **** 8812", date: "2026-10-20", amount: "8,500,000 UZS", status: "COMPLETED", btnClass: "bg-emerald-50 text-emerald-600 font-bold" },
              { name: "Malika Ikromova", card: "8600 **** **** 9012", date: "2026-10-25", amount: "1,900,000 UZS", status: "Tasdiqlash", btnClass: "bg-indigo-600 hover:bg-indigo-700 text-white" },
            ].map((payout, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{payout.name}</span>
                  <span className="text-[11px] text-slate-400">{payout.card} | {payout.date}</span>
                  <span className="font-extrabold text-slate-900 block mt-0.5">{payout.amount}</span>
                </div>
                <button className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${payout.btnClass}`}>
                  {payout.status === 'COMPLETED' ? '✓ COMPLETED' : 'Tasdiqlash (Payout)'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};