import router from "../router.js";
import service from "../service.js";

export default class HomePage {
  constructor(id) {
    this.id = id;
    this.render();
    this.init();
  }

  render() {
    document.querySelector("#root").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Home</h2>
        </header>
        <h3>Portfolio SPA Template</h3>
        <p>My Single Page Web App Template</p>
      </section>
    `
    );
  }

  async init() {
    const listings = await service.getListings();
    this.appendListings(listings);
  }

  appendListings(listings) {
    let htmlTemplate = "";
    for (const listing of listings) {
      htmlTemplate += /*html*/ `
                <article data-listing-id="${listing.id}">
                    <img src="${service.baseUrl}/files/medium/${
        listing.image || "placeholder.jpg"
      }">
                    <h3>${listing.title}</h3>
                    <h4>${listing.price}</h4>
                    <h5>${listing.location}</h5>
                    <p>${listing.description}</p>
                    <p>${listing.expirationDate}</p>
                </article>
            `;
    }
    document.querySelector(`#${this.id} .listing-grid`).innerHTML =
      htmlTemplate;
    this.attachEvents();
  }

  attachEvents() {
    document
      .querySelectorAll(`#${this.id} [data-listing-id]`)
      .forEach((element) => {
        element.onclick = () => {
          const listingId = element.getAttribute("data-listing-id");
          router.navigateTo(`/listing/${listingId}`);
        };
      });
  }

  beforeShow(props) {
    if (props.listing) {
      this.appendListings(props.listings);
    }
  }
}
