import React from "react";

import claruswayLogo from "../img/clarusway_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bottom">
        <p>Clarusway Web Design, Copyrigth © 2020</p>
        <a href="https://clarusway.com/">
          <img src={claruswayLogo} alt="clarusway logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
