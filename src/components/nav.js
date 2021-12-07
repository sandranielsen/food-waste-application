class Nav {
  constructor() {
    this.navImg = require("../img/nav.svg");
    this.homeImg = require("../img/home.svg");
    this.chatImg = require("../img/chat.svg");
    this.addImg = require("../img/add.svg");
    this.favouritesImg = require("../img/favourites_filled.svg");
    this.profileImg = require("../img/profile.svg");
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "afterbegin",
      /*jsx*/ `
      <nav class="tabbar">
      <img src="${this.navImg}" class="tabbar_img">

        <div class="nav_left">
          <a href="/home" class="nav_item"><img src="${this.homeImg}" class="nav_img"></a>
          <a href="/chat" class="nav_item"><img src="${this.chatImg}" class="nav_img"></a>
        </div>

        <div class="nav_middle">
          <a href="/add" class="nav_item_raised"><img src="${this.addImg}" class="nav_img_raised"></a>
        </div>

        <div class="nav_right">
          <a href="/favourites" class="nav_item"><img src="${this.favouritesImg}" class="nav_img"></a>
          <a href="/profile" class="nav_item"><img src="${this.profileImg}" class="nav_img"></a>
        </div>
      </nav>
    `
    );
  }
}

const nav = new Nav();
export default nav;
