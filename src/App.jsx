import React from 'react';
import { BookOpen, Search, User, Clock, Heart, Sparkles } from 'lucide-react';
import { essays } from './essays'; // <--- Importing your separate file here!

export default function EssayPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 font-sans selection:bg-purple-200">

      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-900">
            <div className="p-2 bg-indigo-600 rounded-lg text-white shadow-lg">
              <BookOpen size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">Aeonic</span>
          </div>
          <button className="px-6 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100">
            <Sparkles size={14} /> Daily Curated Reads
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Ideas that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">bloom.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A space for colorful thoughts and vivid dreams. Discover essays that matter.
          </p>
        </div>

        <div className="grid gap-8">
          {essays.map(essay => (
            <article key={essay.id} className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/50 shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-3 text-sm font-bold tracking-wider text-indigo-500 mb-4">
                <span className="bg-indigo-50 px-3 py-1 rounded-full">{essay.category}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{essay.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors">
                {essay.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {essay.excerpt}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-slate-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400"></div>
                  <span className="text-sm font-bold text-slate-700">{essay.author}</span>
                </div>
                <div className="flex items-center gap-6 text-slate-400 text-sm font-medium">
                  <span className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors">
                    <Clock size={16} /> {essay.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-pink-500 transition-colors">
                    <Heart size={16} /> {essay.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
