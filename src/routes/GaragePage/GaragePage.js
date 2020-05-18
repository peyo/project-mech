import React, { Component } from "react";
import CarForm from "../../components/CarForm/CarForm";
import CarListItem from "../../components/CarListItem/CarListItem";
import CarSelectDropdown from "../../components/CarSelectDropdown/CarSelectDropdown";
import DtcForm from "../../components/DtcForm/DtcForm";
import MechContext from "../../contexts/MechContext";
import MechApiService from "../../services/mech-api-service";
import { Section } from "../../components/Utility/Utility";
import "./GaragePage.css";

export default class GaragePage extends Component {
  static contextType = MechContext
  
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  componentDidMount() {
    const {
      setCarList,
      setError,
    } = this.context;

    this.context.clearError();
    MechApiService.getCarByUserId()
      .then(setCarList)
      .catch(setError)
  }

  handleAddCarSuccess(e) {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/garage";
    history.push(destination);
  }

  renderCarList() {
    const { carList = [] } = this.context;
    return carList.map((car) => (
      <CarListItem
        key={car.id}
        car={car}
      />
    ))
  }

  handleAddDtcSuccess(e) {
    e.preventDefault()
    this.props.history.push("/searchDtc");
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
            <Section list className="GaragePage__cars">
              {this.renderCarList()}
            </Section>
          </div>
          <hr />
          <div className="GaragePage__selection">
            <h2>Select Car</h2>
            <div className="GaragePage__car-dropdown">
                <CarSelectDropdown />
            </div>
          </div>
          <hr />
          <div className="GaragePage__add-dtc">
            <h2>Add Trouble Code</h2>
            <DtcForm
              onSubmit={(e) => {
                this.handleAddDtcSuccess(e);
              }}
            />
          </div>
        </div>
      </main>
    );
  }
}
