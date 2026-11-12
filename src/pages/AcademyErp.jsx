import React, { useState } from 'react';

export const AcademyErp = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Anvar Toshmatov', subject: 'Full-Stack Dasturlash', phone: '+998 90 123 45 67' },
    { id: 2, name: 'Malika Karimova', subject: 'UI/UX Dizayn', phone: '+998 91 987 65 43' }
  ]);

  const [courses, setCourses] = useState([
    { id: 1, title: 'React va Node.js', teacher: 'Anvar Toshmatov', price: '1,500,000 UZS' }
  ]);

  // Form state
  const [newTeacherName, setNewTeacherName] = useState('');
  const [newTeacherSubject, setNewTeacherSubject] = useState('');
  const [newTeacherPhone, setNewTeacherPhone] = useState('');

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!newTeacherName) return;
    setTeachers([
      ...teachers,
      { id: Date.now(), name: newTeacherName, subject: newTeacherSubject || 'Umumiy', phone: newTeacherPhone || '+998 00 000 00 00' }
    ]);
    setNewTeacherName('');
    setNewTeacherSubject('');
    setNewTeacherPhone('');
    alert("O'qituvchi muvaffaqiyatli qo'shildi! ✓");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Akademiya ERP Boshqaruvi</h2>
          <p className="text-xs text-slate-500">O'quv markazi xodimlari, o'qituvchilari va filiallarini boshqarish.</p>
        </div>
        <span className="bg-emerald-50 text-emerald-600 font-bold text-xs px-3 py-1.5 rounded-xl border border-emerald-200">
          Faol Rejim
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* O'qituvchi qo'shish formasi */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Yangi O'qituvchi Qo'shish</h3>
          <form onSubmit={handleAddTeacher} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">O'qituvchi F.I.O</label>
              <input 
                type="text" 
                value={newTeacherName}
                onChange={(e) => setNewTeacherName(e.target.value)}
                placeholder="Jasur Alimov" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" 
                required 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Mutaxassisligi / Fan</label>
              <input 
                type="text" 
                value={newTeacherSubject}
                onChange={(e) => setNewTeacherSubject(e.target.value)}
                placeholder="Python Dasturlash" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" 
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Telefon Raqami</label>
              <input 
                type="text" 
                value={newTeacherPhone}
                onChange={(e) => setNewTeacherPhone(e.target.value)}
                placeholder="+998 93 444 55 66" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-600" 
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 rounded-xl transition shadow">
              O'qituvchini Ro'yxatga Olish
            </button>
          </form>
        </div>

        {/* O'qituvchilar ro'yxati */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Akademiya O'qituvchilari ({teachers.length})</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {teachers.map((t) => (
              <div key={t.id} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500">{t.subject} • {t.phone}</p>
                </div>
                <span className="bg-indigo-50 text-indigo-600 font-bold px-2.5 py-1 rounded-lg">Faol</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};