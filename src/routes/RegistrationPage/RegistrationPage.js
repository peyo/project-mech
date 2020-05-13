import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess(e) {
    const { history } = this.props;
    history.push("/login");
  }

  render() {
    return (
      <body>
        <main role="main">
          <section id="RegistrationPage__screen-wrapper">
            <div className="RegistrationPage__mech-welcome-section">
              <h2>Register</h2>
              <div className="RegistrationPage__welcome-description">
                <RegistrationForm
                  onRegistrationSuccess={(e) => 
                    this.handleRegistrationSuccess(e)
                  }
                />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="RegistrationPage__footer-contact-info">
            <div id="beep-beep">Beep beep</div>
            <br />
            <div className="RegistrationPage__contact-us">
              Contact Us:&nbsp;
              <a
                className="RegistrationPage__email-connect"
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
