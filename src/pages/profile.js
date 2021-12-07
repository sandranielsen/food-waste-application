import router from "../router.js";
import service from "../service.js";

export default class ProfilePage {
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
          <h2>Profile</h2>
        </header>
        <div class="section-wrapper">
          <div class="profile-img"></div>
          <h3>Louise Christensen</h3> 
          <div class="profile-location">
              <svg xmlns="http://www.w3.org/2000/svg" width="13.195" height="19.06" viewBox="0 0 13.195 19.06">
                  <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M14.473,3.375A6.377,6.377,0,0,0,7.875,9.5c0,4.765,6.6,12.934,6.6,12.934s6.6-8.169,6.6-12.934A6.377,6.377,0,0,0,14.473,3.375Zm0,8.747a2.149,2.149,0,1,1,2.149-2.149A2.149,2.149,0,0,1,14.473,12.122Z" transform="translate(-7.875 -3.375)" fill="#13553f"/>
                  </svg>
              <p>Aarhus</p> 
          </div>
          <div class="profile-buttons">
                  <button onclick="location.href='/account';">Account</button>
                  <button onclick="location.href='/listings';">My Listings</button>
                  <button onclick="location.href='/purchases';">My Purchases</button>
                  <button onclick="location.href='/impact';">My Impact</button>
                  <button style="margin-top: 25px;"  onclick="location.href='/start';">Log Out</button>
          </div>
        <div>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
