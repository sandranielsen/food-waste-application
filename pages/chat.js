export default class ChatPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="chat" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <img src="media/back.svg" onclick="navigateTo('home')" alt="Arrow" class="back_btn">
          </div>
          <h2>Chat</h2>
        </header>
        <div class="search_container"></div>
        <div class="chat_container"></div>
        
      </section>
    `;
  }
}
