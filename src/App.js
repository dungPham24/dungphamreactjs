import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import logo from "../src/logo/logo.svg";
import Home from "./home/home";
import Blog from "./blog/blog";
import Order from "./order/order";
import Features from "./features/features";
import Company from "./company/company";
import Tab from "./tabs/tabs";
import "../src/App.scss";
import ScrollToTop from "./srolltop";
import SignIn from "./signin/signin";
import Api from "./api/api";
import Detail from "./Detail";
import $ from "jquery";
import Blogdetail from "./blog/blogdetail";

function App() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".app");
    if (window.scrollY > 2000) {
      header.style.opacity = "0";
    } else {
      header.style.opacity = "1";
    }
  });

  $(window).on("load", function () {
    $(".App").removeClass("preloading");
    $(".animate").delay(2500).fadeOut("slow");
  });
  const handerHeader = () => {
    const header = document.querySelector(".app");

    if (header.clientHeight === 80) {
      header.style.height = "480px";
    } else {
      header.style.height = "80px";
    }
  };
  const menuA = () => {
    const header = document.querySelector(".app");
    header.style.height = "80px";
  };

  return (
    <div className="App preloading">
      <div className="animate">
        <div className="loader">
          <div className="rocket">
            <i className="fas fa-rocket"></i>
            <i className="fas fa-cloud i1"></i>
            <i className="fas fa-cloud i2"></i>
            <i className="fas fa-cloud i3"></i>
            <div className="text-typing">
              <p>Welcome to project</p>
            </div>
          </div>
          <span>
            <i></i>
          </span>
        </div>
      </div>
      <div className="app">
        <a href="/" className="app-logo">
          <img className="app-img" src={logo} alt="/" />
        </a>

        <div className="app-nav">
          <div onClick={Tab} className="app-nav__link  ">
            <Link onClick={menuA} className="app-nav__a active " to="/">
              Home
            </Link>
          </div>
          <div onClick={Tab} className="app-nav__link">
            <Link onClick={menuA} className="app-nav__a" to="/features">
              Features
            </Link>
          </div>
          <div onClick={Tab} className="app-nav__link">
            <Link onClick={menuA} className="app-nav__a" to="/blog">
              Blog
            </Link>
          </div>
          <div onClick={Tab} className="app-nav__link">
            <Link onClick={menuA} className="app-nav__a" to="/order">
              Order
            </Link>
          </div>
          <div onClick={Tab} className="app-nav__link ">
            <Link onClick={menuA} className="app-nav__a" to="/company">
              Company
            </Link>
          </div>
          <div className="app-nav__link">
            <Link
              onClick={menuA}
              className="app-nav__a app-signin"
              to="/SignIn"
            >
              SignIn
            </Link>
          </div>

          <div className="line"></div>
        </div>

        <i onClick={handerHeader} className="fas fa-bars"></i>
        <div className="overlay"></div>
      </div>

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detaiblog/:id" element={<Api />} />
          <Route path="/blog/detail/:id" element={<Blogdetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/detail/:id" element={<Detail />} />
          <Route path="/company" element={<Company />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
