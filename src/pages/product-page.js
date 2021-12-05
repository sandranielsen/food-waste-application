import router from "../router.js";
import service from "../service.js";

export default class ProductPage {
  constructor(id) {
    this.id = id;
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Product</h2>
        </header>
        <section class="product_container">
          <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" class="listing_img">
          <div class="product">
            <div class="listing_info">
              <div class="info_item">
                <img src="../img/image.jpg">
                <p class="listing_location">Trige</p>
              </div>
              <div class="info_item">
                <img src="../img/image.jpg">
                <p class="listing_date">24.04.2021</p>
              </div>  
            </div>
            <div class="product_info">
                <h2 class="product_title">Apples 4kg</h2>
                <h3 class="product_price">100 DKK</h4>
            </div>
            <div class="product_details">
              <p class="product_description">Apples from our garden, we cannot eat them all so if anybody is
                interested in bio apples please contact us</p>
              <p class="product_expiration">Expiration date: 01.06.2021</p>
            </div>
            <div class="seller_info">
              <img src="../img/image.jpg" class="seller_img">
              <p class="seller_name">Luisa Christensen</p>
            </div>
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
