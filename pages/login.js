export default class LogInPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="login" class="page">
        <header class="topbar">
          <img src="media/back.svg" onclick="navigateTo('start')" alt="Arrow" class="back_btn">
        </header>
        <div class="login_container">
          <div class="login_img">
            <img src="/media/login.jpg" alt="Food" class="login-bg">
            <div class="half-overlay"></div>
            <div class="login_content">
              <h2 class="login_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <div class="login_container">
            <h1 class="login_headline">Login</h1>
            <div class="form_container">
              
            </div>
          </div>

      </section>
    `;
  }
}
