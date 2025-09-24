import React from "react";
import "../Styles/News.css";

const News = () => {
  return (
    <div className="news">
      <h2>Novedades</h2>
      <div className="news-list">
        <div className="news-item">
          <h3>Nuevo videoclip</h3>
          <p>Lanzamos el videoclip de “Revolución”.</p>
        </div>
        <div className="news-item">
          <h3>Gira 2025</h3>
          <p>La banda recorrerá Latinoamérica.</p>
        </div>
      </div>
    </div>
  );
};

export default News;
