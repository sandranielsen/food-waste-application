export default class ProductPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="product" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <img src="media/back.svg" onclick="navigateTo('home')" alt="Arrow" class="back_btn">
          </div>
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `;
  }
}
