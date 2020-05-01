import React, { Component } from "react";
import { Route } from "react-router-dom";
import welcome from "./welcome/welcome";
import home from "./home/home";
import displayVINDTC from "./display-vin-dtc/display-vin-dtc";
import displayVINDTCB from "./display-vin-dtc/display-vin-dtc-b";
import addDTCComment from "./add-dtc-comment/add-dtc-comment";
import editDTCComment from "./edit-dtc-comment/edit-dtc-comment";
import "./app.css";

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
          path="/display-vin-dtc"
          component={displayVINDTC}
        />
        <Route
          path="/display-vin-dtc-b"
          component={displayVINDTCB}
        />
        <Route
          path="/add-dtc-comment"
          component={addDTCComment}
        />
        <Route
          path="/edit-dtc-comment"
          component={editDTCComment}
        />
      </div>
    );
  }
}

export default App;
