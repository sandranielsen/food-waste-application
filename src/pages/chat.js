import router from "../router.js";
import service from "../service.js";

export default class ChatPage {
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
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Chat</h2>
        </header>
        <section class="chat_container">
          <div class="search_container"></div>
          <div class="chat_content">
            <img src="../img/image.jpg">
            <h3 class="chat_name">Luisa<h3>
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
