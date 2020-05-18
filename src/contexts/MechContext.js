import React, { Component } from "react";

const MechContext = React.createContext({
  error: null,
  dtcCommentList: [],
  carList: [],
  vinMake: [],
  carVinMakeId: [],
  selectedCar: [],
  addedDtc: [],
  filteredDtcCommentList: [],
  setError: () => { },
  clearError: () => { },
  setDtcCommentList: () => { },
  setVinMake: () => { },
  setCarVinMakeId: () => { },
  setCarList: () => { },
  addCar: () => { },
  deleteCar: () => { },
  selectCar: () => { },
  setDtcSearch: () => { },
});

export default MechContext;

export class MechProvider extends Component {
  state = {
    dtcCommentList: [],
    carList: [],
    vinMake: [],
    carVinMakeId: [],
    selectedCar: [],
    addedDtc: [],
    filteredDtcCommentList: [],
    error: null,
  };

  setError = (error) => {
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setDtcCommentList = (dtcCommentList) => {
    this.setState({ dtcCommentList });
  };

  setVinMake = (vinMake) => {
    this.setState({ vinMake })
  }

  setCarVinMakeId = (vinMakeOfCar) => {
    this.setState({ carVinMakeId: vinMakeOfCar })
  }

  setCarList = (carList) => {
    this.setState({ carList });
  };

  addCar = (car) => {
    this.setState({
      carList: [...this.state.carList, car]
    })
  }

  deleteCar = (carId) => {
    const newCarList = this.state.carList.filter(car => car.id !== carId)
    this.setState({ carList: newCarList });
  }

  selectCar = (selectedCar) => {
    this.setState({ selectedCar });
    console.log(this.state.selectedCar)
  }

  addDtc = (addedDtc) => {
    this.setState({ addedDtc });
  }

  setDtcSearch = (filteredDtcCommentList) => {
    this.setState({ filteredDtcCommentList })
    console.log(this.state.filteredDtcCommentList)
  }

  render() {
    const contextValue = {
      error: this.state.error,
      dtcCommentList: this.state.dtcCommentList,
      carList: this.state.carList,
      vinMake: this.state.vinMake,
      carVinMakeId: this.state.carVinMakeId,
      selectedCar: this.state.selectedCar,
      addedDtc: this.state.addedDtc,
      filteredDtcCommentList: this.state.filteredDtcCommentList,
      setError: this.setError,
      clearError: this.clearError,
      setDtcCommentList: this.setDtcCommentList,
      setVinMake: this.setVinMake,
      setCarVinMakeId: this.setCarVinMakeId,
      setCarList: this.setCarList,
      addCar: this.addCar,
      deleteCar: this.deleteCar,
      selectCar: this.selectCar,
      setDtcSearch: this.setDtcSearch,
    };
    return (
      <MechContext.Provider value={contextValue}>
        {this.props.children}
      </MechContext.Provider>
    );
  }
}
