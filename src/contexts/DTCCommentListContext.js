import React, { Component } from 'react'

const DTCCommentListContext = React.createContext({
  dtcCommentList: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setDTCCommentList: () => { },
})
export default DTCCommentListContext

export class DTCCommentListProvider extends Component {
  state = {
    dtcCommentList: [],
    error: null,
  };

  setDTCCommentList = dtcCommentList => {
    this.setState({ dtcCommentList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      dtcCommentList: this.state.dtcCommentList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDTCCommentList: this.setDTCCommentList,
    }
    return (
      <DTCCommentListContext.Provider value={value}>
        {this.props.children}
      </DTCCommentListContext.Provider>
    )
  }
}
