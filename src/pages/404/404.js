import React from "react";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./404.styles.scss";
import Footer from "../../components/Footer/Footer";
function Fehler() {
  return (
    <>
      <header className="fehler">
        <Banner title="404" subtitle="Fehler 404 Not Found">
          <Link to="/" className="btn-primary returnHome">
            Zurück zur Startseite
          </Link>
        </Banner>
      </header>

      <Footer />
    </>
  );
}

export default Fehler;
