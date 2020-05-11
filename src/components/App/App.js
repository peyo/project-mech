import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "../../config";
import WelcomePage from "../../routes/WelcomePage/WelcomePage";
import LoginRegistrationPage from "./LoginRegistrationPage/LoginRegistrationPage";
import ForgotPage from "../../routes/ForgotPage/ForgotPage";
import OnboardingAddModelPage from "./OnboardingAddModelPage/OnboardingAddModelPage";
import OnboardingAddDTCPage from "./OnboardingAddDTCPage/OnboardingAddDTCPage";

import Home from "../../Home/Home";
import DisplayVINDTC from "../../DisplayVINDTC/DisplayVINDTC";
import DisplayVINDTCFull from "../../DisplayVINDTCFull/DisplayVINDTCFull";
import EditDTC from "../../EditDTC/EditDTC";
import EditCar from "../../EditCar/EditCar";
import AddDTCComment from "../../AddDTCComment/AddDTCComment";
import EditDTCComment from "../../EditDTCComment/EditDTCComment";
import DeleteDTCComment from "../../DeleteDTCComment/DeleteDTCComment";
import MechContext from "../../contexts/MechContext";

class App extends Component {
  getDTCComments = () => {
    fetch(config.API_ENDPOINT + `/comments`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((comments) => this.setState({ comments }))
      .catch((error) => {
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.getDTCComments();
  }

  render() {
    const contextValue = {
      user: this.state.user,
      addMake: this.addMake,
      addModel: this.addModel,
      addDTC: this.addDTC,
      getDTCComments: this.getDTCComments,
    };

    return (
      <html className="mech-app">
        <MechContext.Provider value={contextValue}>
          <Route
            exact
            path="/"
            component={WelcomePage}
          />
          <Route
            path="/LoginRegistrationPage"
            component={LoginRegistrationPage}
          />
          <Route
            path="/ForgotPage"
            component={ForgotPage}
          />
          <Route
            path="/OnboardingAddModelPage"
            component={OnboardingAddModelPage}
          />
          <Route
            path="/OnboardingAddDTCPage"
            component={OnboardingAddDTCPage}
          />

          <Route path="/Home" component={Home} />
          <Route exact path="/DisplayVINDTC" component={DisplayVINDTC} />
          <Route path="/DisplayVINDTCFull" component={DisplayVINDTCFull} />
          <Route path="/EditDTC" component={EditDTC} />
          <Route exact path="/EditCar" component={EditCar} />
          <Route path="/AddDTCComment" component={AddDTCComment} />
          <Route path="/EditDTCComment" component={EditDTCComment} />
          <Route path="/DeleteDTCComment" component={DeleteDTCComment} />
        </MechContext.Provider>
      </html>
    );
  }
}

export default App;
