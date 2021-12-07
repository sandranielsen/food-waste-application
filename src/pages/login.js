import router from "../router.js";
import service from "../service.js";

export default class LogInPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.loginImg = require("../img/login.jpg");
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a href="/"><img src="${this.backImg}"></a>
          </div>
        </header>
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.loginImg} alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <div class="login_signup_container">
            <h1 class="login_signup_headline">Login</h1>
            <div class="form_container">

        <!-- Rasmus form -->
        <form>
        <input id="signup-firstname" type="text" name="firstname" placeholder="Type firstname">
        <input id="signup-lastname" type="text" name="lastname" placeholder="Type lastname">
        <input id="signup-age" type="number" name="age" placeholder="Type age">
        <select id="signup-gender" name="gender">
          <option value="" disabled selected>Choose Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input id="signup-username" class="login_input"  type="text" placeholder="Type username" autocomplete="new-username">
        <input id="signup-password" class="login_input"  type="password" placeholder="Password" autocomplete="new-password">
        <input id="signup-password-check" class="login_input"  type="password" placeholder="Password" autocomplete="new-password">

        <button type="button" class="btn_alt" id="btn-signup">Login up</button>
      </form>


              
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
