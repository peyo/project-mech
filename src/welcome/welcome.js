import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

class welcome extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <h1 className="header-primary">Mech</h1>
        </header>
        <main className="main">
          <div className="welcome-section">
            <h2 id="welcome-welcome">Welcome!</h2>
            <div id="home-link">
              <Link to={"/home"}>Keep driving.</Link>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-contact-info">Beep beep.</div>
          <br />
          <div className="footer-contact-info">
            Contact Us:
            <a className="email-connect" href="mailto:peteryyoon@gmail.com">
              Email
            </a>
          </div>
        </footer>
      </body>
    );
  }
}

export default welcome;
