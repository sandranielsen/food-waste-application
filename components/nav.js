export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
        <div class="nav_left">
          <a href="#home" class="nav_item"><img src="media/home.svg" alt="home" class="nav_img"></a>
          <a href="#chat" class="nav_item"><img src="media/chat.svg" alt="chat" class="nav_img"></a>
        </div>
        <div class="nav_middle">
          <a href="#add" class="nav_item_raised"><img src="media/add.svg" alt="plus" class="nav_img_raised"></a>
        </div>
        <div class="nav_right">
          <a href="#favourites" class="nav_item"><img src="media/fav.svg" alt="heart" class="nav_img"></a>
          <a href="#profile" class="nav_item"><img src="media/profile.svg" alt="profile" class="nav_img"></a>
        </div>
      </nav>
    `;
  }
}
