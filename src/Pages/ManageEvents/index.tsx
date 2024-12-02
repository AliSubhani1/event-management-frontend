import React, { useState, useEffect } from "react";
import CustomButton from "../../Components/Common/CustomButton";
import Modal from "../../Components/Common/Modal";
import EventContainer from "../Home/EventContainer";
import { BASE_URL, ButtonColor } from "../../Utils/constants";
import axios from "axios";

const ManageEvents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    date: "",
    image: "",
  });
  const [error, setError] = useState("");
  const [events, setEvents] = useState<any[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event: any) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    }
  }, [searchTerm, events]);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}events`);
      const data = response.data.map((event: any) => ({
        ...event,
        id: event._id,
      }));
  
      setEvents(data || []);
      setFilteredEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    const { name, description, date, image, price } = formData;
  
    if (!name || !description || !date || !image) {
      setError("Please fill out all required fields before submitting.");
      return;
    }
  
    try {
      if (isEditing && editingEventId) {
        // Exclude _id from the payload
        const updatedEvent = { name, description, image, price, date };
  
        const response = await axios.put(
          `${BASE_URL}events/${editingEventId}`,
          updatedEvent
        );
  
        setEvents((prev) =>
          prev.map((event) =>
            event.id === editingEventId ? { ...event, ...response.data } : event
          )
        );
        setIsEditing(false);
        setEditingEventId(null);
      } else {
        const response = await axios.post(`${BASE_URL}events`, formData);
        setEvents((prev) => [...prev, response.data]);
      }
  
      setFilteredEvents(events);
    } catch (error) {
      console.error("Error saving event:", error);
      setError("Failed to save event. Please try again.");
    } finally {
      setIsModalOpen(false);
      setFormData({
        name: "",
        description: "",
        price: 0,
        date: "",
        image: "",
      });
      setError("");
    }
  };
  

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}events/${id}`);
      setEvents((prev) => prev.filter((event) => event.id !== id));
      setFilteredEvents((prev) => prev.filter((event) => event.id !== id));
      await fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleEdit = (event: any) => {
    const { _id, ...editableData } = event;
  
    setFormData(editableData);
    setIsEditing(true);
    setEditingEventId(_id); 
    setIsModalOpen(true);
  };
  

  return (
    <div>
      <div className="w-full flex justify-end mb-6">
        <CustomButton
          className="mr-12 my-8"
          colorClass={ButtonColor.DARK_BLUE}
          onClick={() => {
            setIsEditing(false);
            setIsModalOpen(true);
          }}
        >
          Add Event
        </CustomButton>
      </div>

      <div className="w-full flex items-center justify-center mb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search events..."
          className="border p-2 rounded-sm w-full max-w-[400px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isModalOpen && (
        <Modal title={isEditing ? "Edit Event" : "Add Event"} setIsModalOpen={setIsModalOpen}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Event Name"
              className="border p-2 rounded w-full"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Event Description"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              name="price"
              value={formData.price || ""}
              onChange={handleInputChange}
              placeholder="Ticket Price (Optional)"
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="border p-2 rounded w-full"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <CustomButton onClick={() => setIsModalOpen(false)} colorClass={ButtonColor.White}>
              Cancel
            </CustomButton>
            <CustomButton onClick={handleSubmit} colorClass={ButtonColor.DARK_BLUE}>
              Submit
            </CustomButton>
          </div>
        </Modal>
      )}

      <div>
        {isLoading ? (
          <p>Loading events...</p>
        ) : filteredEvents.length > 0 ? (
          <div className="flex gap-8 flex-wrap items-center justify-center">
            {filteredEvents.map((event: any, index: number) => (
            <EventContainer
                key={index}
                event={{ ...event }}
                onDelete={() => handleDelete(event.id || event._id)} // Use id or fallback to _id
                onEdit={handleEdit}
            />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-bold">No events found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageEvents;
