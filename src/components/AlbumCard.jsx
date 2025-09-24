import React from "react";
import "../Styles/AlbumCard.css";

const AlbumCard = ({ title, year, cover, tracks }) => {
  return (
    <div className="card album-card">
      <img src={cover} alt={title} className="album-cover" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{year}</p>
        <ul>
          {tracks.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlbumCard;
