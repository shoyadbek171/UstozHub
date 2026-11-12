import React from 'react';
import { CourseCard } from '../components/CourseCard';

export const Marketplace = ({ search, setSearch, selectedCategory, setSelectedCategory }) => {
  const courses = [
    { id: 1, title: 'Full-Stack Web Dasturlash (React & Node.js)', instructor: 'Anvar Toshmatov', academy: 'Najot Ta\'lim', price: '1,200,000 UZS', rating: 4.9, category: 'Dasturlash', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600' },
    { id: 2, title: 'UI/UX Dizayn: Figma va Prototiplash Mastery', instructor: 'Malika Karimova', academy: 'PDP Academy', price: '950,000 UZS', rating: 4.8, category: 'Dizayn', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600' },
    { id: 3, title: 'SMM va Raqamli Marketing Strategiyasi', instructor: 'Javohir Rahimov', academy: 'Mohirdev', price: '800,000 UZS', rating: 4.7, category: 'Marketing', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600' },
  ];

  const categories = ['Barchasi', 'Dasturlash', 'Dizayn', 'Marketing'];

  // Qidiruv va kategoriya bo'yicha filter qilish
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || course.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col items-start gap-6 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="bg-white/10 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            ✦ O'zbekiston EdTech SaaS Standarti
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Bilim Oling yoki O'z Akademiyangizni Yuring
          </h1>
          <p className="text-xs md:text-sm text-indigo-100 font-medium leading-relaxed">
            Mustaqil ustoz va o'quv markazlari uchun yagona ekotizim. Click va Payme to'lovlari integratsiyalashgan xavfsiz ta'lim platformasi.
          </p>
        </div>
      </div>

      {/* Categories & Catalog */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Kurslar Katalogi</h2>
            <p className="text-xs text-slate-500">Sertifikatlangan ustozlar va akademiyalardan darslar</p>
          </div>
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${selectedCategory === cat ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 text-xs">
              Hech qanday kurs topilmadi. Boshqa so'z bilan qidirib ko'ring.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};