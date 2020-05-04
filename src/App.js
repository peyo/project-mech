import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./welcome/welcome";
import Home from "./home/home";
import LoginRegister from "./login-register/login-register";
import Onboarding from "./onboarding/onboarding";
import AddDTC from "./add-dtc/add-dtc";
import DisplayVINDTC from "./display-vin-dtc/display-vin-dtc";
import DisplayVINDTCFull from "./display-vin-dtc-full/display-vin-dtc-full";
import DisplayVINDTCVINOnly from "./display-vin-dtc-vinOnly/display-vin-dtc-vinOnly";
import EditCar from "./edit-car/edit-car";
import AddDTCComment from "./add-dtc-comment/add-dtc-comment";
import EditDTCComment from "./edit-dtc-comment/edit-dtc-comment";
import DeleteDTCComment from "./delete-dtc-comment/delete-dtc-comment";

class App extends Component {
  render() {
    return (
      <html className="mech-app">
        <Route
          exact path="/"
          component={Welcome}
        />
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/login-register"
          component={LoginRegister}
        />
        <Route
          path="/onboarding"
          component={Onboarding}
        />
        <Route
          exact path="/add-dtc"
          component={AddDTC}
        />
        <Route
          exact path="/display-vin-dtc"
          component={DisplayVINDTC}
        />
        <Route
          path="/display-vin-dtc-full"
          component={DisplayVINDTCFull}
        />
        <Route
          path="/display-vin-dtc-vinOnly"
          component={DisplayVINDTCVINOnly}
        />
        <Route
          exact path="/edit-car"
          component={EditCar}
        />
        <Route
          path="/add-dtc-comment"
          component={AddDTCComment}
        />
        <Route
          path="/edit-dtc-comment"
          component={EditDTCComment}
        />
        <Route
          path="/delete-dtc-comment"
          component={DeleteDTCComment}
        />
      </html>
    );
  }
}

export default App;
