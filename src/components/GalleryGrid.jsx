import React, { useState } from "react";
import Modal from "./Modal";
import "../Styles/GalleryGrid.css";

const GalleryGrid = ({ images }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`gallery-${index}`}
          onClick={() => setSelected(img)}
        />
      ))}

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <img src={selected} alt="selected" className="gallery-modal-img" />
        </Modal>
      )}
    </div>
  );
};

export default GalleryGrid;
