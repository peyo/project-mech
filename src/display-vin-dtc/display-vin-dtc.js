import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./display-vin-dtc.css";

class displayVINDTC extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="logo">
            <img id="gear" src={require("../gear.png")} alt="gear" />
          </div>
          <div className="keep-driving">
            Keep driving.
          </div>
        </header>
        <main role="main">
          <section id="vin-dtc-wrapper">
            <div className="vin-dtc-section">
              <h2>Your Car</h2>
              <div className="vin">VIN: JTDKN3DU8D0355402</div>
              <div className="make">Make: Toyota</div>
              <div className="made-in">Made In: Japan</div>
              <div className="button-wrapper">
                <Link to={"/home"}>
                  <input className="button" type="submit" value="Clear" />
                </Link>
              </div>
            </div>
            <hr />
            <div className="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div className="dtc">DTC: P1100</div>
              <div className="dtc-description">
                Description: BARO Sensor Circuit.
              </div>
              <div className="button-wrapper">
                <Link to={"/display-vin-dtc-vinOnly"}>
                  <input className="button" type="submit" value="Clear" />
                </Link>
              </div>
              <div className="button-wrapper">
                <Link to={"/add-dtc-comment"}>
                  <input className="button" type="submit" value="Add Comment" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-contact-info">Beep beep.</div>
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

export default displayVINDTC;
