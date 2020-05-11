import React, { Component } from "react";
import OnboardingAddModelForm from "../../components/OnboardingAddModelForm/OnboardingAddModelForm";
import "./OnboardingAddModelPage.css";

export default class OnboardingAddModelPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  };

  handleAddModelSuccess(e) {
    const { history } = this.props;
    history.push("/OnboardingAddDTCPage");
  }

  render() {
    return (
      <body>
        <header role="banner">
          <div className="OnboardingAddModelPage__gear-keep-driving">
            <img
              id="OnboardingAddModelPage__gear"
              src={require("../gear.png")}
              alt="gear"
            />
            <div className="OnboardingAddModelPage__keep-driving">
              Keep driving.
            </div>
          </div>
        </header>
        <main role="main">
          <section id="OnboardingAddModelPage__screen-wrapper">
            <div className="OnboardingAddModelPage__car-section">
              <h2>Your Car</h2>
              <OnboardingAddModelForm
                onAddModelSuccess={(e) => this.handleAddModelSuccess(e)}
              />
            </div>
          </section>
        </main>
        <footer>
          <div className="OnboardingAddModelPage__footer-contact-info">
            <div id="OnboardingAddModelPage__beep-beep">Beep beep.</div>
            <br />
            <div className="OnboardingAddModelPage__contact-us">
              Contact Us:&nbsp;
              <a
                className="OnboardingAddModelPage__email-connect"
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
