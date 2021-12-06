import router from "../router.js";
import service from "../service.js";

export default class MyPurchasesPage {
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
          <h2>My Purchases</h2>
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
              <div style="margin-top: 25px;">
                  <p style="font-weight:400; padding-right: 5px;">Expiration date:</p>
                  <p>07.06.2023</p>
              </div>

              <div class="product-listing-user-info">
                  <div>
                    <div class="product-listing-profile-img"></div>
                    <p>Maria N.</p>
                  </div> 
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.195" height="19.06" viewBox="0 0 13.195 19.06">
                      <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M14.473,3.375A6.377,6.377,0,0,0,7.875,9.5c0,4.765,6.6,12.934,6.6,12.934s6.6-8.169,6.6-12.934A6.377,6.377,0,0,0,14.473,3.375Zm0,8.747a2.149,2.149,0,1,1,2.149-2.149A2.149,2.149,0,0,1,14.473,12.122Z" transform="translate(-7.875 -3.375)" fill="#13553f"/>
                      </svg>
                      <p>Aarhus</p> 
                  </div>
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
