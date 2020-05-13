import React, { Component } from "react";
import { Link } from "react-router-dom";
import OnboardingAddDTCForm from "../../components/OnboardingAddDTCForm/OnboardingAddDTCForm";
import "./OnboardingAddDTCPage.css";

export default class OnboardingAddDTCPage extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  };

  handleAddDTCSuccess(e) {
    const { history } = this.props;
    history.push("/HomePage");
  }

  render() {
    return (
      <body>
        <header role="banner">
          <div className="OnboardingAddDTCPage__gear-keep-driving">
            <Link to={"/Home"}>
              <img id="OnboardingAddDTCPage__gear" src={require("../../gear.png")} alt="gear" />
            </Link>
            <div className="OnboardingAddDTCPage__keep-driving">Keep driving.</div>
          </div>
        </header>
        <main role="main">
          <section id="OnboardingAddDTCPage__screen-wrapper">
            <div className="OnboardingAddDTCPage__dtc-section">
              <h2>Trouble Code</h2>
              <OnboardingAddDTCForm
                onAddDTCSuccess={(e) => this.handleAddDTCSuccess(e)}
              />
            </div>
          </section>
        </main>
        <footer>
          <div className="OnboardingAddDTCPage__footer-contact-info">
            <div id="OnboardingAddDTCPage__beep-beep">Beep beep.</div>
            <br />
            <div className="OnboardingAddDTCPage__contact-us">
              Contact Us:&nbsp;
              <a className="OnboardingAddDTCPage__email-connect" href="mailto:peteryyoon@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
