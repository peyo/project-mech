import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
  }

  render() {
    return (
      <body>
        <main role="main">
          <section id="LoginPage__screen-wrapper">
            <div className="LoginPage__mech-welcome-section">
              <h2>Log in</h2>
              <div className="LoginPage__welcome-description">
                <LoginForm
                  onLoginSuccess={(e) => {
                    this.handleLoginSuccess(e);
                  }}
                />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="LoginPage__footer-contact-info">
            <div id="beep-beep">Beep beep.</div>
            <br />
            <div className="LoginPage__contact-us">
              Contact Us:&nbsp;
              <a
                className="LoginPage__email-connect"
                href="mailto:peteryyoon@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
