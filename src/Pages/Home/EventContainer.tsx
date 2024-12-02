import React from "react";
import { useNavigate } from "react-router-dom";

interface EventProps {
  event: {
    id: string;
    name: string;
    price?: number; // Optional price
    description: string;
    image: string;
  };
  onDelete?: (id: string) => void;
  onEdit?: (event: any) => void;
}

const EventContainer: React.FC<EventProps> = ({ event, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate(`/event-details/${event.id}`, { state: { event } });
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when editing
    if (onEdit) onEdit(event);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when deleting
    if (onDelete) onDelete(event.id);
  };

  return (
    <div
      onClick={handleEventClick}
      className="cursor-pointer rounded-lg p-4 hover:shadow-lg transition-shadow relative"
    >
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{event.name}</h3>
      {event.price && <h3>{`${event.price} EUR`}</h3>}
      <div className="flex gap-2">
        {onEdit && (
          <button
            onClick={handleEditClick}
            className="text-blue-0 hover:opacity-40 transition"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={handleDeleteClick}
            className="text-red-0 hover:opacity-40 transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
