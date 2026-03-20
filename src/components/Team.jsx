import React from 'react';

const Team = ({ team }) => {
  return (
    <section id="team" className="py-32 bg-white relative border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-4">Our Team</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900">Meet Our Practitioners</h3>
          </div>
          <p className="text-stone-600 text-lg max-w-md md:text-right">
            Dedicated professionals committed to making emotional well-being visible, valid, and valued.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-8 shadow-lg aspect-4/5 relative border border-stone-100 bg-stone-100">
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-stone-900 via-stone-900/80 to-transparent z-20">
                  <h3 className="text-3xl font-serif text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-300 font-medium tracking-wide">{member.role}</p>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg px-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;