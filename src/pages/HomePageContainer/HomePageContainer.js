import React from "react";
import { Link } from "react-router-dom";
import "./homePageContainer.styles.scss";
import CookieConsent from "react-cookie-consent";


function HomePageContainer() {
  return (
    <div className="container-fluid homepage">
      <div className="row rowTop">
        <div className="col-12 backgroundImg"></div>
      </div>
      <div className="row facilities">
        <Link to="/freizeitunderholung" className="col-12 col-lg-3 freizeit">
          Freizeit&Erholung
        </Link>
        <Link to="/essenundtrinken" className="col-12 col-lg-3 essen">
          Essen&Trinken
        </Link>
        <Link to="/uebernachten" className="col-12 col-lg-3 nacht">
          Übernachten
        </Link>
        <Link to="/veranstallungen" className="col-12 col-lg-3 sport">
          Veranstaltungen
        </Link>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Continue"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Welcome to my Website! This is a student learning project. If there is any content irregularities please do not hesitate to <a style={{ textDecoration: "none", color: "#DA7E7C" }} href="mailto:bora.mng525@gmail.com"> contact</a>.
      </CookieConsent>
    </div>
  );
}

export default HomePageContainer;
