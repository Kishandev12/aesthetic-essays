import React, { useState } from 'react';
import { BookOpen, Search, User, Clock, Heart } from 'lucide-react';

export default function EssayPlatform() {
  const [view, setView] = useState('home');
  const [essays] = useState([
    {
      id: 1,
      title: "The Illusion of Time",
      author: "Sarah Chen",
      date: "DEC 10, 2025",
      readTime: "8 min read",
      excerpt: "Why our perception of the future is just a memory of the past.",
      content: "Time does not flow like a river...",
      likes: 842
    },
    {
      id: 2,
      title: "Digital Silence",
      author: "Marcus Lee",
      date: "DEC 08, 2025",
      readTime: "12 min read",
      excerpt: "In a world of constant connection, the only luxury left is absence.",
      content: "The screen lit up...",
      likes: 1205
    }
  ]);

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-slate-900 font-serif selection:bg-slate-200">
      {/* Minimalist Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-slate-900" />
            <span className="text-xl font-bold tracking-tight">AEONIC</span>
          </div>
          <button className="text-sm font-sans font-medium hover:text-slate-600 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl mb-6 font-medium tracking-tight text-slate-900">
            Essays
          </h1>
          <p className="text-xl text-slate-500 font-sans font-light italic">
            Ideas that matter, published daily.
          </p>
        </div>

        <div className="space-y-16">
          {essays.map(essay => (
            <article key={essay.id} className="group cursor-pointer border-b border-slate-100 pb-12">
              <div className="flex items-center gap-3 text-xs font-sans font-bold tracking-wider text-slate-400 mb-4">
                <span className="text-slate-900 uppercase">{essay.author}</span>
                <span>•</span>
                <span>{essay.date}</span>
              </div>

              <h2 className="text-4xl leading-tight mb-4 group-hover:text-slate-600 transition-colors duration-300">
                {essay.title}
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed mb-6 font-serif">
                {essay.excerpt}
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-xs font-sans font-medium text-slate-400 flex items-center gap-1">
                  <Clock size={12} /> {essay.readTime}
                </span>
                <span className="text-xs font-sans font-medium text-slate-400 flex items-center gap-1">
                  <Heart size={12} /> {essay.likes}
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
