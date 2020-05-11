import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div>
            <img id="WelcomePage__gear" src={require("../gear.png")} alt="gear" />
          </div>
        </header>
        <main className="WelcomePage__main">
          <div className="WelcomePage__section">
            <h2 id="WelcomePage__welcome">Welcome to Mech.</h2>
            <div id="WelcomePage__home-link">
              <Link to={"/LoginRegisterPage"}>Rev!</Link>
            </div>
            <div id="WelcomePage__intro">
              <ul className="WelcomePage__intro-ul">
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
          <div className="WelcomePage__footer-contact-info">
            <div id="WelcomePage__beep-beep">
              Beep beep.
            </div>
            <br />
            <div className="WelcomePage__contact-us">
              Contact Us:&nbsp;
              <a className="WelcomePage__email-connect" href="mailto:peteryyoon@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default WelcomePage;
