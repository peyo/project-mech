import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login-register.css";

class LoginRegister extends Component {
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
            <div className="mech-welcome-section">
              <h2>Welcome to Mech.</h2>
              <div className="welcome-description">
                Mech is a community for car owners and mechanics to discuss problems and solutions based on DTC.
              </div>
            </div>
            <hr />
            <div className="register-section">
              <h2>Register</h2>
              <form className="username-form">
                <div className="username">Username</div>
                <input tye="text" id="username-input" />
                <div className="email">Email</div>
                <input tye="text" id="email-input" />
                <div className="password">Password</div>
                <input tye="text" id="password-input" />
                <div className="repeat-password">Repeat Password</div>
                <input tye="text" id="repeat-password-input" />
                <div id="vin-make-wrapper">
                <div className="or">VIN or Make</div>
                <div className="vin">VIN</div>
                <input tye="text" id="vin-input" />
                <div className="make">Make</div>
                <input tye="text" id="make-input" />
                <Link to={"/onboarding"}>
                  <input className="button" type="submit" value="Submit" />
                </Link>
                </div>
              </form>
            </div>
            <hr />
            <div className="login-section">
              <h2>Login</h2>
              <form className="login-form">
                <div className="username">Username</div>
                <input tye="text" id="username-input" />
                <div className="password">Password</div>
                <input tye="text" id="password-input" />
                <Link to={"/home"}>
                  <input className="button" type="submit" value="Submit" />
                </Link>
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

export default LoginRegister;
