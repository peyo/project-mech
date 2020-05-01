import React from "react";

const MechContext = React.createContext({
  comments: [],
  addVIN: () => { },
  clearVIN: () => { },
  addDTC: () => { },
  clearDTC: () => { },
  addComment: () => { },
  updateComment: () => { },
  deleteComment: () => { }
})

export default MechContext;