import router from "../router.js";
import service from "../service.js";

export default class UpdatePage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.uploadImg = require("../img/camera.svg");
    this.startImg = require("../img/start-bg.jpg");
    this.render();

    this.titleInput = document.querySelector(`#${this.id} [name="title"]`);
    this.priceInput = document.querySelector(`#${this.id} [name="price"]`);
    this.descriptionInput = document.querySelector(`#${this.id} [name="description"]`);
    this.expirationDateInput = document.querySelector(`#${this.id} [name="expirationDate"]`);
    this.locationInput = document.querySelector(`#${this.id} [name="location"]`);
    this.imagePreview = document.querySelector(`#${this.id} [name="imagePreview"]`);
    this.imageInput = document.querySelector(`#${this.id} [name="listingImage"]`);

    this.attachEvents();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">

        <!--- Topbar container --->
        <header class="topbar">
          <div class="topbar_img>">
            <a id="back-btn13"><img src="${this.backImg}"></a>
          </div>
          <h2>Update Listing</h2>
        </header>
        
        <!--- Update listing container --->
        <section class="add_container">
          <form>
            <!--- Image upload container --->
            <div class="upload_container">
            <img name="imagePreview" class="image-preview1"> 
              <div class="upload_button">
              <p class="upload_text">Add Image</p>
              <img src="${this.uploadImg}" alt="camera">
              <input type="file" name="listingImage" accept="image/*" class="image_upload">
              </div>
            </div>
            

            <!--- Listing information container --->
            <div class="form_container">
              <br><label class="add_label">Title<label><br>
              <input type="text" name="title" class="add_form"><br>
              <label class="add_label">Price<label><br>
              <input type="text" name="price" placeholder="DKK" class="add_form"><br>
              <label class="add_label">Expiration date<label><br>
              <input type="text" name="expirationDate" class="add_form"><br>
              <label class="add_label">Description<label><br>
              <textarea type="text" name="description" placeholder="0/300" class="add_form_extended"></textarea><br>
              <label class="add_label">Location<label><br>
              <input type="text" name="location" class="add_form"><br>
            </div>

          <!--- Category filter container --->
          <label class="add_label">Category</label><br>
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

          </div>
          <button type="button" id="add-btn" class="btn_alt">Update Listing</button>  
          <button type="button" id="delete-btn" class="btn_alt">Delete Listing</button> 

          </form>
        </section>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn13").addEventListener("click", () => {
      router.navigateTo("/listings");
    });

  }

  /* Attaching events to DOM elements */
  attachEvents() {
    this.imageInput.onchange = () => this.previewImage(); // on change event on the input file (image) field
    document.querySelector(`#${this.id} #add-btn`).onclick = () =>
      this.save(); // on click event for save button
  }

  /* Image preview functionality */
  previewImage() {
    const file = this.imageInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreview.setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(file);
      document.querySelector(".image-preview1").style.margin = "0 10px 0 0"; // adds spacing between elements
    }
  }

  /* Update listing functionality */
  async save() {
    if (this.validate()) {
        const image = await service.uploadImage(this.imageInput.files[0]);
        this.selectedListing.image = image.name;
        const listings = await service.updateListing(
        this.selectedListing.id,
        this.titleInput.value,
        this.priceInput.value,
        this.expirationDateInput.value,
        this.descriptionInput.value,
        this.locationInput.value,
        this.selectedImage.image
      );
      router.navigateTo(`/product/${this.selectedListing.id}`);
    }
  }

  /* Information validation */
  validate() {
    if (
      this.titleInput.value &&
      this.priceInput.value &&
      this.descriptionInput.value &&
      this.expirationDateInput.value &&
      this.locationInput.value
    ) {
      return true;
    } else {
      alert("Please, fill in all fields.");
      return false;
    }
  }

  beforeShow(props) {
    console.log(props);
  }
}
