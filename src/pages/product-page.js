import router from "../router.js";
import service from "../service.js";

export default class ProductPage {
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
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
