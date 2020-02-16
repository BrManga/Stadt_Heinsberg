import React, { useEffect, useRef } from "react";
import "./stadtplan.styles.scss";
import mapboxgl from "mapbox-gl";
import token from "../../key";
const Stadtplan = () => {

  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = token.key.mapToken;
    new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [6.09708, 51.06542],
      zoom: 13
    });
  }, []);
  return (
    <div className="container">
      <div className="row d-flex align-items-center ">
        <div class="heading-frame col-12 col-lg-5">
          <h2 contenteditable="true ">MY CITY HEINSBERG</h2>
        </div>
        <div className="col-12 col-lg-6 ml-5">
          <h1>HEINSBERGER STADTPLAN</h1>
          <h5 className="mt-5">
            Klicken Sie auf die Karte an, um eine große Ansicht des Heinsberger
            Stadtplans zu erhalten.
          </h5>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4">
        <div ref={el => (mapContainer.current = el)} className="mapContainer" />
      </div>
    </div>
  );
};

export default Stadtplan;
