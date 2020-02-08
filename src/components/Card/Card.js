import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.scss";
function Card({ value }) {
  const { name, preise, googlebewertungen, image, slug } = value;
  return (
    <article className="card">
      <div className="img-container">
        <img src={image} alt="restaurant" />
        <div className="preise">
          <h6>{preise}</h6>
          <p>Google: {googlebewertungen} </p>
        </div>
        <Link to={`/restaurants/${slug}`} className="btn-primary card-link">
          Features
        </Link>
      </div>
      <p className="card-info">{name}</p>
    </article>
  );
}

export default Card;
