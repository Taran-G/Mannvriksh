import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-32 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-4">Support & Information</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-emerald-200 bg-white shadow-md' : 'border-stone-200 bg-white hover:border-stone-300'}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`font-serif text-xl ${openFaq === index ? 'text-emerald-800' : 'text-stone-800'}`}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-50 text-stone-400'}`}>
                  {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-8 transition-all duration-300 ease-in-out opacity-100">
                  <p className="text-stone-600 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;