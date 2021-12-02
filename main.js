import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import ChatPage from "./pages/chat.js";
import AddListingPage from "./pages/add-listing.js";
import FavouritesPage from "./pages/favourites.js";
import ProfilePage from "./pages/profile.js";
import AccountPage from "./pages/account.js";
import FilterPage from "./pages/filter.js";
import LogInPage from "./pages/login.js";
import MyImpactPage from "./pages/my-impact.js";
import MyListingsPage from "./pages/my-listings.js";
import MyPurchasesPage from "./pages/my-purchases.js";
import ProductPage from "./pages/product-page.js";
import PublicProfilePage from "./pages/public-profile.js";
import SignUpPage from "./pages/signup.js";
import StartPage from "./pages/start.js";
import spaService from "./services/spa.js";

// Declare and init
let navBar = new NavBar();
let homePage = new HomePage();
let chatPage = new ChatPage();
let addListingPage = new AddListingPage();
let favouritesPage = new FavouritesPage();
let profilePage = new ProfilePage();
let accountPage = new AccountPage();
let filterPage = new FilterPage();
let logInPage = new LogInPage();
let myImpactPage = new MyImpactPage();
let myListingsPage = new MyListingsPage();
let myPurchasesPage = new MyPurchasesPage();
let productPage = new ProductPage();
let publicProfilePage = new PublicProfilePage();
let signUpPage = new SignUpPage();
let startPage = new StartPage();

// Init services
spaService.init();

window.pageChange = () => spaService.pageChange();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
