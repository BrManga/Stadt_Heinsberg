import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.scss";

function Card({ value, section }) {
  var { name, preise, googlebewertungen, image, slug, dates } = value;
  return (
    <article className="card">
      <div className="img-container">
        <img src={image} alt={name} />
        <div className="preise">
          <h6>{preise}</h6>
          {googlebewertungen ? <p>Google: {googlebewertungen} </p> : null}
        </div>
        <Link to={`${section}/${slug}`} className="btn card-link">
          Entdecken
        </Link>
      </div>
      <p className="card-info">{name}</p>
      {dates ? <p className="text-center">{dates}</p> : null}
    </article>
  );
}

export default Card;
