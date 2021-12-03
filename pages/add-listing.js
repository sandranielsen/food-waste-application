export default class AddListingPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="add" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <img src="media/back.svg" onclick="navigateTo('home')" alt="Arrow" class="back_btn">
          </div>
          <h2>Add New Listing</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `;
  }
}
