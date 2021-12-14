import router from "../router.js";
import service from "../service.js";

export default class MyImpactPage {
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
            <a id="back-btn7"><img src="${this.backImg}"></a>
          </div>
          <h2>My Impact</h2>
        </header>

        <!--- Impact tracker container --->
        <h3>My Impact Tracker</h3>
            <div class="impact-tracker-wrapper">
                <div class="impact-tracker">
                  <h4>3</h4>
                  <h5>Purchase(s)<br>made</h5>
                </div>
                <div class="impact-tracker">
                  <h4>3</h4>
                  <h5>Listing(s)<br>made</h5>
                </div>
            </div>

            <!--- Impact badges container --->
            <h3>Badges</h3>
            <div class="impact-badges-wrapper">
                <div class="impact-badge1">
                    <div></div>
                    <p>First purchase</p>
                </div>

                <div class="impact-badge2">
                    <div></div>
                    <p>Fruit saver</p>
                </div>

                <div class="impact-badge3">
                    <div></div>
                    <p>Veggie lover</p>
                </div>
                <div class="impact-badge1">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge2">
                    <div></div>
                    <p>First week</p>
                </div>

                <div class="impact-badge3">
                    <div></div>
                    <p>5th purchase</p>
                </div>
                <div class="impact-badge1">
                    <div></div>
                    <p>5th listing</p>
                </div>

                <div class="impact-badge2">
                    <div></div>
                    <p>Second week</p>
                </div>

                <div class="impact-badge3">
                    <div></div>
                    <p>One month</p>
                </div>
            </div>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn7").addEventListener("click", () => {
      router.navigateTo("/profile");
    });
  }

  beforeShow(props) {
    console.log(props);
  }
}
