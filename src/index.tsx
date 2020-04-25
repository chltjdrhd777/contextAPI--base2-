import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

createGlobalStyle`
  ${reset};
  body{
    background-color: #ecf0f1;
  } 
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
