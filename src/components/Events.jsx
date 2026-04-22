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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(0, visibleCount).map((event, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 bg-white">
                <h3 className="text-black text-lg font-bold">
                  {event.name}
                </h3>

                {event.location && (
                  <p className="text-gray-600 text-sm mt-1">
                    {event.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleCount < events.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-7 py-3 rounded-full bg-emerald-800 text-white font-semibold"
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