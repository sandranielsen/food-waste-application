class Nav {
  constructor() {}

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <nav class="tabbar">
        <div class="nav_left">
          <a href="/home" class="nav_item"><img src="../img/home.svg" alt="Home" class="nav_img"></a>
          <a href="/chat" class="nav_item"><img src="../img/chat.svg" alt="Chat" class="nav_img"></a>
        </div>
        <div class="nav_middle">
          <a href="/add" class="nav_item_raised"><img src="../img/add.svg" alt="Plus" class="nav_img_raised"></a>
        </div>
        <div class="nav_right">
          <a href="/favourites" class="nav_item"><img src="../img/fav.svg" alt="Heart" class="nav_img"></a>
          <a href="/profile" class="nav_item"><img src="../img/profile.svg" alt="Profile" class="nav_img"></a>
        </div>
      </nav>
    `
    );
  }
}

const nav = new Nav();
export default nav;
