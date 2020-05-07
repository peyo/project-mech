import React, { Component } from "react";
import MechContext from "../MechContext";
import { Link } from "react-router-dom";
import config from "../config";
import "./LoginRegister.css";

class LoginRegister extends Component {
  
  static contextType = MechContext;

  state = {
    car: {}
  }

  handleSubmit(e) {
    e.preventDefault();
    const { make } = e.target;
    const makeAdd = {
      make: make.value
    };
    fetch(config.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(makeAdd),
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
        this.context.addMake(data);
        this.props.history.push("/Onboarding");
      })
      .catch(error => {
        this.setState({ error })
    })
  }

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
                Mech is a community for car owners and mechanics to discuss problems and solutions based on your diagnostic trouble code (DTC).
              </div>
            </div>
            <hr />
            <div className="register-section">
              <h2>Register</h2>
              <form className="username-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="username">Username</div>
                <input tye="text" id="username-input" />
                <div className="email-label">
                  Email
                   <div className="check-email">
                    Check your email for confirmation after signup.
                  </div>
                </div>
                <input type="text" id="email-input" />
                <div className="password">Password</div>
                <input type="text" id="password-input" />
                <div className="repeat-password">Repeat Password</div>
                <input type="text" id="repeat-password-input" />
                <div className="make-login">Manufacturer</div>
                <input
                  type="text"
                  id="make-input"
                  name="make"
                />
                <div className="button-div">
                  <Link to={"/Onboarding"}>
                    <input
                      className="button"
                      type="submit"
                      placeholder="Submit"
                    />
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
                <div className="button-div">
                  <Link to={"/Home"}>
                    <input
                      className="button"
                      type="submit"
                      placeholder="Submit" />
                  </Link>
                </div>
                <div className="forgot-div">
                  <Link to={"/Forgot"}>
                    Forgot Username or Password?
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

export default LoginRegister;
