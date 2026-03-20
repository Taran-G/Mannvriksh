import React from 'react';

const Services = ({ services, onBookClick }) => {
  return (
    <section id="solutions" className="py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">How We Walk Beside You</h3>
          <p className="text-stone-600 text-lg">Safe spaces and real conversations. Personalized pathways backed by empathy, evidence, and experience.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full border border-stone-100">
              <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-emerald-700`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-8 grow">{service.description}</p>
              <button 
                onClick={onBookClick}
                className="w-full py-4 rounded-xl border-2 border-stone-100 font-bold text-stone-700 hover:border-emerald-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all mt-auto"
              >
                Book this service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;