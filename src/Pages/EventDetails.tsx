import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import CustomButton from "../Components/Common/CustomButton";
import { ButtonColor } from "../Utils/constants";

const EventDetails: React.FC = () => {
  const location = useLocation();
  const event = location.state?.event;
  const [showMessage, setShowMessage] = useState<boolean>(false);

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
    pdf.text(event.name, 10, 40);

    // Add the event description
    pdf.setFontSize(12);
    const descriptionText = pdf.splitTextToSize(event.description, 180); // Split long text for the page width
    pdf.text(descriptionText, 10, 60);

    pdf.text(`${event.price} EUR`, 10, 80);

    pdf.text("Show this ticket on venue to claim your reservation. You will have to pay at the venue.", 10, 100);

    // Add the event image
    const img = new Image();
    img.src = event.image;
    img.onload = () => {
      pdf.addImage(img, "JPEG", 10, 120, 180, 100); // Position: x=10, y=60; Size: width=180, height=100
      pdf.save(`${event.name}_ticket.pdf`);
    };
    setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 8000);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-8">{event.name}</h1>
      <img
        src={event.image}
        alt={event.name}
        className="w-full max-w-md mb-4"
      />
      <p className="text-gray-600 mb-4">{event.description}</p>
      <p className="text-gray-600 mb-4">{`${event.price} EUR`}</p>
      <div className="flex w-full items-center justify-center">
        <CustomButton onClick={downloadTicket} className='my-8' colorClass={ButtonColor.DARK_BLUE} >Reserve Ticket</CustomButton>
      </div>
      {showMessage && (
        <div className="text-center mt-4 p-4 border border-green-0 rounded">
          <p className="text-green-0 font-bold">
            Your ticket has been downloaded. Show this ticket at the event venue
            to claim your reservation.
          </p>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
