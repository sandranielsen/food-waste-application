export default class ProfilePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="profile" class="page">
        <header class="topbar">
          <h2>Profile</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `;
  }
}
