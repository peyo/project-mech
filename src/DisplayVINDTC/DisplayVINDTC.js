import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../contexts/MechContext";
import "./DisplayVINDTC.css";

class DisplayVINDTC extends Component {

  static contextType = MechContext;

  state = {
    cars: {},
    dtc: {}
  };

  render() {

    const { car, dtc } = this.context;

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
                {car.make_id} {car.model}
              </li>
            </ul>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="vin-dtc-section">
              <h2>Trouble Code</h2>
              <div className="dtc">DTC: {dtc.dtc}</div>
              <div className="dtc-description">
                Description: {dtc.comment }.
              </div>
              <div className="edit-button-wrapper">
                <Link to={"/EditDTC"}>
                  <input className="button" type="submit" value="Edit DTC" />
                </Link>
              </div>
            </div>
              <hr/>
              <div id="add-comment-section">
                <Link to={"/AddDTCComment"}>
                  <input className="button" type="submit" value="Add Comment" />
                </Link>
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

export default DisplayVINDTC;
