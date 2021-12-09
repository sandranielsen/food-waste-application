import router from "../router.js";
import service from "../service.js";

export default class FilterPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.render();
    this.slider();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a href="/home"><img src="${this.backImg}"></a>
          </div>
          <h2>Filter</h2>
        </header>
        <div class="filter_container">
          
          <!--- Category filter container --->
          <h3 class="filter_headline">Categories</h3>
          <div class="category_container">
            <input type="checkbox" class="checkbox" id="vegetables" name="category" value="vegetables">
            <label for="vegetables" class="checkbox_label">Vegetables</label>

            <input type="checkbox" class="checkbox" id="fruit" name="category" value="fruit">
            <label for="fruit" class="checkbox_label">Fruit</label>

            <input type="checkbox" class="checkbox" id="dry-goods" name="category" value="dry-goods">
            <label for="dry-goods" class="checkbox_label">Dry goods</label>

            <input type="checkbox" class="checkbox" id="baked-goods" name="category" value="baked-goods">
            <label for="baked-goods" class="checkbox_label">Baked goods</label>

            <input type="checkbox" class="checkbox" id="meat" name="category" value="meat">
            <label for="meat"class="checkbox_label">Meat</label>

            <input type="checkbox" class="checkbox" id="fish" name="category" value="fish">
            <label for="fish" class="checkbox_label">Fish</label>

            <input type="checkbox" class="checkbox" id="dairy" name="category" value="dairy">
            <label for="dairy" class="checkbox_label">Dairy</label>
                  
            <input type="checkbox" class="checkbox" id="meals" name="category" value="meals">
            <label for="meals" class="checkbox_label">Meals</label>
          </div>
          
          <!--- Distance slider container --->
          <div class="distance_container">
            <div>
              <h3 class="filter_headline">Maximum distance</h3>
              <p class="distance_value"><span id="demo"></span>km</p>
            </div>
            <input type="range" min="1" max="100" value="50" class="slider" id="range">
          </div>

          <!--- Hide expired products container --->
          <div class="hide_container">
            <div>
              <h3 class="filter_headline">Hide expired products</h3>
              <input type="checkbox" class="hide_checkbox" id="hide" name="hide" value="hide">
            </div>
            <p>Some of the listed products might be over the expiration date
            according to its packaging but that does not necessarily mean that
            the product is spoiled. Check off this box to hide "expired" products.</p>
          </div>

          <!--- Sorting container --->
          <div class="sorting_container">
            <h3 class="filter_headline">Sort by</h3>
            <div class="radio_container">
              <label for="newest" class="radio" id="newest-radio">Newest</label>
                <input for="newest-radio" type="radio" id="newest" name="radio" value="newest" class="radio_btn">
            </div>
            <div class="radio_container">
            <label for="closest" class="radio" id="closest-radio">Closest</label>
              <input for="closest-radio" type="radio" id="closest" name="radio" value="closest" class="radio_btn">
            </div>
          </div>
        </div>
      </section>
    `
    );
  }

  /* Slider functionality - shows the value of the slider */
  slider() {
    let slider = document.getElementById("range");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  }

  beforeShow(props) {
    console.log(props);
  }

}
