import React, { Component, useContext } from "react";

import "./details.styles.scss";
import styled from "styled-components";
import { HeinsbergContext } from "../../context";
import ImageCarousel from "../../components/Carousel/carousel";
const Details = props => {
  const context = useContext(HeinsbergContext);
  // console.log("data yazdirildi", context);

  const data = context;
  const state = {
    slug: props.match.params.slug
  };

  const section = props.match.path.split("/")[1];
  //console.log(section,"and", state.slug );

  let selectedOne = data.sorted[section].filter(item => {
    return item.slug === state.slug;
  })[0];
  console.log(selectedOne);
  const {
    name,
    details,
    website,
    anschrift,
    phone,
    image,
    otherimages
  } = selectedOne;

  return (
    <>
      <div className="container">
        <div className="row rowTop">
          <div className="col-12 col-lg-8">
            <div className="card">
              <div className="row ">
                <div className="col-7 px-3">
                  <div className="card-block px-3">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text text-justify">{details}</p>
                  </div>
                </div>

                <div className="col-5 ">
                  <img className="d-block image" src={image} alt="" />
                </div>
              </div>
              <div className="carousel">
                <ImageCarousel name={name} otherimages={otherimages} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="cardUp">
                <div>
                  <div className="cardUpTitle">ANSCHRIFT</div>
                  <address>{anschrift}</address>
                </div>
                <div>
                  {phone ? (
                    <>
                      <div className="cardUpTitle">TELEFON</div>
                      <p>{phone}</p>{" "}
                    </>
                  ) : null}
                </div>
                <div>
                  {website ? (
                    <>
                      <div className="cardUpTitle">WEBSITE</div>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {website}
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
              {/*              <div className="cardDown">
                <ImageCarousel name={name} otherimages={otherimages} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
