export default class LogInPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="login" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>
        <h3>About me</h3>
        <p>Some info about me. Enjoy!</p>
      </section>
    `;
  }
}
