import router from "../router.js";
import service from "../service.js";

export default class FilterPage {
  constructor(id) {
    this.id = id;
    this.exitImg = require("../img/exit.svg");
    this.render();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <h2>Filter</h2>
          <div class="topbar_img>">
            <a href="/home"><img src="${this.exitImg}"></a>
          </div>
        </header>
        <div class="filter_container">
          
          <!--- Category filter container --->
          <h2 class="filter_headline">Categories</h2>
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
            <h2 class="filter_headline">Maximum distance</h2>
            <input type="range" id="slider" class="distance_slider" name="distance" min="1" max="50">
            <span id="slider-value"></span>
          </div>

          <!--- Hide expired products container --->
          <div class="hide_container">
            <label class="headline_container">
              <h2 class="filter_headline">Hide expired products</h2>
              <input type="checkbox" class="hide_checkbox" name="hide" value="hide">
            </label>
            <p>Some of the listed products might be over the expiration date
            according to its packaging but that does not necessarily mean that
            the product is spoiled. Check off this box to hide "expired" products.</p>
          </div>

          <!--- Sorting container --->
          <div class="sorting_container">
            <h2 class="filter_headline">Sort by</h2>
            <div class="radio_container">
              <label for="newest" class="radio">Newest</label>
                <input type="radio" name="newest" value="newest" class="radio_btn">
            </div>
            <div class="radio_container">
            <label for="closest" class="radio">Closest</label>
              <input type="radio" name="closest" value="closest" class="radio_btn">
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
