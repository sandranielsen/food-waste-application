export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
        <a href="#home">Home</a>
        <a href="#chat">Chat</a>
        <a href="#add">Add Listing</a>
        <a href="#favourites">Favourites</a>
        <a href="#profile">Profile</a>
      </nav>
    `;
  }
}
