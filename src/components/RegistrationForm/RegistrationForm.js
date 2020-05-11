import React, { Component } from "react";
import MechContext from "../MechContext";
import MechAPIService from "../../services/mech-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static contextType = MechContext;

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit(e){
    e.preventDefault();
    const { username, nickname, password, first_make } = e.target;

    console.log("Registration form submitted.");
    console.log({ username, nickname, password, first_make });
    username.value = "";
    nickname.value = "";
    password.value = "";
    first_make.value = "";
    this.props.onRegistrationSuccess();
    MechAPIService.postUser(first_make.value)
      .then(this.context.addUser)
      .then(() => {
        first_make.value = ""
      })
    .catch(this.context.setError)
  };

  render() {
    const { error } = this.state;

    return (
      <form
        className="LoginRegistration__username-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="LoginRegistration__username">
          Username (Email)
          {/*<div className="LoginRegistration__check-email">
            Check your email for confirmation after signup.
          </div>*/}
        </div>
        <input
          required
          type="text"
          id="LoginRegistration__username-input"
          name="username"  
        />
        <div className="LoginRegistration__nickname-label">Nickname</div>
        <input
          required
          type="text"
          id="LoginRegistration__nickname-input"
          name="nickname"
        />
        <div className="LoginRegistration__password">Password</div>
        <input
          required
          type="text"
          id="LoginRegistration__password-input"
          name="password"
        />
        {/*<div className="LoginRegistration__repeat-password">
          Repeat Password
        </div>
        <input
          required
          type="text"
          id="LoginRegistration__repeat-password-input"
          name="repeat-password"
        />*/}
        <div className="LoginRegistration__make-registration">Manufacturer</div>
        <input
          required
          type="text"
          id="LoginRegistration__make-input"
          name="first_make"
        />
        <div className="LoginRegistration__button-div">
          <button
            className="LoginRegistration__button"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
