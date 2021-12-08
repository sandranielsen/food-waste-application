import router from "../router.js";
import service from "../service.js";

export default class ChatPage {
  constructor(id) {
    this.id = id;
    this.backImg = require("../img/back.svg"); 
    this.searchImg = require("../img/search.svg");
    this.filterImg = require("../img/filter.svg");
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
            <a href="/home"><img src="${this.backImg}"></a>
          </div>
          <h2>Chat</h2>
        </header>
         <!--- Chat box container --->
        <section class="chat_container">
        
          <!--- Search and filter container --->
        <div class="home_container">
        <div class="search-and-filter-container">
          <div class="search-container">
            <img src="${this.searchImg}">
            <input type="text" id="search">
          </div>
          <button onclick="location.href='/filter'" class="filter-button">
            <div>
              <img src="${this.filterImg}">
            </div>
          </button> 
        </div>

          <div class="chat_content_first">
            <div class="chat-profile-img" style="background-image: url('https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');"></div>
            <div>
              <p class="seller_name">Luisa Christensen</p>
              <p class="chat_preview">See you then<p>
             </div>
            <div class="chat-time">
            <p>18.24</p>
           </div>
          </div>

          <div class="chat_content">
          <div class="chat-profile-img" style="background-image: url('https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6');"></div>
          <div>
            <p class="seller_name">Anni Nielsen</p>
            <p class="chat_preview">Are the apples still available?<p>
           </div>
          <div class="chat-time">
          <p>16.02</p>
         </div>
        </div>

        <div class="chat_content">
        <div class="chat-profile-img" style="background-image: url('https://image.shutterstock.com/mosaic_250/101595/738242395/stock-photo-portrait-of-a-mature-businessman-wearing-glasses-on-grey-background-happy-senior-latin-man-looking-738242395.jpg');"></div>
        <div>
          <p class="seller_name">Søren Knudsen</p>
          <p class="chat_preview">I can pick up the apples tomorrow...<p>
         </div>
        <div class="chat-time">
        <p>14.56</p>
       </div>
      </div>

      <div class="chat_content">
      <div class="chat-profile-img" style="background-image: url('https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6');"></div>
      <div>
        <p class="seller_name">Harry Williams </p>
        <p class="chat_preview">Thanks for the purchase!<p>
       </div>
      <div class="chat-time">
      <p>10.48</p>
     </div>
    </div>

          


        </section>
      </section>
    `
    );
  }

  beforeShow(props) {
    console.log(props);
  }
}
