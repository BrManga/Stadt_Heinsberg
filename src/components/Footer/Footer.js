import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-pad social-media">
              <h4>Heinsberg</h4>
              <p>bodenständig. weitsichtig </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-pad social-media">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link className="alink" to="/freizeitunderholung">
                    Freizeit§Erholung
                  </Link>
                </li>
                <li>
                  <Link className="alink" to="/essenundtrinken">
                    Essen&Trinken
                  </Link>
                </li>
                <li>
                  <Link className="alink" to="/uebernachten">
                    Übernachten
                  </Link>
                </li>
                <li>
                  <Link className="alink" to="/veranstallungen">
                    Veranstallungen
                  </Link>
                </li>
              </ul>
            </div>
            <div />
          </div>

          <div className="col-md-4 social-media">
            <h4>Follow Us</h4>
            <ul className="social-network social-circle">
              <li>
                <a
                  href="https://www.facebook.com/groups/heinsberg.meine.stadt/"
                  className="icoFacebook"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/playlist?list=PL3tfK1pRFF7YhBN1OqBTsxjfvJteItesr"
                  className="icoYoutube"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center">
              &copy; Copyright 2020 - Heinsberg. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
