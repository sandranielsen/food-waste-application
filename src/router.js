import StartPage from "./pages/start.js";
import SignUpPage from "./pages/signup.js";
import LogInPage from "./pages/login.js";
import HomePage from "./pages/home.js";
import FilterPage from "./pages/filter.js";
import ProductPage from "./pages/product-page.js";
import ChatPage from "./pages/chat.js";
import AddListingPage from "./pages/add-listing.js";
import FavouritesPage from "./pages/favourites.js";
import ProfilePage from "./pages/profile.js";
import AccountPage from "./pages/account.js";
import MyImpactPage from "./pages/my-impact.js";
import MyListingsPage from "./pages/my-listings.js";
import MyPurchasesPage from "./pages/my-purchases.js";
import PublicProfilePage from "./pages/public-profile.js";
import UpdatePage from "./pages/update.js";

class Router {
  constructor() {
    this.routes = [
      {
        path: "/", 
        view: new StartPage("start"), 
      },
      {
        path: "/signup",
        view: new SignUpPage("signup"),
      },
      {
        path: "/login",
        view: new LogInPage("login"),
      },
      {
        path: "/home",
        view: new HomePage("home"),
      },
      {
        path: "/filter",
        view: new FilterPage("filter"),
      },
      {
        path: "/product",
        view: new ProductPage("product"),
      },
      {
        path: "/chat",
        view: new ChatPage("chat"),
      },
      {
        path: "/add",
        view: new AddListingPage("add"),
      },
      {
        path: "/favourites",
        view: new FavouritesPage("favourites"),
      },
      {
        path: "/profile",
        view: new ProfilePage("profile"),
      },
      {
        path: "/account",
        view: new AccountPage("account"),
      },
      {
        path: "/impact",
        view: new MyImpactPage("impact"),
      },
      {
        path: "/listings",
        view: new MyListingsPage("listings"),
      },
      {
        path: "/purchases",
        view: new MyPurchasesPage("purchases"),
      },
      {
        path: "/public",
        view: new PublicProfilePage("public"),
      },
      {
        path: "/update",
        view: new UpdatePage("update"),
      },

      /*
      {
        path: "/update/:id",
        view: new UpdatePage("update"),
      },
      {
        path: "/user/:id",
        view: new UserProfilePage("profile"),
      },
      */
    ];
    // Declaring properties: pages and navLinks. Initialised in init().
    this.pages;
    this.navLinks;
  }

  /* Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo() */
  init() {
    this.pages = document.querySelectorAll(".page");
    this.navLinks = document.querySelectorAll("nav a");
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.pathname)); // change page when using back and forth in browser
    this.navigateTo(location.pathname);
  }

  /* Changing display to none for all pages */
  hideAllPages() {
    for (const page of this.pages) {
      page.style.display = "none";
    }
  }

  /* Navigating SPA to specific page by given path - props can be passed from one component (page) to another through the router.navigateTo */
  navigateTo(path, props) {
    window.history.pushState({}, path, path);
    this.showPage(path, props);
  }

  showPage(path, props = {}) {
    this.hideAllPages(); // hide all pages
    const route = this.matchRoute(path, props); // finds a matching route by the path
    route.view.beforeShow(props); // before we display the page, beforeShow is called inside of the page. By that we can execute stuff and use passed props (properties).
    document.getElementById(route.view.id).style.display = "block"; // chaning display to block of the view (page)
    this.setActiveTab(route.path);
  }

  /* Returns a route from this.routes matching the path name - based on the path. */
  matchRoute(path, props) {
    const route = this.routes.find((route) => {
      if (route.path.includes("/:id")) {
        const mainRoute = route.path.split("/:id")[0];
        if (path.includes(mainRoute)) {
          props.id = path.split("/").pop();
          return route;
        }
      } else if (route.path.includes(path)) {
        return route;
      }
    });

    return route;
  }

  /* Sets active menu item by given path */
  setActiveTab(path) {
    for (const link of this.navLinks) {
      if (path === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  /* Attaching event to nav links and preventing default anchor link event */
  attachNavLinkEvents() {
    const navLinks = document.querySelectorAll(".router-link");
    for (const link of navLinks) {
      link.addEventListener("click", (event) => {
        const path = link.getAttribute("href");
        this.navigateTo(path);
        event.preventDefault();
      });
    }
  }

  goBack() {
    history.back();
  }
}

const router = new Router();
export default router;
