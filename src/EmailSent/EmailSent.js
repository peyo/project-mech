import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EmailSent.css";

class EmailSent extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="gear-keep-driving">
            <img id="gear" src={require("../gear.png")} alt="gear" />
            <div className="keep-driving">
              Keep driving.
            </div>
          </div>
        </header>
        <main role="main">
          <section id="screen-wrapper">
            <div className="email-sent-section">
              <h2>Email Sent</h2>
              <div className="email-response">
                Please follow the instructions sent to your email address.
              </div>
              <div className="back-to-login">
                <Link to={"/LoginRegister"}>
                  Back to Login
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

export default EmailSent;
