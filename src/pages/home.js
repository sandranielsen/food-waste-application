import router from "../router.js";
import service from "../service.js";

export default class HomePage {
  constructor(id) {
    this.id = id;
    this.searchImg = require("../img/search.svg");
    this.searchWhiteImg = require("../img/searchWhite.svg");
    this.filterImg = require("../img/filter.svg");
    this.favouritesImg = require("../img/favourites.svg");
    this.locationImg = require("../img/location.svg");
    this.render();
    this.init();
    
  }
  handleSearch()
  {
    var that = this;
    var searchString = document.querySelector("#search").value;
    service.getListings(searchString).then(function(listings)
    {
      console.log(listings);
      that.appendListings(listings);
    });
    
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
            <button id="search-button" class="search-button">
              <div>
                <img src="${this.searchWhiteImg}">
              </div>
            </button> 
            <button id="filter-btn" class="filter-button">
              <div>
                <img src="${this.filterImg}">
              </div>
            </button> 
          </div>

        <!-- Product listings -->
        <div class="product-listings-container"><div>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#filter-btn").addEventListener("click", () => {
      router.navigateTo("/filter");
    });

    document.querySelector("#search-button").addEventListener("click", () => this.handleSearch(this));
    

  }

  /* Uses the imported services to get all listings - getListings() 
  and calls appendListings with listings returned from the service */
  async init() {
    const listings = await service.getListings();
    this.appendListings(listings);
  }

  /* Appends the listings to the specified container defined in the render() */
  appendListings(listings) {
    let htmlTemplate = "";
    for (const listing of listings) {
      htmlTemplate += /*html*/ `
      <article data-listing-id="${listing.listing_id}">
      <div class="product-listing-container">
      <div style="background-image: url('${listing.listing_img}');" class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}" class="favourite_img">
        </button>        
      </div>

      <!-- Product information container -->
      <div class="product-listing-info-container">
        <h3>${listing.listing_title}</h3>
        <div style="margin-top: 25px;">
          <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
          <p>${listing.listing_exp_date}</p>
        </div>

        <!-- Seller information container -->
        <div class="product-listing-user-info">
          <div>
            <div class="product-listing-profile-img"></div>
              <p>username</p>
            </div> 
            <div>
              <img src="${this.locationImg}">
              <p>${listing.listing_location}</p> 
            </div>
          </div>
        </div>
    </div>
    </div>
    </article>

    `;
    }

    document.querySelector(`#${this.id} .product-listings-container`).innerHTML = htmlTemplate;
    this.attachEvents();

  }

  /* Attaching an onclick event to all listings */
  attachEvents() {
    document
      .querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => {
        element.onclick = () => {
          const listingId = element.getAttribute("data-listing-id");
          element.querySelector(".product-listing-container").addEventListener("click",  () =>
          {
            router.navigateTo(`/product`,{listingId:listingId});
          });
        };
      });
  }

  beforeShow(props) {
    if (props.listing) {
      this.appendListings(props.listings);
    }
  }
}
