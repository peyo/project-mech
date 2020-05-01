import React, { Component } from "react";
import "./home.css";

class home extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div class="header-primary-sub">
            Keep driving.
          </div>
        </header>
        <main role="main">
          <section>
            <div class="vin-dtc-section">
              <h2>Your Car</h2>
              <div class="vin-dtc-description">
                Vehicle Identification Number (VIN)
              </div>
              <form class="vin-input">
                <input tye="text" id="vin" value="17 characters" />
                <input class="button" type="submit" value="Submit" />
              </form>
            </div>
            <hr />
            <div class="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div class="vin-dtc-description">Diagnostic Trouble Code (DTC)</div>
              <form class="dtc-input">
                <input tye="text" id="dtc" value="5 characters" />
                <input class="button" type="submit" value="Submit" />
              </form>
            </div>
          </section>          
        </main>
        <footer>
          <div class="footer-contact-info">Beep beep.</div>
          <br />
          <div class="footer-contact-info">
            Contact Us:
            <a class="email-connect" href="mailto:peteryyoon@gmail.com">
              Email
            </a>
          </div>
        </footer>
      </body>
    );
  }
}

export default home;
