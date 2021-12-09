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
            <a href="/profile"><img src="${this.backImg}"></a>
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
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>
                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
                </div>

                <div class="impact-badge">
                    <div></div>
                    <p>First listing</p>
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
