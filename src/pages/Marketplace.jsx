import React from 'react';
import { CourseCard } from '../components/CourseCard';

export const Marketplace = ({ search, setSearch, selectedCategory, setSelectedCategory }) => {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Dasturlash (React & Node.js)",
      category: "Dasturlash",
      instructor: "Anvar Toshmatov",
      academy: "Najot Ta'lim",
      price: "1,200,000 UZS",
      rating: "4.9 (128)",
      duration: "42 soat",
      lessons: "64 dars",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
    },
    {
      id: 2,
      title: "UI/UX Dizayn: Figma va Prototiplash Mastery",
      category: "Dizayn",
      instructor: "Malika Ikromova",
      academy: "PDP Academy",
      price: "950,000 UZS",
      rating: "4.8 (94)",
      duration: "28 soat",
      lessons: "38 dars",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600"
    },
    {
      id: 3,
      title: "SMM va Raqamli Marketing Strategiyasi",
      category: "Marketing",
      instructor: "Sardor Rahimzoda",
      academy: "Mustaqil Ustoz",
      price: "750,000 UZS",
      rating: "4.7 (62)",
      duration: "20 soat",
      lessons: "25 dars",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
    }
  ];

  const categories = ['Barchasi', 'Dasturlash', 'Dizayn', 'Marketing'];

  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'Barchasi' || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-600 text-white p-8 md:p-12 shadow-xl overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="inline-block bg-white/10 backdrop-blur-md text-emerald-300 border border-emerald-400/30 text-xs font-semibold px-3 py-1 rounded-full">
            ✦ O'zbekiston EdTech SaaS Standarti
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Bilim Oling yoki O'z Akademiyangizni Yuring
          </h1>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            Mustaqil ustozlar va o'quv markazlari uchun yagona ekotizim. Click va Payme to'lovlari integratsiyalashgan xavfsiz ta'lim platformasi.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow transition text-sm">
              Kurslarni Ko'rish →
            </button>
            <button className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl border border-slate-600 transition text-sm">
              Akademiya Ochish
            </button>
          </div>
        </div>
      </div>

      {/* Filters Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Kurslar Katalogi</h2>
          <p className="text-xs text-slate-500">Sertifikatlangan ustozlar va akademiyalardan darslar</p>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};