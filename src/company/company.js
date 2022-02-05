import "../company/company.scss";
import blus from "../logo/bgblur-blog.png";
import bubbl from "../logo/bubble2-about.svg";
import Footer from "../footer/footer";
import smaill from "../logo/small-bubble-about.svg";
function Company() {
  document.title = "company";
  return (
    <div className="company">
      <img alt="" width="100%" src={blus} />
      <div className="order--title">
        <h2 className="feature--h2">
          We optimize each and every detail to keep things simple for you
        </h2>
      </div>
      <div className="company--title">
        <div>
          <h2 className="company--h2">
            Build, scale, and run your web apps the way you want with us
          </h2>
          <p className="company--p">
            Because no other cloud provider gives developers such a refined
            experience in their workflow
          </p>
        </div>
        <div>
          <div className="company--icon">
            <svg className="icon icon-circle company--icon__1">
              <use href="#icon-circle"></use>
            </svg>
            <svg className="icon icon-circle company--icon__2">
              <use href="#icon-circle"></use>
            </svg>
            <svg className="icon icon-circle company--icon__3">
              <use href="#icon-circle"></use>
            </svg>
          </div>
          <img
            alt=""
            className="company--tablet"
            width="700px"
            height="400px"
            src={bubbl}
          />
        </div>
      </div>
      <img alt="" width="100%" src={smaill} />
      <Footer />
    </div>
  );
}
export default Company;
