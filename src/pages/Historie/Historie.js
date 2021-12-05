import React from "react";
import "./historie.styles.scss";
import Footer from "../../components/Footer/Footer";
const Historie = () => {
  return (<>
    <div className="container historiek">
    <h1 className="title">Historie</h1>
      <div className="row">
        <div className="col-12 col-lg-8">
          <h2>Stadtrechte</h2>
          <p className="text-justify">
            Die Kreisstadt Heinsberg, der politische, wirtschaftliche und
            kulturelle Mittelpunkt des gleichnamigen und westlichsten Kreises
            der Bundesrepublik Deutschland, wird schon in einer Urkunde aus dem
            Jahre 1255 als „oppidum“ bezeichnet, als befestigter Ort. Wenn also
            die mittelalterliche Befestigung eines Ortes gleichbedeutend ist mit
            der Verleihung der Stadtrechte, war Heinsberg spätestens im Jahre
            1255 schon Stadt.
          </p>
        </div>
        <div className="col-12 col-lg-4 figureContainer">
          <figure className="justify-content-end">
            <img
              src={
                "https://www.alleburgen.de/pics/nw/u685.jpg"
              }
              alt="Ruine der Berg"
            />
            <figcaption>
              Ruine der Burg der Herren von Heinsberg
              <p>
                Auf dem Hügel über der Stadt findet der Besucher die vor einem
                Jahrzehnt restaurierte Ruine der Burg der Herren von Heinsberg
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Schwierige Zeiten</h2>
          <p className="text-justify">
            Seitdem haben mehr als sieben Jahrhunderte das Gesicht Heinsbergs
            immer wieder umgeformt und neu geprägt. Jede Epoche gab der Stadt
            ihren Stempel, hinterließ wertvolles Kulturgut oder brannte ihr das
            Mal schwerer Zeiten, kriegerischer Auseinandersetzungen,
            Zerstörungen und Feuersbrünste ein. Jede Epoche zeichnete mit an dem
            Bild der heutigen Stadt Heinsberg, die sich trotz allem lange und
            bis in die Neuzeit hinein ihr charakteristisches und teilweise
            mittelalterliches Stadtbild erhalten konnte.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 figureContainer">
          <figure>
            <img
              src={
                "https://www.heinsberg.de/kultur-freizeit-tourismus/sehenswuerdigkeiten/burg-und-kirchberg/fotograf-frank-metzemacher-tiga-media-office-alltag-99.jpg?cid=ayj.ti7&resize=a9cb61:780x350c"
              }
              alt="Ruine der Berg"
            />
            <figcaption>
              Ruine der Burg der Herren von Heinsberg
              <p>
                Auf dem Hügel über der Stadt findet der Besucher die vor einem
                Jahrzehnt restaurierte Ruine der Burg der Herren von Heinsberg
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-lg-7">
          <h2>Die „Herren von Heinsberg“</h2>
          <p className="text-justify">
            Das Heinsberger Herrschergeschlecht übte seit dem 9. Jahrhundert
            starken Einfluss auf die politische, wirtschaftliche und
            gesellschaftliche Entwicklung aus. Die bedeutendste Persönlichkeit
            des Heinsberger Geschlechtes war Philipp von Heinsberg, der von 1167
            – 1191 Erzbischof von Köln und Reichskanzler unter Kaiser Friedrich
            Barbarossa war. Philipp von Heinsberg war auch der Erbauer der
            bekannten Kölner Stadtmauer. Er hat seine letzte Ruhestätte im
            Hochgrab des Kölner Doms. Eine Nebenlinie des Hauses Heinsberg
            verbindet sich mit dem Hause Oranien, zu dem das niederländische
            Königshaus gehört. Nach dem Wiener Kongress 1815 kam Heinsberg zu
            Preußen und wurde erstmalig Kreisstadt bis zum Jahre 1932. Den
            schicksalsschwersten Tag ihrer Geschichte erlebte ie Stadt im 2.
            Weltkrieg, als sie am 16.11.1944 durch einen Luftangriff fast völlig
            zerstört wurde. Dank des Aufbauwillens der Bürgerschaft waren die
            Spuren des Krieges nach wenigen Jahren getilgt.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Historie;
