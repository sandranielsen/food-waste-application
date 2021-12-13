import router from "../router.js";
import service from "../service.js";

export default class FavouritesPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.favouritesFilledImg = require("../img/favourites_filled.svg");
    this.locationImg = require("../img/location.svg");
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
            <a id="back-btn4"><img src="${this.backImg}"></a>
          </div>
          <h2>Favourites</h2>
        </header>

         <!--- Product listings container --->
         <div class="product-listing-container">
          <div class="product-listing-image">
             <button class="favourite-button">
               <img src="${this.favouritesFilledImg}" class="favourite_img">
             </button>        
          </div>

         <!--- Product information container --->
         <div class="product-listing-info-container">
           <h3>Whole grain noodles</h3>
           <div style="margin-top: 25px;">
              <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
              <p>07.06.2023</p>
           </div>

           <!--- Seller information container --->
           <div class="product-listing-user-info">
            <div>
              <div class="product-listing-profile-img"></div>
                <p>Maria N.</p>
              </div> 
              <div>
                <img src="${this.locationImg}">
                <p>Aarhus</p> 
              </div>
           </div>
         </div>
     </div>
   </div>
  </section>
`
);

    /* Button router(s) */
    document.querySelector("#back-btn4").addEventListener("click", () => {
      router.navigateTo("/home");
    });
  }

  beforeShow(props) {
    console.log(props);
  }
}
