import React, { useState, useEffect } from "react";
import useDebounce from "../../CustomHooks/UseDebounc";
import SearchImage from "../../Assets/svg/search.svg";
import EventContainer from "./EventContainer";
import CustomButton from "../../Components/Common/CustomButton";
import { BASE_URL, ButtonColor } from "../../Utils/constants";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Common/Spinner";

const SearchEvents = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<any[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
  const [visibleEvents, setVisibleEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Fetch events only once
    fetchEvents();
  }, []);

  useEffect(() => {
    // Filter events based on the debounced search term
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [debouncedSearchTerm, events]);

  useEffect(() => {
    // Update the visible events when the filtered events change
    setVisibleEvents(filteredEvents.slice(0, 16));
  }, [filteredEvents]);

  const fetchEvents = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(`${BASE_URL}events`);
      const data = await response.json();
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleSeeAllEvents = () => {
    navigate("/all-events", { state: { events } }); // Pass all events to the next page
  };

  return (
    <>
      <div
        className={`bg-blue-0 p-6 sm:w-[95vw] mx-auto rounded-md sm:mt-12 transform transition-transform duration-700 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-left text-white-0">
          <h3 className="text-2xl font-bold">Events</h3>
          <p className="text-gray-700 mb-4">Book the ticket of ongoing events</p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="border p-2 w-full mb-4 max-w-[400px] rounded-sm text-black"
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <Spinner />
        ) : visibleEvents.length > 0 ? (
          <div className="flex gap-8 my-8 flex-wrap items-center justify-center">
            {visibleEvents.map((event, index) => (
              <EventContainer
                event={event}
                key={index}
              />
            ))}
          </div>
        ) : (
          searchTerm !== "" && (
            <div
              className={`flex mt-8 flex-col items-center justify-center gap-4 transform transition-transform duration-700 ease-in-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <img src={SearchImage} alt="" />
              <h3 className="text-xl font-bold">No results found</h3>
              <p className="text-center">
                OOPS! We couldn't find any results. Please try again later.
              </p>
            </div>
          )
        )}
      </div>
      <div className="flex w-full justify-center my-20">
        <CustomButton
          onClick={handleSeeAllEvents}
          className="min-w-[200px]"
          colorClass={ButtonColor.DARK_BLUE}
        >
          See all events
        </CustomButton>
      </div>
    </>
  );
};

export default SearchEvents;
