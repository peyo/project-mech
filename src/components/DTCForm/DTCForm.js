import React, { Component } from "react";
import "./DTCForm.css";

export default class DTCForm extends Component {
  static defaultProps = {
    onAddDTCSuccess: () => {},
  };

  state = { error: null };

  handleSubmit(e) {
    e.preventDefault();
    const { dtc } = e.target;

    console.log("Added DTC successfully.");
    console.log({ dtc });

    dtc.value = "";
    this.props.onAddDTCSuccess();
  }

  render() {
    const { error } = this.state;

    return (
      <form
        className="DTCForm__form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="DTCForm__dtc">DTC</div>
        <input type="text" id="DTCForm__dtc-input" name="dtc" />
        <div className="DTCForm__submit-wrapper">
          <button className="DTCForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
