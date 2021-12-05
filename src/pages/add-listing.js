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
          <a href="/home"><img src="media/back.svg" alt="Arrow" class="back_btn"></a>
          </div>
          <h2>Add New Listing</h2>
        </header>
        <section>
          <form>
            <img name="imagePreview" class="image-preview">
            <input type="file" name="listingImage" accept="image/*">
            <input type="text" name="title" placeholder="Title">
            <input type="text" name="price" placeholder="Price">
            <input type="text" name="expirationDate" placeholder="Expiration date">
            <input type="text" name="description" placeholder="Description">
            <input type="text" name="location" placeholder="Location">

            <button type="button" class="save">Add listing</button>
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
