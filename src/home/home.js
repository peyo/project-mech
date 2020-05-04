import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
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
            <div className="dtc-section">
              <h2>Trouble Code</h2>
              <form className="username-form">
                <div className="dtc">Your DTC</div>
                <input tye="text" id="dtc-input" />
                <div className="submit-wrapper">
                  <Link to={"/display-vin-dtc"}>
                    <input className="button" type="submit" value="Submit" />
                  </Link>
                </div>
              </form>
            </div>
            <hr/>
            <div className="garage-section">
              <h2>Garage</h2>
              <div className="comments">Your Comments</div>
              <div className="comments">
                <div className="dtc-comment">
                  DTC
                </div>&nbsp;
                <Link to={"/display-vin-dtc-full"}>
                  P1100
                </Link>&nbsp;&nbsp;&nbsp;
                <div className="dtc-comment">
                  4/30/2020 - 11:46 AM
                </div>
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

export default Home;
