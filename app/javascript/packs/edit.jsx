import React from "react";
import ReactDOM from "react-dom";
import Edit from "../templates/Edit";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Edit />,
    document.body.appendChild(document.createElement("div"))
  );
});
