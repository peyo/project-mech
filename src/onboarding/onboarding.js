import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./onboarding.css";

class Onboarding extends Component {
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
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="car-section">
              <h2>Your Car</h2>
              <form className="car-form">
                <div className="make-onboarding">Manufacturer: Toyota</div>
                <div className="model-onboarding">Your Car's Model</div>
                <input tye="text" id="model-input" value="Model" />
                <div className="button-div">
                  <Link to={"/add-dtc"}>
                    <input className="button" type="submit" value="Submit" />
                  </Link>
                </div>
              </form>
            </div>
          </section>
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

export default Onboarding;
