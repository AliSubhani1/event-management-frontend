import React from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import CustomButton from "../Components/Common/CustomButton";
import { ButtonColor } from "../Utils/constants";

const EventDetails: React.FC = () => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return (
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <p className="text-gray-600">Please go back and select an event.</p>
      </div>
    );
  }

  const downloadTicket = () => {
    const pdf = new jsPDF();

    // Add the event title
    pdf.setFontSize(20);
    pdf.text("Event Ticket", 10, 20);

    pdf.setFontSize(20);
    pdf.text(event.title, 10, 40);

    // Add the event description
    pdf.setFontSize(12);
    const descriptionText = pdf.splitTextToSize(event.description, 180); // Split long text for the page width
    pdf.text(descriptionText, 10, 60);

    // Add the event image
    const img = new Image();
    img.src = event.images[0];
    img.onload = () => {
      pdf.addImage(img, "JPEG", 10, 80, 180, 100); // Position: x=10, y=60; Size: width=180, height=100
      pdf.save(`${event.title}_ticket.pdf`);
    };
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <img
        src={event.images[0]}
        alt={event.title}
        className="w-full max-w-md mx-auto mb-4"
      />
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="flex w-full items-center justify-center">
        <CustomButton onClick={downloadTicket} className='mr-4 my-8' colorClass={ButtonColor.DARK_BLUE} >Download Ticket</CustomButton>
      </div>

    </div>
  );
};

export default EventDetails;
