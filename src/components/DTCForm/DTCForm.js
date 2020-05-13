import React, { Component } from "react";
import "./DtcForm.css";

export default class DtcForm extends Component {
  static defaultProps = {
    onAddDtcSuccess: () => {},
  };

  state = { error: null };

  handleSubmit(e) {
    e.preventDefault();
    const { dtc } = e.target;

    console.log("Added DTC successfully.");
    console.log({ dtc });

    dtc.value = "";
    this.props.onAddDtcSuccess();
  }

  render() {
    const { error } = this.state;

    return (
      <form
        className="DtcForm__form"
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="DtcForm__dtc">DTC</div>
        <input type="text" id="DtcForm__dtc-input" name="dtc" />
        <div className="DtcForm__submit-wrapper">
          <button className="DtcForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
