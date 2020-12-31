import React, { Component } from "react";

const MechContext = React.createContext({
  error: null,
  dtcCommentList: [],
  carList: [],
  vinMake: [],
  carVinMakeId: [],
  selectedCar: [],
  addedDtc: [],
  filteredDtcComments: [],
  filteredDtcCommentList: [],
  headerDtc: [],
  specificDtcCommentList: [],
  user_id: localStorage.user_id || null,
  setError: () => {},
  clearError: () => {},
  setDtcCommentList: () => {},
  setVinMake: () => {},
  setCarVinMakeId: () => {},
  setCarList: () => {},
  addCar: () => {},
  deleteCar: () => {},
  selectCar: () => {},
  setDtcSearch: () => {},
  setFilteredCommentList: () => {},
  setHeaderDtc: () => {},
  setSpecificDtcCommentList: () => {},
  addComment: () => { },
  setUser: [],
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
    filteredDtcComments: [],
    filteredDtcCommentList: [],
    headerDtc: [],
    specificDtcCommentList: [],
    user_id: localStorage.user_id || null,
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
    this.setState({ vinMake });
  };

  setCarVinMakeId = (vinMakeOfCar) => {
    this.setState({ carVinMakeId: vinMakeOfCar });
  };

  setCarList = (carList) => {
    this.setState({ carList });
  };

  addCar = (car) => {
    this.setState({
      carList: [...this.state.carList, car],
    });
  };

  deleteCar = (carId) => {
    const newCarList = this.state.carList.filter((car) => car.id !== carId);
    this.setState({ carList: newCarList });
  };

  selectCar = (selectedCar) => {
    this.setState({ selectedCar });
  };

  addDtc = (addedDtc) => {
    this.setState({ addedDtc });
  };

  setDtcSearch = (filteredDtcComments) => {
    this.setState({ filteredDtcComments });
  };

  setFilteredCommentList = (filteredDtcCommentList) => {
    this.setState({ filteredDtcCommentList });
  };

  setHeaderDtc = (headerDtc) => {
    this.setState({ headerDtc });
  };

  setSpecificDtcCommentList = (specificDtcCommentList) => {
    this.setState({ specificDtcCommentList });
  };

  addComment = (post) => {
    this.setState({
      filteredDtcCommentList: [...this.state.filteredDtcCommentList, post],
    });
  };

  deleteComment = (commentId) => {
    const newCommentListA = this.state.filteredDtcCommentList.filter(
      (comment) => comment.id !== commentId
    );
    const newCommentListB = this.state.specificDtcCommentList.filter(
      (comment) => comment.id !== commentId
    );
    this.setState({ filteredDtcCommentList: newCommentListA });
    this.setState({ specificDtcCommentList: newCommentListB });
  };

  setUser = (payload) => {
    this.setState({ user_id: payload.user_id });
    localStorage.user_id = payload.user_id;
  };

  render() {
    const contextValue = {
      error: this.state.error,
      dtcCommentList: this.state.dtcCommentList,
      carList: this.state.carList,
      vinMake: this.state.vinMake,
      carVinMakeId: this.state.carVinMakeId,
      selectedCar: this.state.selectedCar,
      addedDtc: this.state.addedDtc,
      filteredDtcComments: this.state.filteredDtcComments,
      filteredDtcCommentList: this.state.filteredDtcCommentList,
      headerDtc: this.state.headerDtc,
      specificDtcCommentList: this.state.specificDtcCommentList,
      user_id: this.state.user_id,
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
      setFilteredCommentList: this.setFilteredCommentList,
      setHeaderDtc: this.setHeaderDtc,
      setSpecificDtcCommentList: this.setSpecificDtcCommentList,
      addComment: this.addComment,
      deleteComment: this.deleteComment,
      setUser: this.setUser,
    };
    return (
      <MechContext.Provider value={contextValue}>
        {this.props.children}
      </MechContext.Provider>
    );
  }
}
