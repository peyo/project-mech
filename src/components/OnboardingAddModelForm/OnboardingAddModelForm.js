import React, { Component } from "react";
import MechContext from "../MechContext";
import MechAPIService from "../../services/mech-api-service";
import "./OnboardingAddModelForm.css";

export default class OnboardingAddModelForm extends Component {
  static contextType = MechContext;

  state = {
    user: {},
  };

  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.context;
    const { model } = e.target;
    MechAPIService.postCar(user.id, user.first_make, model.value)
      .then(this.context.addCar)
      .then(() => {
        model.value = "";
      })
      .catch(this.context.setError);
  }

  render() {
    const { user } = this.context;

    return (
      <form
        className="OnboardingAddModelForm__car-form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="OnboardingAddModelForm__make-onboarding">
          Manufacturer: {user.first_make}
        </div>
        <div className="OnboardingAddModelForm__model-onboarding">
          Your Car's Model
        </div>
        <input
          required
          type="text"
          id="OnboardingAddModelForm__model-input"
          name="model"
        />
        <div className="OnboardingAddModelForm__button-div">
          <button className="OnboardingAddModelForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
