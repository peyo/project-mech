import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../contexts/MechContext";
import "./Home.css";

class Home extends Component {

  static contextType = MechContext;

  state = {
    car: {},
    dtc: {}
  };

  render() {

    const { car, comments } = this.context;

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
            <div className="dtc-section">
              <h2>Trouble Code</h2>
              <form className="username-form">
                <div className="dtc">Enter DTC</div>
                <input tye="text" id="dtc-input" />
                <div className="submit-wrapper">
                  <Link to={"/DisplayVINDTC"}>
                    <input className="button" type="submit" value="Submit" />
                  </Link>
                </div>
              </form>
            </div>
            <hr/>
            <div className="garage-section">
              <h2>History</h2>
              <div className="comments">Your Comments</div>
              <div className="comments">
                <div className="dtc-comment">
                  DTC
                </div>&nbsp;
                <Link to={"/DisplayVINDTCFull"}>
                  {comments.dtc_id}
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