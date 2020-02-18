import React from "react";
import { Link } from "react-router-dom";
import "./homePageContainer.styles.scss";

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
    </div>
  );
}

export default HomePageContainer;
