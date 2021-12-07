import router from "../router.js";
import service from "../service.js";

export default class AddListingPage {
  constructor(id) {
    this.id = id;
    this.render();
/*
    this.imagePreview = document.querySelector(
      `#${this.id} [name="imagePreview"]`
    );
    this.titleInput = document.querySelector(`#${this.id} [name="title"]`);
    this.priceInput = document.querySelector(`#${this.id} [name="price"]`);
    this.expirationDateInput = document.querySelector(
      `#${this.id} [name="expirationDate"]`
    );
    this.descriptionInput = document.querySelector(
      `#${this.id} [name="description"]`
    );
    this.locationInput = document.querySelector(
      `#${this.id} [name="location"]`
    );

    this.attachEvents();
    */
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <div class="topbar_img>">
          <a href="/home"><svg xmlns="http://www.w3.org/2000/svg" width="13.503" height="23.619" viewBox="0 0 13.503 23.619">
          <path id="Icon_ionic-ios-arrow-back" data-name="Icon ionic-ios-arrow-back" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(-11.251 -6.194)" fill="#13553f"/>
          </svg></a>
          </div>
          <h2>Add New Listing</h2>
        </header>
        <section class="add_container">
          <form>
            <div class="upload_container">
              <img name="imagePreview" class="image_preview">
              <input type="file" name="listingImage" accept="image/*" id="image-upload" hidden>
              <label for="image-upload" class="image_upload"><svg xmlns="http://www.w3.org/2000/svg" width="25.012" height="23.385" viewBox="0 0 29.012 25.385">
              <path id="Icon_awesome-camera" data-name="Icon awesome-camera" d="M29.012,8.6V24.915a2.721,2.721,0,0,1-2.72,2.72H2.72A2.721,2.721,0,0,1,0,24.915V8.6a2.721,2.721,0,0,1,2.72-2.72H7.706l.7-1.864A2.716,2.716,0,0,1,10.947,2.25h7.111A2.716,2.716,0,0,1,20.6,4.012l.7,1.864h4.986A2.721,2.721,0,0,1,29.012,8.6Zm-7.706,8.16a6.8,6.8,0,1,0-6.8,6.8A6.805,6.805,0,0,0,21.305,16.756Zm-1.813,0a4.986,4.986,0,1,1-4.986-4.986A4.994,4.994,0,0,1,19.492,16.756Z" transform="translate(0 -2.25)" fill="#2c2c2c"/>
              </svg>Add Image</label>
            </div>
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
          <input type="submit" value="Add Listing" onclick="location.href='/home'" class="btn_alt">  

          </form>
        </section>
      </section>
    `
    );
  }

  /* Attaching events to DOM elements. 
  attachEvents() {
    this.imageInput.onchange = () => this.previewImage(); // on change event on the input file (image) field
    document.querySelector(`#${this.id} .save`).onclick = () => this.create(); // on click event for save button
  }

  previewImage() {
    const file = this.imageInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreview.setAttribute("src", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async create() {
    if (this.validate()) {
      const image = await service.uploadImage(this.imageInput.files[0]);
      const listings = await service.createListing(
        this.titleInput.value,
        this.priceInput.value,
        this.expirationDateInput.value,
        this.descriptionInput.value,
        this.locationInput.value,
        image.name
      );
      router.navigateTo("/", { home: home });
    }
  }

  validate() {
    if (
      this.titleInput.value &&
      this.priceInput.value &&
      this.expirationDateInput.value &&
      this.descriptionInput.value &&
      this.locationInput.value &&
      this.imageInput.files[0]
    ) {
      return true;
    } else {
      alert("Please, fill in all fields.");
      return false;
    }
  } */

  beforeShow(props) {
    console.log(props);
  }
}
