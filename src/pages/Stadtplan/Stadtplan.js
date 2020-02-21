import React, { useEffect, useRef } from "react";
import "./stadtplan.styles.scss";
import mapboxgl from "mapbox-gl";
import token from "../../key";
import Footer from "../../components/Footer/Footer";
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
    <>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="heading-frame col-12 col-lg-5">
            <h2 contenteditable="true ">MY CITY HEINSBERG</h2>
          </div>
          <div className="stadtplanText col-12 col-lg-6">
            <p className="stadtplanTitle">HEINSBERGER STADTPLAN</p>
            <p className="stadtplanExplain">
              Klicken Sie auf die Karte an, um eine große Ansicht des
              Heinsberger Stadtplans zu erhalten.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div
            ref={el => (mapContainer.current = el)}
            className="mapContainer"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stadtplan;
