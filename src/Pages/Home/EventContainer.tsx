import { useState, useEffect } from "react";

type EventContainerProps = {
  eventName: string;
  image: string;
};

const EventContainer = ({ eventName, image }: EventContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`text-center w-[300px] cursor-pointer transform transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <img className="w-[300px] h-[300px] transform transition-transform duration-500 ease-in-out hover:scale-110" src={image} alt="event-image" />
      <h3>{eventName}</h3>
    </div>
  );
};

export default EventContainer;
