import "./styles/main.scss";
import Tooltip from "./modules/tooltip";
import Dropdown from "./modules/dropdown";
import Tabs from "./modules/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
const tabs = new Tabs(document.querySelector(".tab"));
