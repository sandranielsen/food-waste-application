import router from "../router.js";
import service from "../service.js";

export default class SignUpPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.signupImg = require("../img/signup.jpg");
    this.render();
  }
  
  
  handleSignup(e)
  {
    e.preventDefault();
    var n = document.querySelector("#signup-name").value;
    var u = document.querySelector("#signup-username").value;
    var p = document.querySelector("#signup-password").value;
    var pc = document.querySelector("#signup-password-check").value;
    debugger;
    console.log(n);
    var response = service.signupUser(n,u,p,pc);

    if (response.signupSuccess) {
      document.querySelector(".signup-message").innerHTML = "";
      navigateTo("/login");
    } else {
      document.querySelector(".signup-message").innerHTML = data.error;
    }
  }
  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*jsx*/ `
      <section id="${this.id}" class="page">
      <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a href="/home"><img src="${this.backImg}"></a>
          </div>
        </header>
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.signupImg} alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        
        <div class="login_signup_container">
            <h1 class="login_signup_headline">Signup</h1>
            <div class="form_container">
            <form>
              <input id="signup-name" class="signup_input" type="text" name="name" placeholder="Name">
              <input id="signup-username" class="signup_input"  type="text" placeholder="Email" autocomplete="new-email">
              <input id="signup-password" class="signup_input"  type="password" placeholder="Password" autocomplete="new-password">
              <input id="signup-password-check" class="signup_input"  type="password" placeholder="Password" autocomplete="new-password">

        <button type="button" class="btn_alt" id="btn-signup">Sign up</button>
        <div class=".signup-message"></div>
      </form>

            </div>
          </div>
      </section>
    `
    );
    document.querySelector('#btn-signup').onclick = this.handleSignup;
  }

  beforeShow(props) {
    console.log(props);
  }
}
