import React, { Component } from "react";
import { Route } from "react-router-dom";
import welcome from "./welcome/welcome";
import loginRegister from "./login-register/login-register";
import onboarding from "./onboarding/onboarding";
import addDTC from "./add-dtc/add-dtc";
import displayVINDTC from "./display-vin-dtc/display-vin-dtc";
import displayVINDTCFull from "./display-vin-dtc-full/display-vin-dtc-full";
import displayVINDTCVINOnly from "./display-vin-dtc-vinOnly/display-vin-dtc-vinOnly";
import editCar from "./edit-car/edit-car";
import addDTCComment from "./add-dtc-comment/add-dtc-comment";
import editDTCComment from "./edit-dtc-comment/edit-dtc-comment";
import deleteDTCComment from "./delete-dtc-comment/delete-dtc-comment";

class App extends Component {
  render() {
    return (
      <div className="mech-app" aria-live="polite">
        <Route
          exact path="/"
          component={welcome}
        />
        <Route
          path="/login-register"
          component={loginRegister}
        />
        <Route
          path="/onboarding"
          component={onboarding}
        />
        <Route
          path="/add-dtc"
          component={addDTC}
        />
        <Route
          path="/display-vin-dtc"
          component={displayVINDTC}
        />
        <Route
          path="/display-vin-dtc-full"
          component={displayVINDTCFull}
        />
        <Route
          path="/display-vin-dtc-vinOnly"
          component={displayVINDTCVINOnly}
        />
        <Route
          path="/edit-car"
          component={editCar}
        />
        <Route
          path="/add-dtc-comment"
          component={addDTCComment}
        />
        <Route
          path="/edit-dtc-comment"
          component={editDTCComment}
        />
        <Route
          path="/delete-dtc-comment"
          component={deleteDTCComment}
        />
      </div>
    );
  }
}

export default App;
