import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import logo from "./logo/logo.svg";
import Home from "./home/home";
import Blog from "./blog/blog";
import Order from "./order/order";
import Features from "./features/features";
import Company from "./company/company";
import "../src/App.scss";
import ScrollToTop from "./srolltop";
import MainSign from "./signin-signup/main";
import Api from "./api/api";
import Detail from "./Detail";
import $ from "jquery";
import Blogdetail from "./blog/blogdetail";
import styled from "styled-components";

function App() {
  const [loading, setLoading] = useState(true);
  const [[left, width], setPosLine] = useState([0, 0]);

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
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  const handerHeader = () => {
    const header = document.querySelector(".app");

    if (header.clientHeight === 80) {
      header.style.height = "480px";
    } else {
      header.style.height = "80px";
    }
  };
  // const menuA = () => {
  //   const header = document.querySelector(".app");
  //   header.style.height = "80px";
  // };

  useEffect(() => {
    if (left && width)
      localStorage.setItem("line_pos", JSON.stringify({ left, width }));
    else {
      if (!JSON.parse(localStorage.getItem("line_pos")))
        localStorage.setItem(
          "line_pos",
          JSON.stringify({ left: 30, width: 40 })
        );
    }
    const line_pos = JSON.parse(localStorage.getItem("line_pos"));
    if (line_pos) setPosLine([line_pos.left, line_pos.width]);
  }, [left, width]);

  return (
    <div className="App preloading">
      {loading && (
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
      )}
      <div className="app">
        <a href="/" className="app-logo">
          <img className="app-img" src={logo} alt="/" />
        </a>

        <div className="app-nav">
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              to="/"
            >
              Home
            </NavLinkA>
          </NavLink>
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              to="/features"
            >
              Features
            </NavLinkA>
          </NavLink>
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              to="/blog"
            >
              Blog
            </NavLinkA>
          </NavLink>
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              to="/order"
            >
              Order
            </NavLinkA>
          </NavLink>
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              to="/company"
            >
              Company
            </NavLinkA>
          </NavLink>
          <NavLink>
            <NavLinkA
              onClick={(e) =>
                setPosLine([e.target.offsetLeft, e.target.offsetWidth])
              }
              className="app-nav__a app-signin"
              to="/SignIn"
            >
              SignIn
            </NavLinkA>
          </NavLink>

          <Line offset={{ left, width }} />
        </div>

        <i onClick={handerHeader} className="fas fa-bars"></i>
        <div className="overlay" />
      </div>

      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/detaiblog/:id" element={<Api />} />
          <Route exact path="/blog/detail/:id" element={<Blogdetail />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/order/detail/:id" element={<Detail />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/SignIn" element={<MainSign />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

const NavLink = styled.div`
  padding: 0 2em;
  width: 100%;
  line-height: 80px;
  font-size: 1.5em;
`;

const NavLinkA = styled(Link)`
  text-decoration: none;
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;

const Line = styled.div`
  position: absolute;
  left: ${(props) => props.offset.left}px;
  width: ${(props) => props.offset.width}px;
  bottom: 0;
  height: 2px;
  border-radius: 15px;
  background: #814bf6;
  transition: all 0.2s ease;
`;

export default App;
