import React, { Component } from "react";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import "./CarForm.css";

export default class CarForm extends Component {
  static contextType = MechContext;
  
  state = {
    error: null
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: null });
    const { make, model } = e.target;

    MechApiService.postCar({
      make: make.value,
      model: model.value,
    })
      .then(this.context.addCar)
      .then(() => {
        make.value = "";
        model.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    const { error } = this.state;

    return (
      <form
        className="CarForm__form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="CarForm__dtc">Manufacturer</div>
        <input type="text" id="CarForm__dtc-input" name="make" />
        <div className="CarForm__dtc">Model</div>
        <input type="text" id="CarForm__dtc-input" name="model" />
        <div className="CarForm__button-div">
          <button className="CarForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
