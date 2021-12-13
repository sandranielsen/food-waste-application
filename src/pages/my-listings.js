import router from "../router.js";
import service from "../service.js";

export default class MyListingsPage {
  constructor(id) {
    this.id = id;
    this.selectedListing;
    this.backImg = require("../img/back.svg");
    this.favouritesImg = require("../img/favourites.svg");
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
          <div class="topbar_img>">
            <a id="back-btn8"><img src="${this.backImg}"></a>
          </div>
          <h2>My Listings</h2>
        </header>

        <!--- Product listing container --->
       <div class="product-listing-container"></div>
       <!--- <div class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}">
        </button>        
       </div>

       <div class="product-listing-info-container">
        <h3>Whole grain noodles</h3>
          <div class="my-listings-buttons">
            <button>Edit</button>
            <button style="margin-left: 10px;">Delete</button>
          </div>
       </div> --->

    </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn8").addEventListener("click", () => {
      router.navigateTo("/profile");
    });
  }

  async init() {
    const listings = await service.getListings();
    this.appendListings(listings);
  }

  /* Appends the listings to the specified container defined in the render() */
  appendListings(listings) {
    let htmlTemplate = "";
    for (const listing of listings) {
      htmlTemplate += /*html*/ `
      <article data-listing-id="${listing.id}">
      <div style="background-image: url('${listing.listing_img}');" class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}" class="favourite_img">
        </button>        
      </div>

      <!-- Product information container -->
      <div class="product-listing-info-container">
        <h3>${listing.listing_title}</h3>
        <button type="button" class="update">Edit</button>
        <button type="button" class="delete">Delete</button>
      </div>
    </article>
    `;
    }

    document.querySelector(
      `#${this.id} .product-listings-container`).innerHTML = htmlTemplate;
    this.attachEvents();
  }

  /* Attaching events to DOM elements */
  attachEvents() {
    document
      .querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => {
        // adds .onclick for every listing calling router.navigateTo(...) with the id of the listing
        element.onclick = () => {
          const listingId = element.getAttribute("data-listing-id");
          router.navigateTo(`/product-page/${listingId}`);
        };
      });
    

    /* Update */
    document.querySelector(`#${this.id} .update`).onclick = () =>
      router.navigateTo(`/update/${this.selectedListing.id}`);

    /* Delete */
    document.querySelector(`#${this.id} .delete`).onclick = () =>
      this.showDeleteDialog();
  }

  /* Delete dialog box */
  async showDeleteDialog() {
    const deleteListing = confirm("Do you want to delete listing?");

    if (deleteListing) {
      const listings = await service.deleteListing(this.selectedListing.id);
      router.navigateTo("/", {listings: listings,});
    }
  }

  async beforeShow(props) {
    if (props.listings) {
      this.appendlistings(props.listings);
    }
  }
}