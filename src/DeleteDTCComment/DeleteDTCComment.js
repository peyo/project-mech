import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../MechContext";
import "./DeleteDTCComment.css";

class DeleteDTCComment extends Component {
  
  static contextType = MechContext;

  state = {
    cars: {},
    comments: [],
    dtc: {}
  };
  
  render() {

    const { car, comments, dtc } = this.context;

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
                Description: {dtc.description}.
              </div>
            </div>
            <hr/>
            <div className="dtc-comment-section">
              <div className="dtc-comment-date">peyo - 4/30/2020 - 11:46 AM</div>
              <div className="dtc-comment">
                <ul className="DisplayVINDTCFull_comment-list">
                {comments.map((comment) =>
                  comment.DTC_id === parseInt(this.props.match.params.DTCId) ? (
                    <li key={comment.id} className="DisplayVINDTCFull_comment">
                      <p className="DisplayVINDTCFull_comment-text">
                        {comment.text}
                      </p>
                    </li>
                  ) : null
                )}
                </ul>
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
