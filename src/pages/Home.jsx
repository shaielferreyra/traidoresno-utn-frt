import React from "react";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import AlbumCard from "../components/AlbumCard";
import GalleryGrid from "../components/GalleryGrid";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section className="section">
        <h2>Próximos Conciertos</h2>
        <div className="card-grid">
          <EventCard
            title="Rock en el Estadio"
            date="20 de Octubre, 2025"
            place="Estadio Monumental"
            image="https://scontent.ftuc1-1.fna.fbcdn.net/v/t51.82787-15/537063644_18174779344353028_1939707529602842530_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=noOIJHy2Fo8Q7kNvwGsjgLE&_nc_oc=Adk-0mGNZhYirU_Ew5b8mvkhWI6X9VT_b0NQIcPPL5e6BFGhfZnn7H2ykNwq2dQ5WYI&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=JIYfEFvXl7wKUkFTIDnudQ&oh=00_AfZwu37VBKDL8q3RKn_N6iis6uEbpEfHHqR-qzJnUmGOCw&oe=68D1E04C"
          />
          <EventCard
            title="Festival Alternativo"
            date="5 de Noviembre, 2025"
            place="Luna Park"
            image="https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/536992553_18174779209353028_5386013153773082323_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZEOMtIAQ9tIQ7kNvwHpZM8K&_nc_oc=AdmGVoYDJvDGnIyMTHoZpxVBGeFK59DfCxgPgWMKr0qZ4qQK5WX9-Y7kXXYocFbcCpY&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=hAUTyDlpGb6BUAE8TByStg&oh=00_AfYeElBc4vYLbst56qqxBWNlAbozTu1fj1eyK_0_SF2nlA&oe=68D1F096"
          />
        </div>
      </section>

      <section className="section">
        <h2>Discografía</h2>
        <div className="card-grid">
          <AlbumCard
            title="Sueños de desvelos"
            year="2022"
            cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVvdjKp4MNlzMPG6riWpMOQSUAz8iuYjkRQ&s"
            tracks={["Sencillo 1", "Sencillo 2"]}
          />
          <AlbumCard
            title="Presagio"
            year="2024"
            cover="https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/539384482_18175151143353028_35747999009887979_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=__rHk_y9gWEQ7kNvwFIvkFE&_nc_oc=Adl5rVRPa0b6jk3KIJGOT8HbLP8PeghP51zXUuyoZiZH6KiJI3218D3kFvxRC1Zkfl4&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=Y1yDhzC8EtBVAqC1uVzq4A&oh=00_AfawZvr-5rCPsKv06v-cXWbUqnA4QwdM6NXJgwY_xASipQ&oe=68D20174"
            tracks={["Rock Alternativo", "Revolución"]}
          />
        </div>
      </section>

      <section className="section">
        <h2>Galería</h2>
        <GalleryGrid
          images={[
            "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537427394_18174779188353028_1328925287182119588_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Iz5tE7siihsQ7kNvwFuk1dm&_nc_oc=Adl-Qm2yqX-zVv9EmKV7RCHUOsbikxykO_FVLzdDfB7ZOpaAr1y1h0hpw1t27I_CD6Y&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=9mpyluWy52vPAmtuRtKMkg&oh=00_AfYjFHAoftPDzIOd2b6psNMQ54RVIDzTmX-FWCNL5987WQ&oe=68D1F783",
            "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537249437_18174779197353028_6171786108709528679_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LueHRLZ-vTMQ7kNvwFfcoIl&_nc_oc=AdlUG522OhwLjsM8Vjb5tZ97BDrrSDR7fM3_TtsDBgGdQtf9oVnpzaEl4AQ2S_XdTgY&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=ZGBHxKWZPcvV1t5GMfskTw&oh=00_AfYSn7KvKn9MD4X42mPRV-G5uf9ZnVWHaL3stk67F7FAvA&oe=68D1F928",
            "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/536825780_18174779287353028_7360979762663913349_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rHYlOIExjJcQ7kNvwFG35He&_nc_oc=AdkeATIufluXaY9ly57itFrZbpi8tdSQgLLvOahS1u6tKR2vEsVyXtwkMWL_h293m00&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=jtwV78GPvCgpHCP1asBBAw&oh=00_Afbx9YGvZuBSMM_0Xxex3MOBVRRefGYquKBFGKGzhQ_2PQ&oe=68D1E986",
          ]}
        />
      </section>
    </div>
  );
};

export default Home;
