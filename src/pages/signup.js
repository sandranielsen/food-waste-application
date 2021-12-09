import router from "../router.js";
import service from "../service.js";

export default class SignUpPage {
  constructor(id) {
    this.id = id;
    this.signupImg = require("../img/signup.jpg");
    this.render();
  }
  
  /* Sign up */
  handleSignup(e)
  {
    e.preventDefault();
    var n = document.querySelector("#signup-name").value;
    var u = document.querySelector("#signup-username").value;
    var p = document.querySelector("#signup-password").value;
    var pc = document.querySelector("#signup-password-check").value;
    
    console.log(n);
    var response = service.signupUser(n,u,p,pc).then((data)=>{
      
      if (data.signupSuccess) {
        document.querySelector(".signup-message").innerHTML = "";
        router.navigateTo("/login");
      } else {
        document.querySelector(".signup-message").innerHTML = data.error;
      }
    });


  }
  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <a href="/home"><svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
          <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)" fill="#13553f"/>
          </svg></a>
        </header>

        <!--- Banner container --->
        <div class="banner_container">
          <div class="login_signup_img">
            <img src="${this.signupImg}" alt="Food" class="login_signup_bg">
            <div class="half-overlay"></div>
            <div class="login_signup_content">
              <h2 class="login_signup_text">Share food with your community and fight against food waste</h2>
            </div>
          </div>
        </div>

        <!--- Sign up container --->
        <div class="login_signup_container">
          <h1 class="login_signup_headline">Sign up</h1>
          <div class="form_container">
          
            <!--- Sign up form --->
            <form>
              <input id="signup-name" class="signup_input type="text" name="name" placeholder="Name">
              <input id="signup-username" class="signup_input type="text" placeholder="Email" autocomplete="new-email">
              <input id="signup-password" class="signup_input type="password" placeholder="Password" autocomplete="new-password">
              <input id="signup-password-check" class="signup_input type="password" placeholder="Password" autocomplete="new-password">
              <button type="button" id="btn-signup" class="btn_alt">Sign up</button>
              <div class="signup-message"></div>
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
