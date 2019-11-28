import * as React from "react";
import * as ReactDOM from "react-dom";
import Bot from "./components/bot";

window.addEventListener("load", () => {
  const botContainer = document.getElementsByClassName("metamind-bot-container")[0];

  if (botContainer) {
    ReactDOM.render(<Bot></Bot>, botContainer);
  }
});