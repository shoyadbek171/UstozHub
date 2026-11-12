import React, { useState } from 'react';

export const InstructorStudio = () => {
  const [myCourses, setMyCourses] = useState([
    { id: 1, title: 'Full-Stack Web Dasturlash', students: 124, price: '1,200,000 UZS' }
  ]);

  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!courseTitle) return;
    setMyCourses([
      ...myCourses,
      { id: Date.now(), title: courseTitle, students: 0, price: coursePrice || '1,000,000 UZS' }
    ]);
    setCourseTitle('');
    setCoursePrice('');
    alert("Yangi kurs muvaffaqiyatli yaratildi va moderatsiyaga yuborildi! ✓");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Ustoz Studio</h2>
          <p className="text-xs text-slate-500">O'z video kurslaringizni Yarating, Sotishga qo'ying va Daromadni kuzating.</p>
        </div>
        <span className="bg-indigo-50 text-indigo-600 font-bold text-xs px-3 py-1.5 rounded-xl border border-indigo-200">
          Studio Rejimi
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Yangi Kurs Yaratish</h3>
          <form onSubmit={handleCreateCourse} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Kurs Nomi</label>
              <input 
                type="text" 
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Advanced JavaScript & TypeScript" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Kurs Narxi</label>
              <input 
                type="text" 
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                placeholder="1,400,000 UZS" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" 
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 rounded-xl transition shadow">
              Kursni Nashr Etish
            </button>
          </form>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Mening Kurslarim ({myCourses.length})</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {myCourses.map((c) => (
              <div key={c.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{c.title}</h4>
                  <p className="text-slate-500">{c.students} ta o'quvchi • {c.price}</p>
                </div>
                <span className="bg-emerald-50 text-emerald-600 font-bold px-2.5 py-1 rounded-lg">Faol</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};