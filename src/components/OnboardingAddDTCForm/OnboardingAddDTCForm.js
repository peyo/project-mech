import React, { Component } from "react";
import MechContext from "../MechContext";
import MechAPIService from "../../services/mech-api-service";
import "./OnboardingAddDTCForm.css";

export default class OnboardingAddDTCForm extends Component {
  static contextType = MechContext;

  handleSubmit(e) {
    e.preventDefault();
    const { cars } = this.context;
    const { dtc } = e.target;
    MechAPIService.getDTC(cars.car.make, dtc.value)
      .then(this.context.getDTC)
      .then(() => {
        dtc.value = "";
      })
      .catch(this.context.setError);
  }
  
  render() {
    return (
      <form
        className="OnboardingAddDTCForm__username-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="OnboardingAddDTCForm__dtc">Your DTC</div>
        <input
          type="text"
          id="OnboardingAddDTCForm__dtc-input"
          name="dtc"
        />
        <div className="OnboardingAddDTCForm__button-div">
          <button className="OnboardingAddDTCForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}