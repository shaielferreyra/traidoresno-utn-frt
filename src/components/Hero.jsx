import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537427394_18174779188353028_1328925287182119588_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=C-NBokJyGHEQ7kNvwEnsOT7&_nc_oc=Adk_3QyV5yQPpkJIGVx7put2GRMfDttDvCyBXvTgO3z_3qdsLMVzeTVDAsxcHCrziMo&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=FITYudemtvADE9OtTxNNPQ&oh=00_Afbh-gHxdb1iaZB0N57urb33-bu_Qa-LQYT2PeGYqYho8w&oe=68D8FF83')", 
      }}
    >
      <div className="hero-content">
        <h1>Traidores NO!</h1>
        <p>Rock Alternativo en su máxima expresión</p>
      </div>
    </section>
  );
};

export default Hero;
