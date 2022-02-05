import feature from "../logo/bg-hero-features.jpg";
import "../features/feature.scss";
import feature1 from "../logo/multi-language.svg";
import feature2 from "../logo/github-integration.svg";
import feature3 from "../logo/code-search.webp";
import feature4 from "../logo/custom-domain.webp";
import feature5 from "../logo/app-monitoring.webp";
import feature6 from "../logo/environment-variables.webp";
import feature7 from "../logo/custom-plan.webp";
import Footer from "../footer/footer";
function Features() {
  document.title = "features";

  return (
    <div className="feature fullPage">
      <div className="feature--img__1">
        <img alt="" className="feature--img__2" width="100%" src={feature} />
      </div>
      <div className="feature--title">
        <p className="feature--p">AWESOME FEATURES</p>
        <h2 className="feature--h2">
          Everything you need to go from development to production
        </h2>
      </div>
      <div className="feature--scroll">
        <div className="feature--navleft">
          <div className="feature--navleft__1 section">
            <div className="feature--mg">
              <h2 className="feature--h2__1">Multi Language</h2>
              <p className="feature--p__1">
                Codesphere comes with NodeJS and Python pre-installed, so you
                can code without spending hours configuring your environment.
                Codesphere also supports syntax highlighting and code completion
                for languages like HTML, CSS, JS, and Python.
              </p>
            </div>
            <div>
              <img alt="" className="feature--media" src={feature1} />
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div>
              <img alt="" className="feature--media1" src={feature2} />
            </div>
            <div className="feature--mg">
              <h2 className="feature--h2__1">GitHub Integration</h2>
              <p className="feature--p__1">
                Codesphere allows you to import your projects directly from a
                public GitHub repository so you can start coding right away.
              </p>
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div className="feature--mg">
              <h2 className="feature--h2__1">Code Search</h2>
              <p className="feature--p__1">
                Code Search allows you to navigate across your project easily by
                seamlessly searching both the names and contents of all your
                files.
              </p>
            </div>
            <div>
              <img alt="" width="100%" src={feature3} />
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div>
              <img alt="" width="100%" src={feature4} />
            </div>
            <div className="feature--mg">
              <h2 className="feature--h2__1">Custom Domains</h2>
              <p className="feature--p__1">
                Connect custom domains to your hosted apps so that you can
                better show your projects off to the world. Don’t have a domain?
                Codesphere’s default domain will still be public facing!
              </p>
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div className="feature--mg">
              <h2 className="feature--h2__1">App Monitoring</h2>
              <p className="feature--p__1">
                Monitor your app's storage, processing, and memory consumption
                all within Codesphere's web IDE - no external tools necessary!
              </p>
            </div>
            <div>
              <img alt="" width="100%" src={feature5} />
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div>
              <img alt="" width="100%" src={feature6} />
            </div>
            <div className="feature--mg">
              <h2 className="feature--h2__1">Environment Variables</h2>
              <p className="feature--p__1">
                Transition between environments without a hiccup by adding
                environment variables directly in Codesphere.
              </p>
            </div>
          </div>
          <div className="feature--navleft__1 section">
            <div className="feature--mg">
              <h2 className="feature--h2__1">Custom Plan</h2>
              <p className="feature--p__1">
                Don't let your cloud providers hit you with unexpected fees. Pay
                for exactly the storage, processing speed, and memory you need,
                and adjust it as you need.
              </p>
            </div>
            <div>
              <img alt="" width="100%" src={feature7} />
            </div>
          </div>
        </div>
        <div className="feature--navright">
          <div>
            <h2 className="feature--scroll-line">Multi Language</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">GitHub Integration</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">Code Search</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">Custom Domains</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">App Monitoring</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">Environment Variables</h2>
          </div>
          <div>
            <h2 className="feature--scroll-line">Custom Plan</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Features;
