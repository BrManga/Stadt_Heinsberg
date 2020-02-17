import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./uebernachten.styles.scss";
import UebernachtenContainer from "../../components/UebernachtenContainer/UebernachtenContainer";
import Footer from "../../components/Footer/Footer";
function Uebernachten() {
  return (
    <>
      <header className="roomsHero1">
        <Banner
          title="Übernachten"
          subtitle="Wenn der Mensch zur Ruhe gekommen ist, dann wirkt er. Francesco Petrarca"
        >
          <Link to="/" className="btn-primary returnHome">
            Zurück zur Startseite
          </Link>
        </Banner>
      </header>
      <UebernachtenContainer />
      <Footer />
    </>
  );
}

export default Uebernachten;
