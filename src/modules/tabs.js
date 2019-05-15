import "../styles/tabs.scss";
export default class Tabs {
  constructor(element) {
    this.element = element;
    this.tabs = element.querySelectorAll(".tab_trigger");
  }
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        if (e.target.tagName === "LI") {
          this.tabsToggle(e);
          this.contentToggle(e);
        }
      });
    });
  }
  tabsToggle(e) {
    this.tabs.forEach(tab => tab.classList.remove("tab_trigger--active"));
    e.target.classList.add("tab_trigger--active");
  }
  contentToggle(e) {
    this.element
      .querySelectorAll(".tab_content")
      .forEach(content => content.classList.remove("tab_content--active"));
    const selector = e.target.getAttribute("data-target");
    this.element.querySelector(selector).classList.add("tab_content--active");
  }
}
