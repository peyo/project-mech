import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./display-vin-dtc.css";

class displayVINDTCFull extends Component {
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
          <section id="home-screen">
            <div className="vin-dtc-section">
              <h2>Your Car</h2>
              <div className="vin">VIN: JTDKN3DU8D0355402</div>
              <div className="make">Make: Toyota</div>
              <div className="made-in">Made In: Japan</div>
              <div className="button-wrapper">
                <Link to={'/home'}>
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
                <Link to={'/display-vin-dtc-vinOnly'}>
                  <input className="button" type="submit" value="Clear" />
                </Link>
              </div>
              <div className="dtc-comment-date">April 30, 2020 - 11:46 AM</div>
              <div className="dtc-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="dtc-comment-edit-delete">
                <Link to={"/edit-dtc-comment"}>
                  <a href="...">edit</a>
                </Link>
                <Link to={"/delete-dtc-comment"}>
                  <a id="delete-link" href="...">delete</a>
                </Link>
              </div>
              <div className="button-wrapper">
                <input className="button" type="submit" value="Add Comment" />
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

export default displayVINDTCFull;
