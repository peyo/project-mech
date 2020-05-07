import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../MechContext";
import config from "../config";
import "./AddDTCComment.css";

class AddDTCComment extends Component {
  
  static contextType = MechContext;

  state = {
    cars: {},
    dtc: {}
  };

  handleSubmit(e) {
    e.preventDefault();
    const { comment } = e.target;
    const commentAdd = {
      comment: comment.value,
    };
    fetch(config.API_ENDPOINT + `DTCComment`, {
      method: "POST",
      body: JSON.stringify(commentAdd),
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
        this.context.addComment(data);
        this.props.history.push("/DisplayVINDTC");
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    
    const { car, dtc } = this.context;

    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <Link to={"/Home"}>
              <img id="gear" src={require("../gear.png")} alt="gear" />
            </Link>
            <div className="keep-driving">Keep driving.</div>
          </div>
          <div className="user-info-div">
            <ul className="user-info-ul">
              <li className="user-item">
                <Link to={"/EditCar"}>peyo</Link>
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
                Description: BARO Sensor Circuit.
              </div>
            </div>
            <hr />
            <div className="comment-submit-section">
              <form
                className="comment-form"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <label className="comment">Comment:</label>
                <div className="comment">
                  <textarea
                    id="comment"
                    name="comment"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="comment-submit-button">
                  <Link to={"/DisplayVINDTCFull"}>
                    <input
                      id="comment-submit"
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

export default AddDTCComment;
