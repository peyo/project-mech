import React from "react";

const MechContext = React.createContext({
  user: {},
  car: {},
  dtc: {},
  comments: [],
  addMake: () => { },
  addModel: () => { },
  addDTC: () => { },
  getDTCComments: () => { },
  editComment: () => { }
})

export default MechContext;