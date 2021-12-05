import router from "../router.js";
import service from "../service.js";

export default class ProfilePage {
  constructor(id) {
    this.id = id;
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Profile</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
