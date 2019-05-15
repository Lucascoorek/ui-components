import "./styles/main.scss";
import Tooltip from "./modules/tooltip";
import Dropdown from "./modules/dropdown";
import Tabs from "./modules/tabs";
import Snackbar from "./modules/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
const tabs = new Tabs(document.querySelector(".tab"));
tabs.init();

const snackbar = new Snackbar(document.querySelector(".snackbar"));
snackbar.init("You have clicked me!");
