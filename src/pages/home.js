import router from "../router.js";
import service from "../service.js";

export default class HomePage {
  constructor(id) {
    this.id = id;
    this.searchImg = require("../img/search.svg");
    this.filterImg = require("../img/filter.svg");
    this.favouritesImg = require("../img/favourites.svg");
    this.locationImg = require("../img/location.svg");
    this.render();
    this.init();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <!--- Topbar container --->
        <header class="topbar">
          <h2>Home</h2>
        </header>

        <!--- Search and filter container --->
        <div class="home_container">
          <div class="search-and-filter-container">
            <div class="search-container">
              <img src="${this.searchImg}">
              <input type="text" id="search">
            </div>
            <button onclick="location.href='/filter'" class="filter-button">
              <div>
                <img src="${this.filterImg}">
              </div>
            </button> 
          </div>

        <!-- Product listings -->
        <div class="product-listing-container">
          <div class="product-listing-image">
            <button class="favourite-button">
              <img src="${this.favouritesImg}" class="favourite_img">
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
                  <img src="${this.favouritesImg}">
                  <p>Aarhus</p> 
                </div>
              </div>
            </div>
        </div>
      </div>
      </section>
    `
    );
  }
  async init() {
    //const listings = await service.getListings();
    //this.appendListings(listings);
  }

  // Rasmus' code - adjustments are probably needed
  appendListings(listings) {
    let htmlTemplate = "";
    for (const listing of listings) {
      htmlTemplate += /*html*/ `
                <article data-listing-id="${listing.id}">
                    <img src="${service.baseUrl}/files/medium/${
        listing.image || "placeholder.jpg"
      }">
                    <h3>${listing.title}</h3>
                    <h4>${listing.price}</h4>
                    <h5>${listing.location}</h5>
                    <p>${listing.description}</p>
                    <p>${listing.expirationDate}</p>
                </article>
            `;
    }
    document.querySelector(`#${this.id} .listing-grid`).innerHTML =
      htmlTemplate;
    this.attachEvents();
  }

  attachEvents() {
    document
      .querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => {
        element.onclick = () => {
          const listingId = element.getAttribute("data-listing-id");
          router.navigateTo(`/listing/${listingId}`);
        };
      });
  }

  beforeShow(props) {
    if (props.listing) {
      this.appendListings(props.listings);
    }
  }
}
