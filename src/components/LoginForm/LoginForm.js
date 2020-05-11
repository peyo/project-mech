import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css"

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth(e){
    e.preventDefault();
    const { username, password } = e.target;

    console.log("Login form submitted.");
    console.log({ username, password });

    username.value = ""
    password.value = ""
    this.props.onLoginSuccess()
  };

  render() {
    const { error } = this.state;

    return (
      <form
        className="LoginRegister__login-form"
        onSubmit={(e) => this.handleSubmitBasicAuth(e)}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="LoginRegister__username">Username</div>
        <input required type="text" id="LoginRegister__username-input" />
        <div className="password">Password</div>
        <input required type="text" id="LoginRegister__password-input" />
        <div className="LoginRegister__button-div">
          <Link to={"/Home"}>
            <input
              className="LoginRegister__button"
              type="submit"
              placeholder="Submit"
            />
          </Link>
        </div>
        <div className="LoginRegister__forgot-div">
          <Link to={"/ForgotPage"}>Forgot Username or Password?</Link>
        </div>
      </form>
    );
  }
}
