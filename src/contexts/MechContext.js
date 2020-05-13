import React, { Component } from "react";

export const nullUser = {
  username: {},
  nickname: {},
};

const MechContext = React.createContext({
  user: nullUser,
});

export default MechContext;

export class MechProvider extends Component {
  state = {
    user: nullUser,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  addUser = (user) => {
    this.setUser([...this.state.user, user]);
  };

  render() {
    const value = {
      user: this.state.user,
    };
    return (
      <MechContext.Provider value={value}>
        {this.props.children}
      </MechContext.Provider>
    );
  }
}
