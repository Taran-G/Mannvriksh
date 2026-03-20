import React from 'react';
import { Quote } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-stone-900 text-stone-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-200 h-200 bg-emerald-900/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Healing is not one-dimensional.</h3>
            <p className="text-lg text-stone-400 mb-10 leading-relaxed">
              At a time when speed defines success and silence masks struggle, MannVriksh sparks a new conversation. Our unique dual-path approach bridges emotional wellness with actionable life-skill training.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-2xl font-serif text-emerald-300">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Clinical Healing</h4>
                  <p className="text-stone-400">Evidence-based therapy providing a safe, affirming space to address trauma, burnout, and emotional fatigue.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-2xl font-serif text-emerald-300">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Empowered Growth</h4>
                  <p className="text-stone-400">Skill-building workshops and conscious parenting guidance that equip you to thrive in your home and workplace.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full aspect-4/3 rounded-3xl bg-stone-800 shadow-[0_20px_50px_rgb(0,0,0,0.5)] z-10">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
              alt="Therapy session" 
              className="w-full h-full object-cover rounded-3xl border border-stone-800"
            />
            <div className="absolute -bottom-8 -left-8 bg-white text-stone-900 p-8 rounded-3xl shadow-2xl max-w-[16rem] sm:max-w-xs z-20">
              <Quote className="w-10 h-10 text-emerald-200 mb-4" />
              <p className="font-serif text-lg font-medium">"Healing begins with compassion, and growth begins when we feel truly heard."</p>
              <p className="text-sm font-bold text-stone-500 mt-4">— Kumud Aneja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;