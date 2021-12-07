import router from "../router.js";
import service from "../service.js";

export default class MyListingsPage {
  constructor(id) {
    this.id = id;
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
            <a href="/profile"><img src="${this.backImg}"></a>
          </div>
          <h2>My Listings</h2>
        </header>

          <!-- Product listings -->
       <div class="product-listing-container">
       <div class="product-listing-image">
        <button class="favourite-button">
          <img src="${this.favouritesImg}">
        </button>        
       </div>

       <div class="product-listing-info-container">
        <h2>Whole grain noodles</h2>
          <div class="my-listings-buttons">
            <button onclick="location.href='#edit';">Edit</button>
            <button onclick="location.href='#delete';" style="margin-left: 10px;" >Delete</button>
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
