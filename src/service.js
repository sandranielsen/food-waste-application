class Service {
  constructor() {
    this.listings = [];
    this.baseUrl = "http://foodwaste.sonajuhasova.com/backend/";
    this.loginUrl = this.baseUrl + "/login.php";
    this.uploadUrl = this.baseUrl + "/fileUpload.php";
    this.listingsUrl = this.baseUrl + "/listing.php";
    this.selectedListingId;
  }

  /***** Login/Signup *****/
  /* Fetch and return all listings from backend service */
  async signupUser(name, username, password, passwordCheck) {
    const url = `${this.loginUrl}?action=signup`;
    var data = {
      name: name,
      username: username,
      password: password,
      passwordCheck: passwordCheck,
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data), // parsing js object to json object
    });
    const json = await response.json();
    return json;
  }

  /***** Read listing *****/
  async getListings() {
    const url = `${this.listingUrl}?action=getListings`;
    const response = await fetch(url);
    const data = await response.json();
    this.listings = data;
    return this.listings;
  }

  async getListing(listingId) {
    const url = `${this.listingUrl}?action=getListing&listingId=${listingId}`;
    const response = await fetch(url);
    const listing = await response.json();
    return listing;
  }

  /***** Create listing *****/
  /* Image upload */
  async uploadImage(imageFile) {
    let formData = new FormData();
    formData.append("fileToUpload", imageFile);

    const response = await fetch(`${this.uploadUrl}?action=uploadImage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    // waiting for the result
    const result = await response.json();
    return result;
  }

  async createListing(
    title,
    price,
    description,
    expirationDate,
    location,
    image
  ) {
    const id = Date.now(); // dummy generated listing id
    const newListing = {
      // declaring a new js object with the form values
      id,
      title,
      price,
      description,
      expirationDate,
      location,
      image,
    };

    // post new listing to php service using fetch(...)
    const response = await fetch(this.listingUrl + "?action=createListing", {
      method: "POST",
      body: JSON.stringify(newListing), // parsing js object to json object
    });
    // waiting for the result
    const result = await response.json();
    // the result is the new updated listings array
    this.listing = result;
    return this.listing;
  }

  /***** Delete listing */
  async deleteListing(listingId) {
    const response = await fetch(
      `${this.listingUrl}?action=deleteListing&listingId=${listingId}`,
      {
        method: "DELETE",
      }
    );
    // waiting for the result
    const result = await response.json();
    // the result is the new updated listings array
    this.listing = result;
    return this.listing;
  }

  /***** Update listing *****/
  async updateListing(
    id,
    title,
    price,
    description,
    expirationDate,
    location,
    image
  ) {
    const listingToUpdate = {
      // declaring a new js object with the form values
      id,
      title,
      price,
      description,
      expirationDate,
      location,
      image,
    };
    // put listing to php service using fetch(...)
    const response = await fetch(this.listingUrl + "?action=updateListing", {
      method: "PUT",
      body: JSON.stringify(listingToUpdate), // parsing js object to json object
    });
    // waiting for the result
    const result = await response.json();
    // the result is the new updated listings array
    this.listings = result;
    return this.listings;
  }

  /***** User *****/
  async getUser() {
    const url = `${this.baseUrl}?action=getUser&userId=${userId}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
  }
}

const service = new Service();
export default service;
