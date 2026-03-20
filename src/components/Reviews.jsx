import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = ({ reviews }) => {
  return (
    <section id="reviews" className="py-32 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-emerald-300 uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">Words from our clients.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-4xl hover:bg-white/15 transition-colors duration-300">
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-emerald-700 mb-6 opacity-50" />
              <p className="text-lg text-emerald-50 mb-10 leading-relaxed font-light">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center text-white font-serif text-lg border border-emerald-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{review.name}</h4>
                  <p className="text-sm text-emerald-300">{review.role || 'Client'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;