import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./veranstallungen.styles.scss";
import VeranstallungenContainer from "../../components/VeranstallungenContainer/VeranstallungenContainer";
import Footer from "../../components/Footer/Footer";
function Veranstallungen() {
  return (
    <>
      <header className="roomsHero1">
        <Banner title="Veranstaltungen" subtitle="Carpe Diem - Genieße den Tag">
          <Link to="/" className="btn-primary returnHome">
            Zurück zur Startseite
          </Link>
        </Banner>
      </header>
      <VeranstallungenContainer />
      <Footer />
    </>
  );
}

export default Veranstallungen;
