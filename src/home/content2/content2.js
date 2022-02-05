import "../content2/content2.scss";
import githubIn from "/project/src/logo/github-integration.svg";
import githubIn1 from "/project/src/logo/icongithub.svg";
import githubIn2 from "/project/src/logo/multi-language.svg";
import githubIn3 from "/project/src/logo/iconglobe.svg";
import githubIn4 from "/project/src/logo/app-monitoring.webp";
import githubIn5 from "/project/src/logo/icondashboard.svg";
import githubIn6 from "/project/src/logo/custom-plan.webp";
import githubIn7 from "/project/src/logo/iconcustom.svg";
import Footer from "../../footer/footer";

function Content2() {
  return (
    <div>
      <div className="content2">
        <div className="content2-title ">
          <h2 className="content2-h2 ">
            Features to make you never want to go back to the old way of coding
          </h2>
          <p className="content2-p ">
            The most intuitive cloud provider you've ever used
          </p>
          <div
            className="content2--box wow slideInUp"
            data-wow-duration=".5s"
            data-wow-delay=".2s"
          >
            <div>
              <img width="100%" src={githubIn} />
            </div>
            <div className="content2--box__wapp">
              <img className="content2--box__img" src={githubIn1} />
              <h2 className="content2--box__h2">GitHub Integration</h2>
              <p className="content2--box__p">
                Codesphere allows you to import your projects directly from a
                public GitHub repository so you can start coding right away.
              </p>
            </div>
          </div>
          <div
            className="content2--box wow slideInUp"
            data-wow-duration=".5s"
            data-wow-delay=".6s"
          >
            <div>
              <img width="100%" src={githubIn2} />
            </div>
            <div className="content2--box__wapp">
              <img className="content2--box__img" src={githubIn3} />
              <h2 className="content2--box__h2">Multi Language</h2>
              <p className="content2--box__p">
                Codesphere comes with NodeJS and Python pre-installed, so you
                can code without spending hours configuring your environment.
                Codesphere also supports syntax highlighting and code completion
                for languages like HTML, CSS, JS, and Python.
              </p>
            </div>
          </div>
          <div
            className="content2--box wow slideInUp"
            data-wow-duration=".5s"
            data-wow-delay=".6s"
          >
            <div>
              <img width="100%" src={githubIn4} />
            </div>
            <div className="content2--box__wapp">
              <img className="content2--box__img" src={githubIn5} />
              <h2 className="content2--box__h2">App Monitoring</h2>
              <p className="content2--box__p">
                Monitor your app's storage, processing, and memory consumption
                all within Codesphere's web IDE - no external tools necessary!
              </p>
            </div>
          </div>
          <div
            className="content2--box content2--box__bottom  wow slideInUp"
            data-wow-duration=".5s"
            data-wow-delay=".6s"
          >
            <div>
              <img width="100%" src={githubIn6} />
            </div>
            <div className="content2--box__wapp ">
              <img className="content2--box__img" src={githubIn7} />
              <h2 className="content2--box__h2">Custom Plan</h2>
              <p className="content2--box__p">
                Don't let your cloud providers hit you with unexpected fees. Pay
                for exactly the storage, processing speed, and memory you need,
                and adjust it as you need.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Content2;
