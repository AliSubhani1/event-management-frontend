import React from "react";
import { useNavigate } from "react-router-dom";

interface EventContainerProps {
  eventName: string;
  image: string;
  event: any; // Pass the entire event object to navigate
}

const EventContainer: React.FC<EventContainerProps> = ({ eventName, image, event }) => {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate(`/event-details/${event.id}`, { state: { event } });
  };

  return (
    <div
      onClick={handleEventClick}
      className="cursor-pointer rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      <img src={image} alt={eventName} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{eventName}</h3>
    </div>
  );
};

export default EventContainer;
