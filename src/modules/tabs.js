export default class Tabs {
  constructor(element) {
    this.element = element;
    this.tabs = element.querySelectorAll(".tab_trigger");
  }
}
