import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick(e) {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={(e) => this.handleLogoutClick(e)}>
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register" className="Header__register">
          Register
        </Link>
        <Link to="/login" className="Header__login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="DtcCommentListPage__header">
        <div className="DtcCommentListPage__gear-keep-driving">
          <Link to="/">
            <img
              id="DtcCommentListPage__gear"
              src={require("../../gear.png")}
              alt="gear"
            />
          </Link>
        </div>
        <div className="DtcCommentListPage__logged-in-not-logged-in">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    );
  }
}
