import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../MechContext";
import config from "../config";
import "./EditCar.css";

class EditCar extends Component {

  static contextType = MechContext;

  state = {
    comments: [],
  };

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
            <div className="car-section">
              <h2>Change Your Car</h2>
              <form className="EditCar-car-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="make-edit">Manufacturer</div>
                <input tye="text" id="make-input" />
                <div className="model-edit">Model</div>
                <input tye="text" id="model-input" />
                <div className="button-wrapper">
                  <Link to={"/DisplayVINDTC"}>
                    <input className="button" type="submit" value="Save" />
                  </Link>
                </div>
              </form>
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
