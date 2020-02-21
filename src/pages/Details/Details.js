import React, { useContext, useState, useEffect, useRef } from "react";
import here from "../../assets/images/icon.png";
import token from "../../key";
import "./details.styles.scss";
import { HeinsbergContext } from "../../context";
import ImageCarousel from "../../components/Carousel/carousel";
import mapboxgl from "mapbox-gl";
import Footer from "../../components/Footer/Footer";
const Details = props => {
  console.log("props from details", props);

  const initialState = {
    lng: 6.09708,
    lat: 51.06542,
    zoom: 12
  };
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = token.key.mapToken;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapstate.lng, mapstate.lat],
      zoom: mapstate.zoom
    });
    map.on("load", function() {
      map.loadImage(here, function(error, image) {
        if (error) throw error;
        map.addImage("cat", image);
        map.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [mapstate.lng, mapstate.lat]
                }
              }
            ]
          }
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "point",
          layout: {
            "icon-image": "cat",
            "icon-size": 0.25
          }
        });
      });
    });
  }, []);

  const [mapstate, setMapstate] = useState(initialState);
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
      <div className="container detailscontainer">
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

                <div className="col-5 d-flex justify-content-center align-items-center">
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
              <div id="map-container">
                <div ref={el => (mapContainer.current = el)} id="map" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Details;
