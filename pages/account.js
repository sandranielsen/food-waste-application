export default class AccountPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <header class="topbar">
          <h2>Account</h2>
      </header>
        
      <section id="account" class="page">
        
        <div class="section-wrapper">
            <div class="profile-img"></div>
            <h3>Louise Christensen</h3> 
            <div class="profile-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.195" height="19.06" viewBox="0 0 13.195 19.06">
                    <path id="Icon_ionic-ios-pin" data-name="Icon ionic-ios-pin" d="M14.473,3.375A6.377,6.377,0,0,0,7.875,9.5c0,4.765,6.6,12.934,6.6,12.934s6.6-8.169,6.6-12.934A6.377,6.377,0,0,0,14.473,3.375Zm0,8.747a2.149,2.149,0,1,1,2.149-2.149A2.149,2.149,0,0,1,14.473,12.122Z" transform="translate(-7.875 -3.375)" fill="#13553f"/>
                    </svg>
                <p>Aarhus</p> 
            </div>

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

              <p>Payment Preference</p>

              <input type="checkbox" id="payment-card" name="payment-card" value="payment-card">
              <label for="payment-card" class="account-checkbox-label">Credit Card</label><br>

              <input type="checkbox" id="mobile-pay" name="mobile-pay" value="mobile-pay">
              <label for="mobile-pay" class="account-checkbox-label">Mobile Pay</label><br>

              <p>Notifications</p>

              <input type="checkbox" id="notifications-on" name="notifications-on" value="notifications-on">
              <label for="notifications-on" class="account-checkbox-label">On</label><br>

              <input type="checkbox" id="notifications-of" name="notifications-of" value="notifications-of">
              <label for="notifications-of" class="account-checkbox-label">Of</label><br>
            
            
              </form>



            <div class="account-buttons">
                    <button onclick="location.href='#account';">Update profile</button> 
            </div>
          <div>
      </section>
    `;
  }
}
