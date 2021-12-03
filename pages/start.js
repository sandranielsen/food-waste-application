export default class StartPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="start" class="page">
      <div class="start_container">
        <img src="/media/start-bg.jpg" alt="Food" class="start-bg">
        <div class="overlay"></div>

        <div class="start_content">
          <h1 class="start_text">Reduce your waste</h1>
          <h1 class="start_text">Share your food</h1>
            <div class="btn_container">
              <button class="btn" onclick="navigateTo('login')">Login</button>
              <button class="btn" onclick="navigateTo('signup')">Sign up</button>
            </div>
        </div>

      </div>
        
        
      </section>
    `;
  }
}
