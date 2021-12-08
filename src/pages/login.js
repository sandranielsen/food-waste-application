import router from "../router.js";
import service from "../service.js";

export default class LogInPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.loginImg = require("../img/login.jpg");
    this.render();
  }
  handleLogin(e)
  {
    e.preventDefault();
    var n = document.querySelector("#login-name").value;
    var u = document.querySelector("#login-password").value;
    console.log(n);
     
    var response = service.loginUser(n,u).then((data)=>{
      
      if (data.authenticated) {
        document.querySelector(".login-message").innerHTML = "";
        router.navigateTo("/home");
      } else {
        document.querySelector(".login-message").innerHTML = data.error;
      }
    });


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

        <!--- Banner container --->
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.loginImg} alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste<h2>
            </div>
          </div>
        </div>

        <!--- Login container --->
        <div class="login_signup_container">
            <h1 class="login_signup_headline">Login</h1>
            <div class="form_container">

        <!-- Romans form -->
        <form>
        <input id="login-name" class="login_input" type="text" name="name" placeholder="Type email"/>
        <input id="login-password" class="login_input"  type="password" placeholder="Password" />
        <button type="button" class="btn_alt" id="btn-login">Login</button>
      </form>

        <div class="login-message"></div>
              
            </div>
          </div>

      </section>
    `
    );
    document.querySelector('#btn-login').onclick = this.handleLogin;
  }

  beforeShow(props) {
    console.log(props);
  }
}
