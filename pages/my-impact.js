export default class MyImpactPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="impact" class="page">
        <header class="topbar">
          <h2>About</h2>
        </header>

        <h2>My Impact Tracker</h2>
            <div class="impact-tracker-wrapper">
                <div class="impact-tracker">
                  <h3>3</h3>
                  <h4>Purchase(s)<br>made</h4>
                </div>
                <div class="impact-tracker">
                  <h3>3</h3>
                  <h4>Listing(s)<br>made</h4>
                </div>
            </div>

            <h2>Badges</h2>
            <div class="impact-badges-wrapper">
                <div class="impact-badge">
                    
                
                </div>
            </div>
      </section>
    `;
  }
}
