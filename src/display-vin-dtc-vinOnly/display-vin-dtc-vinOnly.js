import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./display-vin-dtc.css";

class displayVINDTCVINOnly extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <img id="gear" src={require("../gear.png")} alt="gear" />
            <div className="keep-driving">
              Keep driving.
            </div>
          </div>
          <div className="user-info-div">
            <ul className="user-info-ul">
              <li className="user-item">
                <Link to={"/edit-car"}>
                  peyo
                </Link>
              </li>
              <li className="vin-item">
                JTDKN3DU8D0355402
              </li>
              <li className="make-model-item">
                Toyota Prius
              </li>
              <li className="made-in-item">
                Made in Japan
              </li>
            </ul>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <form className="dtc-input">
                <div className="dtc-description">Diagnostic Trouble Code (DTC)</div>
                  <input tye="text" id="dtc-input" value="P1100" />
                  <Link to={"/display-vin-dtc"}>
                    <input className="button" type="submit" value="Submit" />
                  </Link>
              </form>
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

export default displayVINDTCVINOnly;