import React, { Component, useContext } from "react";

import "./details.styles.scss";
import styled from "styled-components";
import { HeinsbergContext } from "../../context";
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
  //console.log(selectedOne);
  const { name, popularität, googlebewertungen, image, details } = selectedOne;

  return (
    <>
      <div className="container">
        <div className="row rowTop">
          <div className="col-12 col-lg-9">
            <div className="card">
              <div className="row ">
                <div className="col-7 px-3">
                  <div className="card-block px-3">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text text-justify">{details}</p>
                  </div>
                </div>

                <div class="col-5 ">
                  <img class="d-block image" src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">Address</div>
        </div>
        DETAILS PAGE
      </div>
    </>
  );
};
export default Details;
