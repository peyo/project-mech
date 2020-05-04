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
              <ul className="intro-ul">
                <li>
                  Enter your VIN or Make and Model.
                </li>
                <li>
                  Enter your Diagnostic Trouble Code (DTC).
                </li>
                <li>
                  Find solutions.
                </li>
                <li>
                  Chat with car owners and mechanics.
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-contact-info">
            <div id="beep-beep">
              Beep beep.
            </div>
            <br />
            <div className="contact-us">
              Contact Us:&nbsp;
              <a className="email-connect" href="mailto:peteryyoon@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default Welcome;
