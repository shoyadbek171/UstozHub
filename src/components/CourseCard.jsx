import React from 'react';

export const CourseCard = ({ title, instructor, academy, price, rating, duration, lessons, image, category }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative h-48 bg-slate-100">
          <img 
            src={image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
          {category && (
            <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
              {category}
            </span>
          )}
          {academy && (
            <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow">
              {academy}
            </span>
          )}
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium text-slate-900">{instructor} ✓</span>
            {rating && <span className="text-amber-500 font-bold">★ {rating}</span>}
          </div>
          <h3 className="font-bold text-slate-900 text-base line-clamp-2">{title}</h3>
          <p className="text-xs text-slate-500">Noldan professional darajagacha zamonaviy veb dasturlashni o'rganing.</p>
        </div>
      </div>
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block">Narxi</span>
          <span className="font-extrabold text-slate-900 text-base">{price || "1,200,000 UZS"}</span>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition shadow-sm">
          Ko'rish
        </button>
      </div>
    </div>
  );
};