import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../MechContext";
import config from "../config";
import "./AddDTC.css";

class AddDTC extends Component {
  
  static contextType = MechContext;

  handleSubmit(e) {
    e.preventDefault();
    const { DTC } = e.target;
    const DTCAdd = {
      dtc: DTC.value,
    };
    fetch(config.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(DTCAdd),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        this.context.addDTC(data);
        this.props.history.push("/DisplayVINDTC");
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <Link to={"/Home"}>
              <img id="gear" src={require("../gear.png")} alt="gear" />
            </Link>
            <div className="keep-driving">Keep driving.</div>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="dtc-section">
              <h2>Trouble Code</h2>
              <form
                className="username-form"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <div className="dtc">Your DTC</div>
                <input
                  type="text"
                  id="dtc-input"
                  name="DTC"
                />
                <div className="submit-wrapper">
                  <Link to={"/DisplayVINDTC"}>
                    <input
                      className="button"
                      type="submit"
                      placeholder="Submit"
                    />
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

export default AddDTC;
