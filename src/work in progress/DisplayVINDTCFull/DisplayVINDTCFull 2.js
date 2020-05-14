import React, { Component } from "react";
import { Link } from "react-router-dom";
import MechContext from "../../contexts/MechContext";
import "./DisplayVINDTCFull.css";

class DisplayVINDTCFull extends Component {

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
                Description: {dtc.comment}.
              </div>
              <div className="edit-dtc-wrapper">
                <Link to={"/EditDTC"}>
                  <input className="button" type="submit" value="Edit DTC" />
                </Link>
              </div>
            </div>
            <hr />
            <div className="dtc-comment-section">
              <div className="dtc-comment-user-date">
                peyo - 4/30/2020 - 11:46 AM
              </div>
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
              <div className="dtc-comment-edit-delete">
                <Link to={"/EditDTCComment"}>edit</Link>&nbsp;
                <Link to={"/DeleteDTCComment"}>delete</Link>
              </div>
              <div className="add-comment-wrapper">
                <input className="button" type="submit" value="Add Comment" />
              </div>
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

export default DisplayVINDTCFull;
