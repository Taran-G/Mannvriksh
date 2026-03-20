import React from 'react';

const TrustBar = () => {
  const stats = [
    { label: "Years Experience", value: "18+" },
    { label: "Certified Experts", value: "CBT & ACT" },
    { label: "Confidentiality", value: "100%" },
    { label: "Growth Approach", value: "Holistic" }
  ];

  return (
    <div className="bg-white border-y border-stone-200 py-10 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-100">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-emerald-800 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-stone-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;