import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./freizeitunderholung.styles.scss";
import FreizeitUndErholungContainer from "../../components/FreizeitUndErholungContainer/FreizeitUndErholungContainer";
import Footer from "../../components/Footer/Footer";
function FreizeitUndErholung() {
  return (
    <>
      <header className="roomsHero">
        <Banner
          title="Freizeit&Erholung"
          subtitle="Nichts bringt uns auf unserem Weg besser voran als eine Pause."
        >
          <Link to="/" className="btn-primary returnHome">
            Zurück zur Startseite
          </Link>
        </Banner>
      </header>
      <FreizeitUndErholungContainer />
      <Footer />
    </>
  );
}

export default FreizeitUndErholung;
