import React, { Component } from "react";
import "./add-dtc-comment.css";

class addDTCComment extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div class="header-primary-sub">
            Keep driving.
          </div>
        </header>
        <main role="main">
          <section id="home-screen">
            <div class="vin-dtc-section">
              <h2>Your Car</h2>
              <div class="vin">VIN: JTDKN3DU8D0355402</div>
              <div class="make">Make: Toyota</div>
              <div class="made-in">Made In: Japan</div>
              <div class="button-wrapper">
                <input id="vin-clear" class="button" type="submit" value="Clear" />
              </div>
            </div>
            <hr />
            <div class="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div class="dtc">DTC: P1100</div>
              <div class="dtc-description">
                Description: BARO Sensor Circuit.
              </div>
              <label class="comment">Comment:</label>
              <div class="comment">
                <textarea id="comment"></textarea>
              </div>
              <div class="button-wrapper">
                <input
                  id="comment-submit"
                  class="button"
                  type="submit"
                  value="Submit"
                />
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

export default addDTCComment;
