import router from "../router.js";
import service from "../service.js";

export default class ProductPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.locationImg = require("../img/location.svg");
    this.dateImg = require("../img/date.svg");
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
          <h2>Product</h2>
        </header>

        <!--- Product container --->
        <section class="product_container">
          <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" class="listing_img">
          <div class="product">

            <!--- Listing information container --->
            <div class="listing_info">
              <div class="info_item">
                <img src="${this.locationImg}">
                <p class="listing_location">Trige</p>
              </div>
              <div class="info_item">
                <img src="${this.dateImg}">
                <p class="listing_date">24.04.2021</p>
              </div>  
            </div>

            <!--- Product information container --->
            <div class="product_info">
                <h2 class="product_title">Apples 4kg</h2>
                <h3 class="product_price">100 DKK</h4>
            </div>

            <!--- Product details container --->
            <div class="product_details">
              <p class="product_description">Apples from our garden, we cannot eat them all so if anybody is
                interested in bio apples please contact us</p>
              <p class="product_expiration">Expiration date: 01.06.2021</p>
            </div>

            <!--- Seller information container --->
            <div class="seller_info">
              <div class="product-listing-profile-img"></div>
              <p class="seller_name">Luisa Christensen</p>
            </div>

            <!--- Button container --->
            <div class="btns_container">
              <button type="button" class="btn_alt" id="btn-1">Contact Seller</button>
              <button type="button" class="btn_alt" id="btn-2">Buy</button>
            </div>
          </div>  
        </section>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
