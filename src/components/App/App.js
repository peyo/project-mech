import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//import WelcomePage from "../../routes/WelcomePage/WelcomePage";
import DTCCommentListPage from "../../routes/DTCCommentListPage/DTCCommentListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ForgotPage from "../../routes/ForgotPage/ForgotPage";
import HomePage from "../../routes/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="mech-app">
        <Switch>
          <Route exact path="/" component={DTCCommentListPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/forgot" component={ForgotPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
