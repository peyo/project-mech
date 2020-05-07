import React, { Component } from "react";
import MechContext from "../MechContext";
import { Link } from "react-router-dom";
import config from "../config";
import "./Onboarding.css";

class Onboarding extends Component {

  static contextType = MechContext;

  state = {
    car: {}
  }

  handleSubmit(e) {
    e.preventDefault();
    const { model } = e.target;
    const modelAdd = {
      model: model.value
    };
    fetch(config.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(modelAdd),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) {
          return res
            .json()
            .then(error => {
              throw error
            });
        }
        return res.json();
      })
      .then(data => {
        this.context.addModel(data);
        this.props.history.push("/AddDTC");
      })
      .catch(error => {
        this.setState({ error })
    })
  }

  render() {

    const { car } = this.context;

    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <img id="gear" src={require("../gear.png")} alt="gear" />
            <div className="keep-driving">Keep driving.</div>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="car-section">
              <h2>Your Car</h2>
              <form className="car-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="make-onboarding">Manufacturer: {car.make_id}</div>
                <div className="model-onboarding">Your Car's Model</div>
                <input
                  type="text"
                  id="model-input"
                  name="model"
                />
                <div className="button-div">
                  <Link to={"/AddDTC"}>
                    <input
                      className="button"
                      type="submit"
                      placeholder="Submit" />
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-contact-info">
            <div id="beep-beep">Beep beep.</div>
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

export default Onboarding;
