import React, { useState, useEffect } from 'react';
import { BookOpen, Plus, Search, Eye, Heart, Calendar, User } from 'lucide-react';

export default function EssayPlatform() {
  const [view, setView] = useState('home');
  const [essays, setEssays] = useState([
    {
      id: 1,
      title: "On the Nature of Time",
      author: "Sarah Chen",
      date: "2025-12-10",
      excerpt: "Time moves in circles, not lines. We return to the same moments, different people...",
      content: "Time moves in circles, not lines...",
      views: 1243,
      likes: 89
    },
    {
      id: 2,
      title: "Digital Gardens",
      author: "Marcus Lee",
      date: "2025-12-08",
      excerpt: "In an age of instant updates, we've forgotten the joy of ideas that grow slowly...",
      content: "In an age of instant updates...",
      views: 892,
      likes: 67
    }
  ]);
  const [selectedEssay, setSelectedEssay] = useState(null);
  const [isWriting, setIsWriting] = useState(false);
  const [newEssay, setNewEssay] = useState({ title: '', author: '', content: '' });

  const handlePublish = () => {
    if (newEssay.title && newEssay.author && newEssay.content) {
      const essay = {
        id: essays.length + 1,
        title: newEssay.title,
        author: newEssay.author,
        date: new Date().toISOString().split('T')[0],
        excerpt: newEssay.content.substring(0, 80) + '...',
        content: newEssay.content,
        views: 0,
        likes: 0
      };
      setEssays([essay, ...essays]);
      setNewEssay({ title: '', author: '', content: '' });
      setIsWriting(false);
      setView('home');
    }
  };

  if (isWriting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 font-sans">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button onClick={() => setIsWriting(false)} className="text-slate-600 mb-6">← Back</button>
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 space-y-6">
            <input type="text" placeholder="Essay Title" className="w-full text-3xl font-serif bg-transparent outline-none" 
              value={newEssay.title} onChange={e => setNewEssay({...newEssay, title: e.target.value})} />
            <input type="text" placeholder="Your Name" className="w-full text-lg text-slate-600 bg-transparent outline-none"
              value={newEssay.author} onChange={e => setNewEssay({...newEssay, author: e.target.value})} />
            <textarea placeholder="Write your thoughts..." className="w-full h-96 text-lg bg-transparent outline-none resize-none"
              value={newEssay.content} onChange={e => setNewEssay({...newEssay, content: e.target.value})} />
            <button onClick={handlePublish} className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:shadow-lg">Publish</button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedEssay) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <button onClick={() => setSelectedEssay(null)} className="text-slate-600 mb-8">← Back to essays</button>
          <article className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-12">
            <h1 className="text-5xl font-serif text-slate-900 mb-6">{selectedEssay.title}</h1>
            <div className="flex gap-4 text-slate-600 mb-8 border-b pb-8">
              <span className="flex gap-2"><User size={16}/> {selectedEssay.author}</span>
              <span className="flex gap-2"><Calendar size={16}/> {selectedEssay.date}</span>
            </div>
            <p className="text-xl leading-relaxed text-slate-800 font-serif whitespace-pre-line">{selectedEssay.content}</p>
            <div className="mt-12 pt-8 border-t flex gap-6 text-slate-500">
              <button className="flex gap-2 hover:text-red-500"><Heart size={20}/> {selectedEssay.likes}</button>
              <span className="flex gap-2"><Eye size={20}/> {selectedEssay.views}</span>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      <header className="sticky top-0 bg-white/50 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BookOpen className="text-orange-600" size={32} />
            <h1 className="text-3xl font-serif text-slate-900">Essays</h1>
          </div>
          <button onClick={() => setIsWriting(true)} className="flex gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:shadow-lg transition-all">
            <Plus size={20} /> Write
          </button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {essays.map(essay => (
            <article key={essay.id} onClick={() => setSelectedEssay(essay)} 
              className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl cursor-pointer transition-all">
              <h3 className="text-2xl font-serif text-slate-900 mb-3">{essay.title}</h3>
              <p className="text-slate-600 mb-6">{essay.excerpt}</p>
              <div className="flex gap-6 text-sm text-slate-500">
                <span className="flex gap-1"><Eye size={16}/> {essay.views}</span>
                <span className="flex gap-1"><Heart size={16}/> {essay.likes}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
