import router from "../router.js";
import service from "../service.js";

export default class StartPage {
  constructor(id) {
    this.id = id;
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
      <div class="start_container">
        <!--<img src="../img/start-bg.jpg" alt="Food" class="start-bg">-->
        <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" alt="Food" class="start-bg">
        <div class="overlay"></div>

        <div class="start_content">
          <h1 class="start_text">Reduce your waste</h1>
          <h1 class="start_text">Share your food</h1>
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
