import "../styles/snackbar.scss";

export default class Snackbar {
  constructor(element) {
    this.element = element;
    this.snackbar = document.createElement("div");
    this.snackbar.classList.add("snackbar_modal");
    console.log(this.snackbar);
  }
  init(message) {
    this.snackbar.textContent = message;
    document.querySelector("body").appendChild(this.snackbar);
    this.element.addEventListener("click", () => {
      this.snackbar.classList.add("snackbar_modal--active");
      setTimeout(() => {
        this.snackbar.classList.remove("snackbar_modal--active");
      }, 4000);
    });
  }
}
