import React from "react";
import AlbumCard from "../components/AlbumCard";
import "../Styles/Discography.css";

const Discography = () => {
  return (
    <div className="discography">
      <h2>Discografía</h2>
      <div className="album-grid">
        <AlbumCard
          title="Gritos de Rebeldía"
          year="2022"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVvdjKp4MNlzMPG6riWpMOQSUAz8iuYjkRQ&s"
          tracks={["Sencillo 1", "Sencillo 2"]}
        />
        <AlbumCard
          title="Traidores NO!"
          year="2024"
          cover="https://m.media-amazon.com/images/I/51O09Sb8GAS._UXNaN_FMjpg_QL85_.jpg"
          tracks={["Rock Alternativo", "Revolución"]}
        />
      </div>
    </div>
  );
};

export default Discography;

