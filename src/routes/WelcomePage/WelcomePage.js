import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./WelcomePage.css";

export default class WelcomePage extends Component {
  handleLogoutClick(e) {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className="WelcomePage__logged-in">
        <Link
          onClick={(e) => { this.handleLogoutClick(e) }}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="WelcomePage_not-logged-in">
        <Link
          className="WelcomePage_link"
          to="/register">
          Register
        </Link>
        <Link
          className="WelcomePage_link"
          to="/login">
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <body>
        <header role="banner">
          <div>
            <img id="WelcomePage__gear" src={require("../../gear.png")} alt="gear" />
          </div>
        </header>
        <main className="WelcomePage__main">
          <div className="WelcomePage__screen-wrapper">
            <div className="WelcomePage__welcome-section">
              <h2>Welcome to Mech</h2>
            </div>
            <div id="WelcomePage__login-logout-link">
              {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink()}
            </div>
            <div id="WelcomePage__intro">
              <ul className="WelcomePage__intro-ul">
                <li>
                  Mech is a community for car owners and mechanics to discuss problems and solutions based on car manufacturers and diagnostic trouble codes (DTC). Enter your VIN or Make and Model to your car. Enter your DTC. Find solutions. Chat with car owners and mechanics.
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