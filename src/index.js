import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MechProvider } from "./contexts/MechContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faCar } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

library.add(faComment, faCar);

ReactDOM.render(
  <BrowserRouter>
    <MechProvider>
      <App />
    </MechProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
