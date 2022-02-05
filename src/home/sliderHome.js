import "../home/sliderHome.scss";
import logo from "/project/src/logo/sliderHome.png";
import Content from "./content/content";
import logo1 from "/project/src/logo/google-logo.svg";
import logo2 from "/project/src/logo/d2-logo.svg";
import logo3 from "/project/src/logo/instana-logo.svg";
import logo4 from "/project/src/logo/digital-ocean-logo.svg";
import logo5 from "/project/src/logo/twitter-logo.svg";
import logo6 from "/project/src/logo/airbnb-logo.svg";
import { Link } from "react-router-dom";

function SliderHome() {
  return (
    <div>
      <div className="sliderhome">
        <div className="twinkling">
          <div className="sliderhome--wap">
            <h2 className="sliderhome--title">Coding Made Simple</h2>
            <p className="sliderhome--p">
              Through coupling IDE to the infrastructure, we're making a cloud
              experience like no other.
            </p>
            <div className="sliderhome--button">
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "10px 10px",
                }}
                to="/SignIn"
              >
                Get started
              </Link>
            </div>
            <div className="sliderhome--text__P">
              <p className="sliderhome--text__P-1">Full power of the cloud</p>
              <p className="sliderhome--text__P-1">Works anywhere</p>
              <p className="sliderhome--text__P-1">No config</p>
            </div>
            <div className="sliderhome--img1">
              <img src={logo1} className="sliderhome--img__1" />
              <img src={logo2} className="sliderhome--img__1" />
              <img src={logo3} className="sliderhome--img__1" />
              <img src={logo4} className="sliderhome--img__1" />
              <img src={logo5} className="sliderhome--img__1" />
              <img src={logo6} className="sliderhome--img__1" />
            </div>
          </div>
          <div className="sliderhome--img">
            <img className="sliderhome--img__rotage" src={logo} width="100%" />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}

export default SliderHome;
