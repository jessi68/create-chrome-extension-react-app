const popup = `
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const $popup = document.getElementById("popup");
ReactDOM.render(
  <>
    <App/>
  </>,
  $popup,
);
`;

module.exports = popup;