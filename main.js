import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import ChatPage from "./pages/chat.js";
import AddListingPage from "./pages/add-listing.js";
import FavouritesPage from "./pages/favourites.js";
import ProfilePage from "./pages/profile.js";
import spaService from "./services/spa.js";

// Declare and init
let navBar = new NavBar();
let homePage = new HomePage();
let chatPage = new ChatPage();
let addListingPage = new AddListingPage();
let favouritesPage = new FavouritesPage();
let profilePage = new ProfilePage();

// Init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
