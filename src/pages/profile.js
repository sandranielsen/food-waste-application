import router from "../router.js";
import service from "../service.js";

export default class ProfilePage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.locationImg = require("../img/location.svg");
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

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
            <h4>Louise Christensen</h4> 
            <div class="profile-location">
              <img src="${this.locationImg}">
              <p>Aarhus</p> 
          </div>

          <!--- Buttons container --->
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
