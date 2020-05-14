import React, { Component } from "react";
import CarForm from "../../components/CarForm/CarForm";
import DtcForm from "../../components/DtcForm/DtcForm";
import "./GaragePage.css";

export default class GaragePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleAddCarSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/garage";
    history.push(destination);
  }

  handleAddDtcSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/garage";
    history.push(destination);
  }

  render() {
    return (
      <main className="GaragePage__main">
        <div className="GaragePage__screen-wrapper">
          <div className="GaragePage__add-car">
            <h2>Add Car</h2>
            <CarForm
              onSubmitSuccess={(e) => {
                this.handleAddCarSuccess(e);
              }}
            />
          </div>
          <hr />
          <div className="GaragePage__list">
            <h2>Your Car(s)</h2>
          </div>
          <hr />
          <div className="GaragePage__selection">
            <h2>Select Car</h2>
          </div>
          <hr />
          <div className="GaragePage__add-dtc">
            <h2>Add Trouble Code</h2>
            <DtcForm
              onSubmitSuccess={(e) => {
                this.handleAddDtcSuccess(e);
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}
