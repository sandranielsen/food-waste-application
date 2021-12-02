export default class AddListingPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="add" class="page">
        <header class="topbar">
          <h2>Home</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `;
  }
}
