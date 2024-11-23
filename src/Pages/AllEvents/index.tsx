import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventContainer from "../Home/EventContainer";

const AllEvents: React.FC = () => {
  const location = useLocation();
  const { events } = location.state || { events: [] }; // Retrieve events from the state

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState<any[]>(events);
  const [isVisible, setIsVisible] = useState(false); // For animation

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
    setIsVisible(true); // Trigger animation
  }, []);

  useEffect(() => {
    // Filter events based on the search term
    if (searchTerm.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event: any) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchTerm, events]);

  return (
    <>
      <div
        className={`bg-blue-0 p-6 sm:w-[95vw] mx-auto rounded-md sm:mt-12 transform transition-transform duration-700 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-left text-white-0">
          <h3 className="text-2xl font-bold">All Events</h3>
          <p className="text-gray-300 mb-4">
            Explore and find the events you are looking for.
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="border p-2 w-full mb-4 max-w-[400px] rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>
      <div className="p-6">
        {filteredEvents.length > 0 ? (
          <div className="flex gap-8 my-8 flex-wrap items-center justify-center">
            {filteredEvents.map((event: any, index: number) => (
              <EventContainer
                key={index}
                eventName={event.title}
                image={event.images[0]}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-white-0">
            <h3 className="text-xl font-bold">No events found</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AllEvents;
