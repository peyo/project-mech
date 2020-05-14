import React, { Component } from "react";

const MechContext = React.createContext({
});

export default MechContext;

export class MechProvider extends Component {
  state = {
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  render() {
    const contextValue = {
      
    };
    return (
      <MechContext.Provider value={contextValue}>
        {this.props.children}
      </MechContext.Provider>
    );
  }
}
