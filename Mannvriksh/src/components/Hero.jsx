import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden bg-stone-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=75" 
          alt="Calm nature background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent w-full md:w-3/4"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-[#FDFBF7] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-emerald-900 font-semibold text-sm mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            India's First Dual Path to Well-being
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-8">
            For every mind that needs a <span className="text-emerald-800">little shade & a lot of care.</span>
          </h1>
          
          <p className="text-xl text-stone-700 mb-10 leading-relaxed font-light max-w-lg">
            We believe mental strength isn't about never falling—it's about learning to rise, reflect, and rebuild from within.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={onBookClick}
              className="bg-emerald-800 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
            >
              Start Healing Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;