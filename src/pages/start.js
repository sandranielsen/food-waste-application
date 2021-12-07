import router from "../router.js";
import service from "../service.js";

export default class StartPage {
  constructor(id) {
    this.id = id;
    this.bgImg = require("../img/start-bg.jpg");
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Banner container --->
      <div class="start_container">
        <img src="${this.bgImg}" alt="Food" class="start-bg">
        <div class="overlay"></div>

        <!--- Content container --->
        <div class="start_content">
          <h1 class="start_text">Reduce your waste</h1>
          <h1 class="start_text">Share your food</h1>
          
          <!--- Button container --->
          <div class="btn_container">
            <button class="btn" onclick="location.href='/login'">Login</button>
            <button class="btn" onclick="location.href='/signup'">Sign up</button>
          </div>
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
