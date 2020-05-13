import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const html = document.createElement("html");
  ReactDOM.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});