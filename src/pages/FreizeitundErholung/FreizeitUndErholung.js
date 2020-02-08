import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./freizeitunderholung.styles.scss";
function FreizeitAndErholung() {
  return (
    <>
      <header className="roomsHero">
        <Banner
          title="Freizeit&Erholung"
          subtitle="Niemand kann nein sagen zu einem guten Essen"
        >
          <Link to="/" className="btn-primary returnHome">
            Return Home
          </Link>
        </Banner>
      </header>
      {/* <RoomContainer /> */}
    </>
  );
}

export default FreizeitAndErholung;
