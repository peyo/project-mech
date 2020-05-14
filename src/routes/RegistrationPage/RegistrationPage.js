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
      <main className="RegistrationPage__main">
        <div className="RegistrationPage__screen-wrapper">
          <div className="RegistrationPage__registration-section">
            <h2>Register</h2>
            <div className="RegistrationPage__registration-form">
              <RegistrationForm
                onRegistrationSuccess={(e) => this.handleRegistrationSuccess(e)}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
