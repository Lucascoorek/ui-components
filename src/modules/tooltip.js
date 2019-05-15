import "../styles/tooltip.scss";

export default class Tooltip {
  constructor(element) {
    this.element = element;
    this.message = element.getAttribute("data-message");
  }
  init() {
    const tip = document.createElement("div");
    tip.classList.add("tooltip_modal");
    tip.textContent = this.message;
    this.element.appendChild(tip);

    this.element.addEventListener("mouseenter", () => {
      tip.classList.add("tooltip_modal--active");
    });
    this.element.addEventListener("mouseleave", () => {
      tip.classList.remove("tooltip_modal--active");
    });
  }
}
