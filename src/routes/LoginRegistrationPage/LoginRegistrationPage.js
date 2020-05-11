import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../compnents/RegistrationForm/RegistrationForm";
import "./LoginRegistrationPage.css";

export default class LoginRegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess(e){
    const { history } = this.props
    history.push("/OnboardingPage")
  }

  handleLoginSuccess(e){
    const { location, history } = this.props
    const destination = (location.state || {}).from || "/HomePage"
    history.push(destination)
  }

  render() {
    return (
      <body>
        <header role="banner">
          <div className="LoginRegistration__gear-keep-driving">
            <img
              id="LoginRegistration__gear"
              src={require("../gear.png")}
              alt="gear"
            />
            <div className="LoginRegistration__keep-driving">Keep driving.</div>
          </div>
        </header>
        <main role="main">
          <section id="LoginRegistration__screen-wrapper">
            <div className="LoginRegistration__mech-welcome-section">
              <h2>Welcome to Mech.</h2>
              <div className="LoginRegistration__welcome-description">
                Mech is a community for car owners and mechanics to discuss
                problems and solutions based on your diagnostic trouble code
                (DTC).
              </div>
            </div>
            <hr />
            <div className="LoginRegistration__registration-section">
              <h2>Registration</h2>
              <RegistrationForm
                onRegistrationSuccess={(e) => this.handleRegistrationSuccess(e)}
              />
            </div>
            <hr />
            <div className="LoginRegistration__login-section">
              <h2>Login</h2>
              <LoginForm onLoginSuccess={(e) => this.handleLoginSuccess(e)} />
            </div>
          </section>
        </main>
        <footer>
          <div className="LoginRegistration__footer-contact-info">
            <div id="beep-beep">Beep beep.</div>
            <br />
            <div className="LoginRegistration__contact-us">
              Contact Us:&nbsp;
              <a className="LoginRegistration__email-connect" href="mailto:peteryyoon@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}