import router from "../router.js";
import service from "../service.js";

export default class MyPurchasesPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.favouritesImg = require("../img/favourites.svg");
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
            <a href="/profile"><img src="${this.backImg}"></a>
          </div>
          <h2>My Purchases</h2>
        </header>

        <!-- Product listings -->
            <div class="product-listing-container">
            <div class="product-listing-image">
              <button class="favourite-button">
                <img src="${this.favouritesImg}">
              </button>        
            </div>

            <!-- Product information container -->
            <div class="product-listing-info-container">
              <h2>Whole grain noodles</h2>
              <div style="margin-top: 25px;">
                <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
                <p>07.06.2023</p>
              </div>

              <!-- Seller information container -->
              <div class="product-listing-user-info">
                <div>
                  <div class="product-listing-profile-img"></div>
                    <p>Maria N.</p>
                  </div> 
                  <div>
                    <img src="${this.locationImg}">
                    <p>Aarhus</p> 
                  </div>
              </div>
            </div>
        </div>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
