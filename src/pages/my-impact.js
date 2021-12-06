import router from "../router.js";
import service from "../service.js";

export default class MyImpactPage {
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
          <h2>My Impact</h2>
        </header>
        <h2>My Impact Tracker</h2>
            <div class="impact-tracker-wrapper">
                <div class="impact-tracker">
                  <h3>3</h3>
                  <h4>Purchase(s)<br>made</h4>
                </div>
                <div class="impact-tracker">
                  <h3>3</h3>
                  <h4>Listing(s)<br>made</h4>
                </div>
            </div>

            <h2>Badges</h2>
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
