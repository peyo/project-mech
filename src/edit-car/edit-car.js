import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./edit-car.css";

class EditCar extends Component {
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
            <div className="car-section">
              <h2>Change Your Car</h2>
              <div className="vin-edit">VIN</div>
              <input tye="text" id="vin-input" value="JTDKN3DU8D0355402" />
              <div className="make-edit">Manufacturer</div>
              <input tye="text" id="make-input" value="Toyota"/>
              <div className="model-edit">Model</div>
              <input tye="text" id="model-input" value="Prius" />
              <div className="made-in">Made In Japan</div>
              <div className="button-wrapper">
                <Link to={"/display-vin-dtc"}>
                  <input className="button" type="submit" value="Save" />
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

export default EditCar;
