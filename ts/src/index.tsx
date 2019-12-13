import * as React from "react";
import * as ReactDOM from "react-dom";
import Bot from "./components/bot";

window.addEventListener("load", () => {
  const botContainer = document.getElementsByClassName("metamind-bot-container")[0];

  if (botContainer) {
    const initParams: string | null = botContainer.getAttribute("data-init-params");
    ReactDOM.render(<Bot initParams={ initParams }></Bot>, botContainer);
  }
});