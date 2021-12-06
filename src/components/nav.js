class Nav {
  constructor() {}

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
      <nav class="tabbar">
        <div class="nav_left">
          <a href="/home" class="nav_item"><svg xmlns="http://www.w3.org/2000/svg" width="27.922" height="25.774" viewBox="0 0 27.922 25.774">
          <path id="Icon_ionic-md-home" data-name="Icon ionic-md-home" d="M14.114,30.274V21.683h6.444v8.591h6.551V17.387H31.3L17.336,4.5,3.375,17.387H7.563V30.274Z" transform="translate(-3.375 -4.5)" fill="#13553f"/>
          </svg></a>
          <a href="/chat" class="nav_item"><svg xmlns="http://www.w3.org/2000/svg" width="25.774" height="25.774" viewBox="0 0 25.774 25.774">
          <path id="Icon_material-message" data-name="Icon material-message" d="M26.2,3H5.577A2.574,2.574,0,0,0,3.013,5.577L3,28.774,8.155,23.62H26.2a2.585,2.585,0,0,0,2.577-2.577V5.577A2.585,2.585,0,0,0,26.2,3ZM23.62,18.465H8.155V15.887H23.62Zm0-3.866H8.155V12.021H23.62Zm0-3.866H8.155V8.155H23.62Z" transform="translate(-3 -3)" fill="#13553f"/>
          </svg></a>
        </div>
        <div class="nav_middle">
          <a href="/add" class="nav_item_raised"><svg xmlns="http://www.w3.org/2000/svg" width="28.401" height="28.401" viewBox="0 0 28.401 28.401" class="nav_img_raised">
          <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M26.372,13.407H17.243V4.279A2.029,2.029,0,0,0,15.215,2.25H13.186a2.029,2.029,0,0,0-2.029,2.029v9.129H2.029A2.029,2.029,0,0,0,0,15.436v2.029a2.029,2.029,0,0,0,2.029,2.029h9.129v9.129a2.029,2.029,0,0,0,2.029,2.029h2.029a2.029,2.029,0,0,0,2.029-2.029V19.493h9.129A2.029,2.029,0,0,0,28.4,17.465V15.436A2.029,2.029,0,0,0,26.372,13.407Z" transform="translate(0 -2.25)" fill="#13553f"/>
          </svg></a>
        </div>
        <div class="nav_right">
          <a href="/favourites" class="nav_item"><svg xmlns="http://www.w3.org/2000/svg" width="27.26" height="26.212" viewBox="0 0 27.26 26.212">
          <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M23.3,3.938h-.066a7.456,7.456,0,0,0-6.225,3.408A7.456,7.456,0,0,0,10.78,3.938h-.066a7.409,7.409,0,0,0-7.339,7.4,15.951,15.951,0,0,0,3.132,8.7c3.945,5.393,10.5,10.111,10.5,10.111s6.553-4.718,10.5-10.111a15.951,15.951,0,0,0,3.132-8.7A7.409,7.409,0,0,0,23.3,3.938Z" transform="translate(-3.375 -3.938)" fill="#13553f"/>
          </svg></a>
          <a href="/profile" class="nav_item"><svg xmlns="http://www.w3.org/2000/svg" width="26.212" height="26.212" viewBox="0 0 26.212 26.212">
          <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M13.106,14.744A7.372,7.372,0,1,0,5.734,7.372,7.374,7.374,0,0,0,13.106,14.744Zm6.553,1.638H16.838a8.912,8.912,0,0,1-7.464,0H6.553A6.552,6.552,0,0,0,0,22.935v.819a2.458,2.458,0,0,0,2.457,2.457h21.3a2.458,2.458,0,0,0,2.457-2.457v-.819A6.552,6.552,0,0,0,19.659,16.382Z" fill="#13553f"/>
          </svg></a>
        </div>
      </nav>
    `
    );
  }
}

const nav = new Nav();
export default nav;
