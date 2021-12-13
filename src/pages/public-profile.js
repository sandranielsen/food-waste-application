import router from "../router.js";
import service from "../service.js";

export default class PublicProfilePage {
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
            <a id="back-btn11"><img src="${this.backImg}"></a>
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
          
          <!--- Impact tracker container --->
          <h3>My Impact Tracker</h3>
            <div class="impact-tracker-wrapper">
              <div class="impact-tracker">
                <h4>3</h4>
                <h5>Purchase(s)<br>made</h5>
              </div>
              <div class="impact-tracker">
                <h4>3</h4>
                <h5>Listing(s)<br>made</h5>
              </div>
            </div>

            <!--- Impact badges container --->
            <h3>Badges</h3>
            <div class="impact-badges-wrapper">
              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>

              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>

              <div class="impact-badge">
                <div></div>
                <p>First listing</p>
              </div>
            </div>
          <div>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn11").addEventListener("click", () => {
      router.navigateTo("/home");
    });
  }

  beforeShow(props) {
    console.log(props);
  }
}
