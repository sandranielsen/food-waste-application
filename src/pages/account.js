import router from "../router.js";
import service from "../service.js";

export default class AccountPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.locationImg = require("../img/location.svg");
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
          <h2>Account</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
            <h3>Louise Christensen</h3> 
          <div class="profile-location">
              <img src="${this.locationImg}">
              <p>Aarhus</p> 
            </div>

            <!--- Profile information inputs --->
            <form class="form-inputs">
              <label for="name">Name</label><br>
              <input type="text" id="name" name="name"><br>  

              <label for="location">Location</label><br>
              <input type="text" id="location" name="location"><br>  

              <label for="email">Email</label><br>
              <input type="text" id="email" name="email"><br>  

              <label for="cars">Currency</label> <br>

              <select name="currency" id="currency">
                <option value="dkk">DKK</option>
                <option value="eur">Eur</option>
                <option value="dollar">US dollar</option> 
              </select>

              </form>
              <form class="form-checkboxes">

              <!--- Payment preference form --->
              <p>Payment Preference</p>

              <input type="checkbox" id="payment-card" name="payment-card" value="payment-card">
              <label for="payment-card" class="account-checkbox-label">Credit Card</label><br>

              <input type="checkbox" id="mobile-pay" name="mobile-pay" value="mobile-pay">
              <label for="mobile-pay" class="account-checkbox-label">Mobile Pay</label><br>

              <!--- Notification form --->
              <p>Notifications</p>

              <input type="checkbox" id="notifications-on" name="notifications-on" value="notifications-on">
              <label for="notifications-on" class="account-checkbox-label">On</label><br>

              <input type="checkbox" id="notifications-of" name="notifications-of" value="notifications-of">
              <label for="notifications-of" class="account-checkbox-label">Of</label><br>
            
            
              </form>



            <div class="account-buttons">
                    <button onclick="location.href='/account'">Update profile</button> 
            </div>
          <div>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
