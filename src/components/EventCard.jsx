import React, { useState } from "react";
import Modal from "./Modal";
import "../Styles/EventCard.css";

const EventCard = ({ title, date, location, image, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card event-card" onClick={() => setOpen(true)}>
        <img src={image} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{date} · {location}</p>
        </div>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Lugar:</strong> {location}</p>
          <p>{description}</p>
        </Modal>
      )}
    </>
  );
};

export default EventCard;
