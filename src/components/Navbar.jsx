import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Traidores NO!</Link>
      </div>

      {/* Botón hamburguesa (solo visible en mobile) */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
      </div>

      {/* Links de navegación */}
      <ul className={`navbar-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
        <li><Link to="/conciertos" onClick={() => setOpen(false)}>Conciertos</Link></li>
        <li><Link to="/discografia" onClick={() => setOpen(false)}>Discografía</Link></li>
        <li><Link to="/nuestra-historia" onClick={() => setOpen(false)}>Nuestra Historia</Link></li>
        <li><Link to="/galeria" onClick={() => setOpen(false)}>Galería</Link></li>
        <li><Link to="/novedades" onClick={() => setOpen(false)}>Novedades</Link></li>
        <li><Link to="/articulos" onClick={() => setOpen(false)}>Artículos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
