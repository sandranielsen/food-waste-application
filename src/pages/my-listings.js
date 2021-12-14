import router from "../router.js";
import service from "../service.js";

export default class MyListingsPage {
  constructor(id) {
    this.id = id;
    this.selectedListing;
    this.backImg = require("../img/back.svg");
    this.favouritesImg = require("../img/favourites.svg");
    this.service = service;
    this.router = router;
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

        <!--- Product listing container --->
       <div class="product-listing-container-mylistings"></div>
       

    </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn8").addEventListener("click", () => {
      router.navigateTo("/profile");
    });

  }

  beforeShow(props) {
    var that = this;
    const listings =  service.getListings().then(function(data){
    that.appendListings(data);
    console.log(props);
  });
  }

   
   appendListings(listings) { 
    let htmlTemplate = "";
    for (const listing of listings) {
      if(listing.user_id==this.service.user.user_id)
      {
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
        <div class="my-listings-buttons">
        <button type="button" class="update ">Edit</button>
        <button type="button" class="delete">Delete</button>
        </div>
      </div>
      </div>
    </article>
    `;
    }
  }
    document.querySelector(".product-listing-container-mylistings").innerHTML = htmlTemplate;
    this.attachEvents();
  }


  /* Attaching events to DOM elements */
  attachEvents() {
    document
      .querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => { 
        /*adds .onclick for every listing calling router.navigateTo(...) with the id of the listing*/
          const listingId = element.getAttribute("data-listing-id");
          element.querySelector(".update").addEventListener("click",  () =>
          {
            router.navigateTo(`/update`,{listingId:listingId});
          });
          element.querySelector(".delete").addEventListener("click",  () =>
          {
            this.showDeleteDialog(listingId);
          });
      });
      
  }

  async showDeleteDialog(listingId) {
    const deleteListing = confirm("Do you want to delete listing?");

    if (deleteListing) {
      console.log(listingId)
      this.service.deleteListing(listingId);
      this.beforeShow();  
    }
  }


}