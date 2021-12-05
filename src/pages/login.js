import router from "../router.js";
import service from "../service.js";

export default class LogInPage {
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
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
        </header>
        <div class="login_signup_container">
          <div class="login_signup_img">
            <img src="./media/login.jpg" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <div class="login_signup_container">
            <h1 class="login_signup_headline">Login</h1>
            <div class="form_container">
              
            </div>
          </div>

      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
