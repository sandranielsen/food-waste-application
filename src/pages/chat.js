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
          <a href="/home"><svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
          <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)" fill="#13553f"/>
          </svg></a>
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
