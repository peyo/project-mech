import React, { Component } from "react";
import { Route } from "react-router-dom";
import welcome from "./welcome/welcome";
import home from "./home/home";
import homeError from "./home/home-error";
import displayVINDTC from "./display-vin-dtc/display-vin-dtc";
import displayVINDTCFull from "./display-vin-dtc/display-vin-dtc-full";
import displayVINDTCVINOnly from "./display-vin-dtc/display-vin-dtc-vinOnly";
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
          path="/home"
          component={home}
        />
        <Route
          path="/home-error"
          component={homeError}
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
