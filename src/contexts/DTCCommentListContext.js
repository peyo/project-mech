import React, { Component } from 'react'

const DtcCommentListContext = React.createContext({
  dtcCommentList: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setDtcCommentList: () => { },
})

export default DtcCommentListContext

export class DtcCommentListProvider extends Component {
  state = {
    dtcCommentList: [],
    error: null,
  };

  setDtcCommentList = dtcCommentList => {
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
    const contextValue = {
      dtcCommentList: this.state.dtcCommentList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDtcCommentList: this.setDtcCommentList,
    }
    return (
      <DtcCommentListContext.Provider value={contextValue}>
        {this.props.children}
      </DtcCommentListContext.Provider>
    )
  }
}
