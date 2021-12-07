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
            <a href="/home"><img src="${this.backImg}"></a>
          </div>
          <h2>Profile</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
          <h3>Louise Christensen</h3> 
          <div class="profile-location">
            <img src="${this.locationImg}">
            <p>Aarhus</p> 
          </div>
          
          <!--- Impact tracker container --->
          <h2>My Impact Tracker</h2>
            <div class="impact-tracker-wrapper">
              <div class="impact-tracker">
                <h3>3</h3>
                <h4>Purchase(s)<br>made</h4>
              </div>
              <div class="impact-tracker">
                <h3>3</h3>
                <h4>Listing(s)<br>made</h4>
              </div>
            </div>

            <!--- Impact badges container --->
            <h2>Badges</h2>
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
  }

  beforeShow(props) {
    console.log(props);
  }
}
