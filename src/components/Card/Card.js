import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.scss";
function Card({ value, section }) {
  const { name, preise, googlebewertungen, image, slug } = value;
//console.log(slug);

  return (
    <article className="card">
      <div className="img-container">
        <img src={image} alt="restaurant" />
        <div className="preise">
          <h6>{preise}</h6>
          <p>Google: {googlebewertungen} </p>
        </div>
        <Link to={`${section}/${slug}`} className="btn card-link">
          Features
        </Link>
      </div>
      <p className="card-info">{name}</p>
    </article>
  );
}

export default Card;
