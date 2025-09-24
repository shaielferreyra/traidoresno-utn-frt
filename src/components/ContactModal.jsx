import React from 'react';
import '../Styles/ContactModal.css';
export default function ContactModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Contacto - Traidores NO!</h2>
        <p>Email: <a href="mailto:contacto@traidoresno.band">contacto@traidoresno.band</a></p>
        <p>Booking: <a href="mailto:booking@traidoresno.band">booking@traidoresno.band</a></p>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
          <a href="#">Spotify</a>
        </div>
      </div>
    </div>
  );
}
