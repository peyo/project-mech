import React, { Component } from "react";
import "./ForgotPage.css";

export default class ForgotPage extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <div className="ForgotPage__gear-keep-driving">
            <img id="ForgotPage__gear" src={require("../../gear.png")} alt="gear" />
            <div className="ForgotPage__keep-driving">Keep driving.</div>
          </div>
        </header>
        <main role="main">
          <section id="ForgotPage__screen-wrapper">
            <div className="ForgotPage__forgot-section">
              <h2>Forgot Your Username or Password?</h2>
              <div>
              Email peteryyoon@gmail.com.
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-contact-info">
            <div id="ForgotPage__beep-beep">Beep beep.</div>
            <br />
            <div className="ForgotPage__contact-us">
              Contact Us:&nbsp;
              <a className="ForgotPage__email-connect" href="mailto:peteryyoon@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
