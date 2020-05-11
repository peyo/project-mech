import React, { Component } from "react";

export const nullUser = {
  username: {},
  nickname: {},
  first_make: {},
}

const MechContext = React.createContext({
  user: nullUser,
  cars: [],
  dtc: {},
  comments: [],
  addCar: () => { },
})

export default MechContext

export class MechProvider extends Component {
  state = {
    user: nullUser,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  };

  setUser = user => {
    this.setState({ user })
  };

  addUser = (user) => {
    this.setUser([
      ...this.state.user,
      user
    ])
  };

  setCars = cars => {
    this.setState({ cars })
  };

  addCar = (car) => {
    this.setCars([
      ...this.state.cars,
      car
    ])
  };

  render() {
    const value = {
      car: this.state.car,
      setError: this.setError,
      setCars: this.setCars,
      addCar: this.addCar,
    }
    return (
      <MechContext.Provider value={value}>
        {this.props.children}
      </MechContext.Provider>
    )
  }
}