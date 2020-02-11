import React from "react";
import loadingGif from "../../assets/images/loading.gif";
import "./loading.styles.scss";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Data Loading...</h4>
      <img src={loadingGif} alt="loading"></img>
    </div>
  );
}
