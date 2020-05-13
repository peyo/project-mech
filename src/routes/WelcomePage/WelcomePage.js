import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

export default class WelcomePage extends Component {
  render() {
    return (
      <body>
        <main className="WelcomePage__main">
          <div className="WelcomePage__screen-wrapper">
            <div className="WelcomePage__welcome-section">
              <h2>Welcome to Mech</h2>
            </div>
            <div id="WelcomePage__login-logout-link">
              <Link to='/home'>
                Rev!
              </Link>
            </div>
            <div id="WelcomePage__intro">
              <ul className="WelcomePage__intro-ul">
                <li>
                  Mech is a community for car owners and mechanics to discuss problems and solutions based on car manufacturers and diagnostic trouble codes (DTC). Enter your VIN or Make and Model of your car. Enter your DTC. Find solutions. Chat with car owners and mechanics.
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer>
          <div className="WelcomePage__footer-contact-info">
            <div id="WelcomePage__beep-beep">
              Beep beep
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