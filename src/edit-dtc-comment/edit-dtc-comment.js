import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./edit-dtc-comment.css";

class editDTCComment extends Component {
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
            </div>
            <hr />
            <div className="vin-dtc-section">
              <h2>Your Trouble Code</h2>
              <div className="dtc">DTC: P1100</div>
              <div className="dtc-description">
                Description: BARO Sensor Circuit.
              </div>
              <label className="comment">Comment:</label>
              <div className="comment">
                <textarea id="comment">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </textarea>
              </div>
              <div className="button-wrapper">
                <Link to={"/display-vin-dtc-full"}>
                  <input id="comment-submit" className="button" type="submit" value="Submit" />
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

export default editDTCComment;
