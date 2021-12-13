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
            <a id="back-btn"><img src="${this.backImg}"></a>
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
            <button id="account-btn">Account</button>
            <button id="listings-btn">My Listings</button>
            <button id="purchases-btn">My Purchases</button>
            <button id="impact-btn">My Impact</button>
            <button style="margin-top: 25px;" id="logout-btn">Log Out</button>
          </div>
        <div>
      </section>
    `
    );

    /* Button routers */
    document.querySelector("#back-btn").addEventListener("click", () => {
      router.navigateTo("/home");
    });

    document.querySelector("#account-btn").addEventListener("click", () => {
      router.navigateTo("/account");
    });

    document.querySelector("#listings-btn").addEventListener("click", () => {
      router.navigateTo("/listings");
    });

    document.querySelector("#purchases-btn").addEventListener("click", () => {
      router.navigateTo("/purchases");
    });

    document.querySelector("#impact-btn").addEventListener("click", () => {
      router.navigateTo("/impact");
    });

    document.querySelector("#logout-btn").addEventListener("click", () => {
      router.navigateTo("/");
    });
  }

  beforeShow(props) {
    console.log(props);
  }
}
