import React from 'react';
import '../Styles/EventModal.css';
export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{event.title}</h2>
        <p className="date">{event.date} · {event.location}</p>
        <img src={event.image} alt="evento" className="modal-media" />
        <p>{event.description}</p>
        {event.video && (
          <div className="video-wrapper">
            <iframe
              title="promo"
              src={event.video}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
