import router from "../router.js";
import service from "../service.js";

export default class ChatPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
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
            <a href="/home"><img src="${this.backImg}"></a>
          </div>
          <h2>Chat</h2>
        </header>
        <section class="chat_container">
          <div class="search_container"></div>
          <div class="chat_content">
            <div class="product-listing-profile-img"></div>
            <p class="seller_name">Luisa Christensen</p>
            <p class="chat_preview"><p>
            
          </div>
        </section>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
