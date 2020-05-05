import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Forgot.css";

class Forgot extends Component {
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
            <div className="forgot-section">
              <h2>Forgot Your Username or Password?</h2>
              <form className="forgot-form">
                <div className="enter-email">Enter Your Email:</div>
                <input tye="text" id="email-input" value="Email Address" />
                <div className="button-div">
                  <Link to={"/EmailSent"}>
                    <input className="button" type="submit" value="Submit" />
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

export default Forgot;
