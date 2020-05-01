import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class homeError extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="header-primary-sub">
            Keep driving.
          </div>
        </header>
        <main role="main">
          <section className="vin-dtc-wrapper">
            <div className="vin-dtc-section">
              <h2>Your Car</h2>
              <div className="vin-dtc-description">
                Vehicle Identification Number (VIN)
              </div>
              <form className="vin-input">
                <input tye="text" id="vin" value="17 characters" />
                <Link to={"/display-vin-dtc-vinOnly"}>
                  <input className="button" type="submit" value="Submit" />
                </Link>
              </form>
            </div>
            <hr />
            <div className="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div className="vin-dtc-description">Diagnostic Trouble Code (DTC)</div>
              <form className="dtc-input">
                <input tye="text" id="dtc" value="5 characters" />
                <Link to={"/home-error"}>
                  <input className="button" type="submit" value="Submit" />
                </Link>
              </form>
              <div className="dtc-error">You must enter your VIN first.</div>
            </div>
          </section>
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

export default homeError;
