import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

class Welcome extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div>
            <img id="gear" src={require("../gear.png")} alt="gear" />
          </div>
        </header>
        <main className="main">
          <div className="welcome-section">
            <h2 id="welcome-welcome">Welcome to Mech.</h2>
            <div id="home-link">
              <Link to={"/login-register"}>Rev!</Link>
            </div>
            <div id="intro">
              Enter your VIN or Make and Model.<br />Enter your DTC.<br />Find solutions.<br />Chat with car owners and mechanics.
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-contact-info">Beep beep.</div>
          <br />
          <div className="footer-contact-info">
            Contact Us:&nbsp;
            <a className="email-connect" href="mailto:peteryyoon@gmail.com">
              Email
            </a>
          </div>
        </footer>
      </body>
    );
  }
}

export default Welcome;
