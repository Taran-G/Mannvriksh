import React, { useState } from "react";

const Events = ({ events }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="events" className="px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-800 mb-4">
          Our Events
        </h2>
        <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
          Schools, institutes, organizations, and communities we have worked with.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, visibleCount).map((event, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-white cursor-pointer"
            >
              <div className="relative h-64">
                {/* Image */}
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Hover Overlay Shade */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Text Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug">
                      {event.name}
                    </h3>

                    {event.location && (
                      <p className="text-white/85 text-sm mt-1">{event.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < events.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-7 py-3 rounded-full bg-emerald-800 text-white font-semibold shadow-md hover:bg-emerald-900 hover:shadow-lg transition cursor-pointer"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;