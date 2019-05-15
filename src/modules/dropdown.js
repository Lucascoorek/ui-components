import "../styles/dropdown.scss";

export default class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector(".dropdown_trigger");
    this.content = container.querySelector(".dropdown_content");
  }
  init() {
    this.trigger.addEventListener("click", () => {
      this.trigger.classList.toggle("dropdown_trigger--active");
      this.content.classList.toggle("dropdown_content--active");
    });
  }
}
