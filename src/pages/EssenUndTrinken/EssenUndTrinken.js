import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./essenundtrinken.styles.scss";
import EssenUndTrinkenContainer from "../../components/EssenUndTrinkenContainer/EssenUndTrinkenContainer";
import Footer from "../../components/Footer/Footer";
function EssenUndTrinken() {
  return (
    <>
      <header className="roomsHero1">
        <Banner
          title="Essen&Trinken"
          subtitle="Niemand kann nein sagen zu einem guten Essen"
        >
          <Link to="/" className="btn-primary returnHome">
            Return Home
          </Link>
        </Banner>
      </header>
      <EssenUndTrinkenContainer />
      <Footer />
    </>
  );
}

export default EssenUndTrinken;
