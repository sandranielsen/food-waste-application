import router from "../router.js";
import service from "../service.js";

export default class ProductPage {
  constructor(id) {
    this.id = id;
    this.selectedListing;
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
            <a id="back-btn10"><img src="${this.backImg}"></a>
          </div>
          <h2>Product</h2>
        </header>

         <!--- Product container --->
        <section class="product_container"></section>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn10").addEventListener("click", () => {
      router.navigateTo("/home");
    });
  }

  /* Appending selected listing information */ 
  appendListingData() {
    let htmlTemplate = /*html*/ `
            <article class="selectedListing">
            <img src="${service.baseUrl}/files/medium/${
      this.selectedListing.image || "placeholder.jpg"
    }" class="listing_img">
            <div class="product">

              <!--- Listing information container --->
              <div class="listing_info">
                <div class="info_item">
                  <img src="${this.locationImg}">
                  <p class="listing_location">${this.selectedListing.location}</p>
                </div>
                <div class="info_item">
                  <img src="${this.dateImg}">
                  <p class="listing_date">${this.selectedListing.date}</p>
                </div>  
              </div>

              <!--- Product information container --->
              <div class="product_info">
                <h3 class="product_title">${this.selectedListing.title}</h3>
                <h4 class="product_price">${this.selectedListing.price}</h4>
              </div>

              <!--- Product details container --->
              <div class="product_details">
                <p class="product_description">${this.selectedListing.description}</p>
                <p class="product_expiration"><b>Expiration date:</b> ${this.selectedListing.expirationDate}</p>
             </div>
                
              <!--- Seller information container --->
            <div class="seller_info">
              <div class="product-listing-profile-img"><img src="${this.selectedListing.sellerImg}"></div>
              <p class="seller_name">${this.selectedListing.sellerName}</p>
            </div>

            <!--- Button container --->
            <div class="btns_container">
              <button type="button" class="btn_alt" id="btn-1">Contact Seller</button>
              <button type="button" class="btn_alt" id="btn-2">Buy</button>
            </div>   
          </div>
          </article>
        `;
    
    document.querySelector(`#${this.id} .product`).innerHTML = htmlTemplate;
    
    this.attachEvents();
  }

  attachEvents() {
		document.querySelectorAll(`#${this.id} [data-listing-id]`).forEach(element => {
			// adds .onclick for every listing calling router.navigateTo(...) with the id of the listing
			element.onclick = () => {
				const listingId = element.getAttribute("data-listing-id");
				router.navigateTo(`/product/${listingId}`);
			};
		});

		document.querySelector(`#${this.id} #btn-1`).onclick = () =>
			router.navigateTo(`/chat`);

    document.querySelector(`#${this.id} #btn-2`).onclick = () =>
      router.navigateTo(`/buy`);
};

  async beforeShow(props) {
  console.log(props);
  this.selectedListing = await service.getListing(props.id);
	this.appendListingData();
  }
}


