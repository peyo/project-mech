import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static contextType = MechContext;

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit(e) {
    e.preventDefault();
    const { username, nickname, password } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      nickname: nickname.value,
      password: password.value
    })
      .then(() => {
        username.value = "";
        nickname.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;

    return (
      <form
        className="RegisterForm__username-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div role="alert">{error && <p className="RegisterForm__orange">{error}</p>}</div>
        <div className="RegisterForm__username">
          Username (Email)
          {/*<div className="RegisterForm__check-email">
            Check your email for confirmation after signup.
          </div>*/}
        </div>
        <input
          required
          type="text"
          id="RegisterForm__username-input"
          name="username"
        />
        <div className="RegisterForm__nickname-label">Nickname</div>
        <input
          required
          type="text"
          id="RegisterForm__nickname-input"
          name="nickname"
        />
        <div className="RegisterForm__password">Password</div>
        <input
          required
          type="text"
          id="RegisterForm__password-input"
          name="password"
        />
        {/*<div className="RegisterForm__repeat-password">
          Repeat Password
        </div>
        <input
          required
          type="text"
          id="RegisterForm__repeat-password-input"
          name="repeat-password"
        />*/}
        <div className="RegisterForm__button-div">
          <button className="RegisterForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
