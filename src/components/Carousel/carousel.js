import React from "react";
import "./carousel.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ImageCarousel = ({ otherimages, name }) => {
  return (
    <Carousel>
      <div>
        <img className="caraouselPhoto" src={otherimages[0]} alt={name} />
      </div>
      <div>
        <img className="caraouselPhoto" src={otherimages[1]} alt={name} />
      </div>
      <div>
        <img className="caraouselPhoto" src={otherimages[2]} alt={name} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
