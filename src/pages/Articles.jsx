import React from "react";
import "../Styles/Articles.css";

const Articles = () => {
  return (
    <div className="articles">
      <h2>Artículos</h2>
      <div className="articles-list">
        <article>
          <h3>El sonido de la resistencia</h3>
          <p>
            Traidores NO! redefine el rock alternativo con letras cargadas de
            energía y protesta social.
          </p>
        </article>
        <article>
          <h3>El futuro del rock</h3>
          <p>
            La banda se consolida como referente de una nueva generación de
            músicos.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Articles;

