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
          <a href="/home"><svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
          <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)" fill="#13553f"/>
          </svg></a>
          </div>
          <h2>Product</h2>
        </header>
        <section class="product_container">
          <img src="https://images.squarespace-cdn.com/content/v1/5a009727268b9669e15efaef/1588107013662-EXYB18D83V962RKLDZGB/food+share.jpg?format=2500w" class="listing_img">
          <div class="product">
            <div class="listing_info">
              <div class="info_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.195" height="19.06" viewBox="0 0 13.195 19.06">
                  <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M14.473,3.375A6.377,6.377,0,0,0,7.875,9.5c0,4.765,6.6,12.934,6.6,12.934s6.6-8.169,6.6-12.934A6.377,6.377,0,0,0,14.473,3.375Zm0,8.747a2.149,2.149,0,1,1,2.149-2.149A2.149,2.149,0,0,1,14.473,12.122Z" transform="translate(-7.875 -3.375)" fill="#13553f"/>
                </svg>
                <p class="listing_location">Trige</p>
              </div>
              <div class="info_item">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.06" height="19.06" viewBox="0 0 19.06 19.06">
                <path id="Icon_ionic-ios-time" data-name="Icon ionic-ios-time" d="M12.9,3.375a9.53,9.53,0,1,0,9.53,9.53A9.529,9.529,0,0,0,12.9,3.375Zm.641,10.355a.643.643,0,0,1-.641.641h-4.4a.641.641,0,0,1,0-1.283h3.757V7.04a.641.641,0,0,1,1.283,0Z" transform="translate(-3.375 -3.375)" fill="#13553f"/>
                </svg>
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
              <div class="product-listing-profile-img"></div>
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
