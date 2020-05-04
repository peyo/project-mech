import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./add-dtc.css";

class AddDTC extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <Link to={"/home"}>
              <img id="gear" src={require("../gear.png")} alt="gear" />
            </Link>
            <div className="keep-driving">
              Keep driving.
            </div>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="dtc-section">
              <h2>Trouble Code</h2>
              <form className="username-form">
                <div className="dtc">Your DTC</div>
                <input tye="text" id="dtc-input" />
                <div className="button-div">
                  <Link to={"/display-vin-dtc"}>
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

export default AddDTC;
