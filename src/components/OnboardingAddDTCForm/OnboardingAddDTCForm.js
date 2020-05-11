import React, { Component } from "react";
import MechContext from "../MechContext";
import MechAPIService from "../../services/mech-api-service";
import "./OnboardingAddDTCForm.css";

export default class OnboardingAddDTCForm extends Component {
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