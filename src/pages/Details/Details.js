import React, { Component, useContext } from "react";

import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./details.styles.scss";
import styled from "styled-components";
import { HeinsbergContext } from "../../context";
const Details = props => {
  const context = useContext(HeinsbergContext);
  //console.log("data yazdirildi", context);

  const data = context;
  const state = {
    slug: props.match.params.slug
  };

  const section = props.match.path.split("/")[1];
  console.log(data.sorted[section]);

  const BackgroundImg = styled.div`
    background-image: url("https://www.lebenshilfe-heinsberg.de/assets/2017/11/heinsberg_01-845x684.jpg");
    background-position: bottom;
    background-size: cover;
  `;
  return (
    <>
      <div className="container-fluid">
        <div className="row rowTop">
          <BackgroundImg className="col-12"></BackgroundImg>
        </div>
        DETAILS PAGE
      </div>
    </>
  );
};
export default Details;
