class Service {
  constructor() {
    this.listings = [];
    this.baseUrl = "http://foodwaste.sonajuhasova.com/backend/";
    this.loginUrl = this.baseUrl + "/login.php";
    this.fileUploadUrl = this.baseUrl + "/fileUpload.php";
    this.listingUrl = this.baseUrl + "/listing.php";
    this.selectedListingId;
  }

  // rasmus' code
  async signupUser(name,username,password,passwordCheck)
  {
    const url =`${this.loginUrl}?action=signup`;
    var data = {
      'name':name,
      'username':username,
      'password':password,
      'passwordCheck':passwordCheck
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data), // parsing js object to json object
    });
    const json = await response.json();
    return json;

  }

  async loginUser(name,password)
  {
    const url =`${this.loginUrl}?action=login`;
    var data = {
      'username':name,
      'password':password,
    };
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data), // parsing js object to json object
    });
    const json = await response.json();
    return json;

  }

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
    const user = await response.json();
    return user;
  }
  


  async uploadImage(imageFile) {
    let formData = new FormData();
    formData.append("fileToUpload", imageFile);

    const response = await fetch(`${this.fileUploadUrl}?action=uploadImage`, {
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

  

  async deleteListing(listingId) {
    const response = await fetch(
      `${this.baseUrl}?action=deleteListing&listingId=${listingId}`,
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

  async createListing(title, price, expirationDate, description, location, image) {
    const id = Date.now(); // dummy generated listing id
    const newListing = {
      // declaring a new js object with the form values
      id,
      title,
      price,
      expirationDate,
      description,
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
      expirationDate,
      description,
      location,
      image
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
}

const service = new Service();
export default service;
