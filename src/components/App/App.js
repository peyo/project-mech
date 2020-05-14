import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
//import WelcomePage from "../../routes/WelcomePage/WelcomePage";
import WelcomePage from "../../routes/WelcomePage/WelcomePage";
import DtcCommentListPage from "../../routes/DtcCommentListPage/DtcCommentListPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ForgotPage from "../../routes/ForgotPage/ForgotPage";
import GaragePage from "../../routes/GaragePage/GaragePage";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App__app">
        <div className="App__container">
          <header className="App__header">
            <Header />
          </header>
          <div className="App__route">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/home" component={DtcCommentListPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegistrationPage} />
              <Route path="/forgot" component={ForgotPage} />
              <Route path="/garage" component={GaragePage} />
            </Switch>
          </div>
        </div>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
