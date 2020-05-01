import React, { Component } from "react";
import "./display-vin-dtc.css";

class displayVINDTCB extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div class="header-secondary-sub">Keep driving.</div>
        </header>
        <main role="main">
          <section id="home-screen">
            <div class="vin-dtc-section">
              <h2>Your Car</h2>
              <div class="vin">VIN: JTDKN3DU8D0355402</div>
              <div class="make">Make: Toyota</div>
              <div class="made-in">Made In: Japan</div>
              <div class="button-wrapper">
                <input class="button" type="submit" value="Clear" />
              </div>
            </div>
            <hr />
            <div class="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div class="dtc">DTC: P1100</div>
              <div class="dtc-description">
                Description: BARO Sensor Circuit.
              </div>
              <div class="button-wrapper">
                <input class="button" type="submit" value="Clear" />
              </div>
              <div class="dtc-comment-date">April 30, 2020 - 11:46 AM</div>
              <div class="dtc-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div class="dtc-comment-edit-delete">
                <a href="...">edit</a>
                <a id="delete-link" href="...">delete</a>
              </div>
              <div class="button-wrapper">
                <input class="button" type="submit" value="Add Comment" />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div class="footer-contact-info">Beep beep.</div>
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

export default displayVINDTCB;
