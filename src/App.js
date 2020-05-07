import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "./config";
import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import LoginRegister from "./LoginRegister/LoginRegister";
import Forgot from "./Forgot/Forgot";
import EmailSent from "./EmailSent/EmailSent";
import Onboarding from "./Onboarding/Onboarding";
import AddDTC from "./AddDTC/AddDTC";
import DisplayVINDTC from "./DisplayVINDTC/DisplayVINDTC";
import DisplayVINDTCFull from "./DisplayVINDTCFull/DisplayVINDTCFull";
import EditDTC from "./EditDTC/EditDTC";
import EditCar from "./EditCar/EditCar";
import AddDTCComment from "./AddDTCComment/AddDTCComment";
import EditDTCComment from "./EditDTCComment/EditDTCComment";
import DeleteDTCComment from "./DeleteDTCComment/DeleteDTCComment";
import MechContext from "./MechContext";

class App extends Component {
  state = {
    user: {},
    car: {},
    dtc: {},
    comments: [],
  };

  addMake = (make) => {
    this.setState({
      car: {
        make,
      },
    });
  };

  addModel = (model) => {
    this.setState({
      car: {
        model,
      },
    });
  };

  addDTC = (DTC) => {
    this.setState({
        DTC
      },
    );
  };

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
      .catch((error) => {this.setState({ error })});
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
          <Route exact path="/" component={Welcome} />
          <Route path="/Home" component={Home} />
          <Route path="/LoginRegister" component={LoginRegister} />
          <Route path="/Forgot" component={Forgot} />
          <Route path="/EmailSent" component={EmailSent} />
          <Route path="/Onboarding" component={Onboarding} />
          <Route exact path="/AddDTC" component={AddDTC} />
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
