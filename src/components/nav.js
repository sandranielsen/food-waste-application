import router from "../router";

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
      /*html*/ `
      <nav class="tabbar">
      <img src="${this.navImg}" class="tabbar_img">

        <div class="nav_left"> 
          <a id="nav-home" class="nav_item"><img src="${this.homeImg}" class="nav_img"></a>
          <a id="nav-chat" class="nav_item"><img src="${this.chatImg}" class="nav_img"></a>
        </div>

        <div class="nav_middle">
          <a id="nav-add" class="nav_item_raised"><img src="${this.addImg}" class="nav_img_raised"></a>
        </div>

        <div class="nav_right">
          <a id="nav-favourites" class="nav_item"><img src="${this.favouritesImg}" class="nav_img"></a>
          <a id="nav-profile" class="nav_item"><img src="${this.profileImg}" class="nav_img"></a>
        </div>
      </nav>
    `
    );
  

    /* Button routers */ 
    document.querySelector('#nav-add').addEventListener("click", () => {
      router.navigateTo("/add");
    });


    document.querySelector("#nav-home").addEventListener("click", () => {
      router.navigateTo("/home");
    });


    document.querySelector('#nav-chat').addEventListener("click", () => {
      router.navigateTo("/chat");
    });


    document.querySelector('#nav-favourites').addEventListener("click", () => {
      router.navigateTo("/favourites");
    });


    document.querySelector('#nav-profile').addEventListener("click", () => {
      router.navigateTo("/profile");
    });
  }
}

const nav = new Nav();
export default nav;
