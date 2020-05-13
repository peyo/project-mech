import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarForm from "../../components/CarForm/CarForm";
import DtcForm from "../../components/DtcForm/DtcForm";
import "./HomePage.css";

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  handleAddCarSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  }

  handleAddDtcSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  }
  
  render() {
    return (
      <body>
        <header role="banner">
          <div className="HomePage__gear-keep-driving">
            <Link to={"/home"}>
              <img
                id="HomePage__gear"
                src={require("../../gear.png")}
                alt="gear"
              />
            </Link>
            <div className="HomePage__keep-driving">Keep driving</div>
          </div>
          <div className="HomePage__user-info-div"></div>
        </header>
        <main role="main">
          <section id="HomePage__screen-wrapper">
            <div className="HomePage__car-section">
              <h2>Add Car</h2>
              <CarForm
                onSubmitSuccess={(e) => {
                  this.handleAddCarSuccess(e);
                }}
              />
            </div>
            <hr />
            <div className="HomePage__dtc-section">
              <h2>Add Trouble Code</h2>
              <DtcForm
                onSubmitSuccess={(e) => {
                  this.handleAddDtcSuccess(e);
                }}
              />
            </div>
            <hr />
            <div className="HomePage__garage-section">
              <h2>History</h2>
              <div className="HomePage__comments">Your Comments</div>
              <div className="HomePage__comments">
                <div className="HomePage__dtc-comment">DTC</div>&nbsp;
                {/*<Link to={"/DisplayVINDtcFull"}>
                  {comments.dtc_id}
                </Link>&nbsp;&nbsp;&nbsp;*/}
                {/*<div className="HomePage__dtc-comment">
                  4/30/2020 - 11:46 AM
                </div>*/}
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="HomePage__footer-contact-info">
            <div id="HomePage__beep-beep">Beep beep</div>
            <br />
            <div className="HomePage__contact-us">
              Contact Us:&nbsp;
              <a
                className="HomePage__email-connect"
                href="mailto:peteryyoon@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
