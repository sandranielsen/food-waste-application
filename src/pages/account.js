import router from "../router.js";
import service from "../service.js";

export default class AccountPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg");
    this.locationImg = require("../img/location.svg");
    this.service = service;
    this.router = router;
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
            <a id="back-btn1"><img src="${this.backImg}"></a>
          </div>
          <h2>Account</h2>
        </header>

        <!--- Profile container --->
        <div class="section-wrapper">
          <div class="profile-img"></div>
            <h4 id="profile-user-name"></h4> 
          <div class="profile-location">
              <img src="${this.locationImg}">
              <p>Aarhus</p> 
            </div>

            <!--- Profile information inputs --->
            <form class="form-inputs">
              <label for="name">Name</label><br>
              <input type="text" class="account_form" id="name" name="name"><br>  

              <label for="location">Location</label><br>
              <input type="text" class="account_form" id="location" name="location"><br>  

              <label for="email">Email</label><br>
              <input type="text" class="account_form" id="email" name="email"><br>  

              <label for="cars">Currency</label> <br>

              <select class="account_form" name="currency" id="currency">
                <option value="dkk">DKK</option>
                <option value="eur">Eur</option>
                <option value="dollar">US dollar</option> 
              </select>

              </form>
              <form class="form-checkboxes">

                <!--- Payment preference form --->
                <p>Payment Preference</p>
                <div>
                  <input type="checkbox" id="payment-card" name="payment" value="payment-card">
                  <label for="payment-card" class="account-checkbox-label">Credit Card</label><br>
                </div>
                <div>
                  <input type="checkbox" id="mobile-pay" name="payment" value="mobile-pay">
                  <label for="mobile-pay" class="account-checkbox-label">Mobile Pay</label><br>
                </div>

                <!--- Notification form --->
                <p>Notifications</p>
                <div>
                  <input type="checkbox" id="notifications-on" name="notifications" value="notifications-on">
                  <label for="notifications-on" class="account-checkbox-label">On</label><br>
                </div>
                <div>
                  <input type="checkbox" id="notifications-off" name="notifications" value="notifications-of">
                  <label for="notifications-of" class="account-checkbox-label">Of</label><br>
                </div>
              </form>


            <!--- Button container --->
            <div class="account-buttons">
              <button class="btn_alt" id="profile-update-btn">Update profile</button> 
            </div>
          <div>
      </section>
    `
    );

    /* Button router(s) */
    document.querySelector("#back-btn1").addEventListener("click", () => {
      router.navigateTo("/profile");
    });

    document.querySelector("#profile-update-btn").addEventListener("click", () => {
      router.navigateTo("/account");
    });
  }

  beforeShow(props) {
    document.querySelector("#profile-user-name").innerHTML =
      this.service.user.user_name;
    console.log(props);
  }
}
