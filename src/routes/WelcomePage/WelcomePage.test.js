import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "./WelcomePage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const html = document.createElement("html");
  ReactDOM.render(
    <BrowserRouter>
      <WelcomePage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});