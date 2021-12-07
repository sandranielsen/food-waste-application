import router from "../router.js";
import service from "../service.js";

export default class MyListingsPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
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
             <svg xmlns="http://www.w3.org/2000/svg" width="14.19" height="13.799" viewBox="0 0 14.19 13.799">
             <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart" d="M13.014,3.938h-.032A3.608,3.608,0,0,0,9.97,5.586,3.608,3.608,0,0,0,6.958,3.938H6.926A3.585,3.585,0,0,0,3.375,7.52a7.718,7.718,0,0,0,1.516,4.208,26.561,26.561,0,0,0,5.08,4.893,26.561,26.561,0,0,0,5.08-4.893A7.718,7.718,0,0,0,16.565,7.52,3.585,3.585,0,0,0,13.014,3.938Z" transform="translate(-2.875 -3.438)" fill="none" stroke="#13553f" stroke-width="1"/>
             </svg>
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
