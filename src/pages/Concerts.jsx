import React from "react";
import EventCard from "../components/EventCard";
import "../Styles/Concerts.css";

const Concerts = () => {
  return (
    <div className="concerts">
      <h2>Conciertos</h2>
      <div className="concerts-layout">
        <div className="concerts-info">
          <p>
            La banda <b>Traidores NO!</b> estará presentándose en distintos
            escenarios llevando toda la energía del rock alternativo.
          </p>
          <ul>
            <li>Estadio Monumental - 20 de Octubre, 2025</li>
            <li>Luna Park - 5 de Noviembre, 2025</li>
            <li>Festival Rock BA - 15 de Diciembre, 2025</li>
          </ul>
        </div>
        <div className="concerts-cards">
          <EventCard
            title="Rock en el Estadio"
            date="20 de Octubre, 2025"
            place="Estadio Monumental"
            image="https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/465643470_9122554144462010_1145336507441628027_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=JEuU4Df-rLAQ7kNvwEB-fZY&_nc_oc=AdkDUsYnFWpflhcQNS74E7iAcOnatZfAbZ2UMUjlxiUJxRv1hGW5eJYZJQCnBp-l8Ww&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=AJ3lAQUlUIras_GOsXUDHQ&oh=00_AfbSt5TzH0Ktm_YoKYFLgQ8YUhetSmtI0pj9a-2qFts_qg&oe=68D8F2BC"
          />
          <EventCard
            title="Festival Alternativo"
            date="5 de Noviembre, 2025"
            place="Luna Park"
            image="https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/551382386_18177881803353028_75072860816471495_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vAJjQl9oMtMQ7kNvwEvRdso&_nc_oc=AdmOsrlmUY0Cfzwc-gYul_74CVhDqseNNcwCh5GfNMfUVfKpN-BrrAE8gOdhdY4pWGs&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=flHIqJFuTi_cLOdjMrqqKg&oh=00_AfYlOx8Pje5G6nclLirA2GpLOIbS-gGrz34fb5Cdtviyxg&oe=68D90A04"
          />
        </div>
      </div>
    </div>
  );
};

export default Concerts;
