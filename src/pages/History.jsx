import React from "react";
import "../Styles/History.css";

const History = () => {
  return (
    <div className="history">
      <h2>Nuestra Historia</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>2018 - Inicio</h3>
          <p>La banda nace en Buenos Aires con el objetivo de romper esquemas.</p>
        </div>
        <div className="timeline-item">
          <h3>2020 - Primer Álbum</h3>
          <p>Lanzamiento de “Gritos de Rebeldía”.</p>
        </div>
        <div className="timeline-item">
          <h3>2024 - Segundo Álbum</h3>
          <p>“Traidores NO!” llega a las listas de éxitos.</p>
        </div>
      </div>
      <div className="members">
        <div className="member">
          <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t51.82787-15/537063644_18174779344353028_1939707529602842530_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=noOIJHy2Fo8Q7kNvwGsjgLE&_nc_oc=Adk-0mGNZhYirU_Ew5b8mvkhWI6X9VT_b0NQIcPPL5e6BFGhfZnn7H2ykNwq2dQ5WYI&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=JIYfEFvXl7wKUkFTIDnudQ&oh=00_AfZwu37VBKDL8q3RKn_N6iis6uEbpEfHHqR-qzJnUmGOCw&oe=68D1E04C" alt="Integrante 1" />
          <div className="member-info">
            <h4>TRAIDORES NO!</h4>
            <p>es una banda de rock alternativo que se distingue por su sonido crudo y potente, fusionando la intensidad del grunge con melodías introspectivas. Sus letras, a menudo melancólicas y socialmente conscientes, exploran temas como la alienación, la pérdida y la búsqueda de identidad, resonando con una generación que se siente a la deriva.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
