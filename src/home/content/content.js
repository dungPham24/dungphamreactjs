import "../content/contenthome.scss";
import clou from "/project/src/logo/clound-home.png";
import linehome from "/project/src/logo/line1-home.svg";
import screendev from "/project/src/logo/screendev-home.webp";
import linehome2 from "/project/src/logo/line2-home.svg";
import config from "/project/src/logo/config-home.webp";
import Content2 from "../content2/content2";
function Content() {
  return (
    <>
      <div className="content">
        <div className="content--img">
          <img
            className="content--img--sub"
            width="100%"
            height="100%"
            src={clou}
          />
        </div>
        <div className="content--img">
          <h2 className="content--title">Deploy in Minutes</h2>
          <p className="content--p">
            Deploy your web app in minutes with zero-config! Codesphere removes
            the unnecessary overhead so you can spend less time configuring and
            more time coding. We’ve got you covered!
          </p>
        </div>
      </div>
      <div className="content--line">
        <img src={linehome} />
      </div>
      <div className="content--img2">
        <div className="content--title-1">
          <h2 className="content--title ">Code Directly in the Cloud</h2>
          <p className="content--p">
            Our next-generation cloud IDE provides all the features you need
            plus more. From code completion to live collaboration, we've built
            it all!
          </p>
        </div>
        <div className="content--img__sub">
          <img className="content--img__sub" src={screendev} />
        </div>
      </div>
      <div className="content--img__line">
        <img src={linehome2} />
      </div>
      <div className="content--config">
        <div>
          <img
            className="content--img3"
            height="100%"
            width="100%"
            src={config}
          />
        </div>
        <div>
          <h2 className="content--title">Employ Blazing Fast Infrastructure</h2>
          <p className="content--p">
            Everything is fully backed by TheSphere, Codesphere's distributed
            high-performance data center.
          </p>
        </div>
      </div>
      <Content2 />
    </>
  );
}
export default Content;
