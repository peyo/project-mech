import React from "react";
import ReactDOM from "react-dom";
import RegistrationPage from "./RegistrationPage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const html = document.createElement("html");
  ReactDOM.render(
    <BrowserRouter>
      <RegistrationPage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
