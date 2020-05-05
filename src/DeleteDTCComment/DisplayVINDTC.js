import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DisplayVINDTC.css";

class DeleteDTCComment extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <Link to={"/Home"}>
              <img id="gear" src={require("../gear.png")} alt="gear" />
            </Link>
            <div className="keep-driving">
              Keep driving.
            </div>
          </div>
          <div className="user-info-div">
            <ul className="user-info-ul">
              <li className="user-item">
                <Link to={"/EditCar"}>
                  peyo
                </Link>
              </li>
              <li className="make-model-item">
                Toyota Prius
              </li>
            </ul>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="vin-dtc-section">
              <h2>Trouble Code</h2>
              <div className="dtc">DTC: P1100</div>
              <div className="dtc-description">
                Description: BARO Sensor Circuit.
              </div>
            </div>
            <hr/>
            <div className="dtc-comment-section">
              <div className="dtc-comment-date">peyo - 4/30/2020 - 11:46 AM</div>
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
                <div className="dtc-comment-delete-message">
                  Would you like to delete this comment?
                </div>
                <Link to={"/DisplayVINDTC"}>
                  Y
                </Link>&nbsp;
                <Link to={"/DisplayVINDTCFull"}>
                  N
                </Link>
              </div>
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

export default DeleteDTCComment;
