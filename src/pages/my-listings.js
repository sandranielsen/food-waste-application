import router from "../router.js";
import service from "../service.js";

export default class MyListingsPage {
  constructor(id) {
    this.id = id;
    this.selectedListing;
    this.backImg = require("../img/back.svg");
    this.favouritesImg = require("../img/favourites.svg");
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
            <a id="back-btn8"><img src="${this.backImg}"></a>
          </div>
          <h2>My Listings</h2>
        </header>

          <!-- Product listing container -->
       <div class="product-listing-container">
       <div class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}">
        </button>        
       </div>

       <div class="product-listing-info-container">
        <h3>Whole grain noodles</h3>
          <div class="my-listings-buttons">
            <button>Edit</button>
            <button style="margin-left: 10px;" >Delete</button>
          </div>
       </div>
    </div>
    </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn8").addEventListener("click", () => {
      router.navigateTo("/profile");
    });
  }

  /*
  appendListingData() {
    let htmlTemplate = /*html*/ /* `
            <article class="selectedListing">
            <img src="${service.fileUploadUrl}/files/medium/${
      this.selectedListing.image || "placeholder.jpg"
    }">
                <h3>${this.selectedListing.Title}</h3>
                <button type="button" class="update">Edit</button>
                <button type="button" class="delete">Delete</button>
            </article>
        `;

    document.querySelector(`#${this.id} .selectedListing`).innerHTML =
      htmlTemplate;

    this.attachEvents();
  }

  /* Attaching events to DOM elements */ /*
  attachEvents() {
    document.querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => {
        // adds .onclick for every listing calling router.navigateTo(...) with the id of the listing
        element.onclick = () => {
          const listingId = element.getAttribute("data-listing-id");
          router.navigateTo(`/product-page/${listingId}`);
        };
      });

    document.querySelector(`#${this.id} .update`).onclick = () =>
      router.navigateTo(`/update/${this.selectedListing.id}`);

    document.querySelector(`#${this.id} .delete`).onclick = () =>
      this.showDeleteDialog();
  }

  async showDeleteDialog() {
    const deleteListing = confirm("Do you want to delete listing?");

    if (deleteListing) {
      const listings = await service.deleteListing(this.selectedListing.id);
      router.navigateTo("/", {
        listings : listings,
      });
    }
  }

  */

  beforeShow(props) {
    console.log(props);
    // this.selectedListing = await service.getListing(props.id);
    //this.appendListingData();
  }
}