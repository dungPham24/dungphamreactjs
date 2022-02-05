import footer from "../logo/circle-codesphere.svg";
import contetnfeeback from "../logo/iconbook.svg";
import contetnfeeback1 from "../logo/iconfeedback.svg";
function Footer() {
  return (
    <>
      <div className="content2--feeback">
        <div className="content2--feeback__wapp1">
          <div className="content2--feeback__img">
            <img alt="" src={contetnfeeback} />
          </div>
          <div className="content2--ml">
            <h2 className="content2__h2">What can I build with Codesphere?</h2>
            <p className="content2__p">
              Our tutorials showcase only the start of the amazing web apps,
              bots, and software that you can build with Codesphere.
            </p>
          </div>
        </div>
        <div className="content2--feeback__wapp">
          <div className="content2--feeback__img">
            <img alt="" src={contetnfeeback1} />
          </div>
          <div className="content2--ml">
            <h2 className="content2__h2">Feedback</h2>
            <p className="content2__p">
              Our tutorials showcase only the start of the amazing web apps,
              bots, and software that you can build with Codesphere.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer--grid5">
          <div>
            <img alt="" className="footer-img" width="100%" src={footer} />
            <h2 className="footer-codep">Codesphere</h2>
            <p className="footer-codepp">
              2022 © Copyright Codesphere Inc. All rights reserved
            </p>
          </div>
          <div className="footer-mg">
            <h2 className="footer-h2">RESOURCES</h2>
            <p className="footer-p">Feedback</p>
            <p className="footer-p">FAQ</p>
            <p className="footer-p">Blog</p>
          </div>
          <div className="footer-mg">
            <h2 className="footer-h2">COMPANY</h2>
            <p className="footer-p">About</p>
            <p className="footer-p">Investors</p>
            <p className="footer-p">Pricing</p>
          </div>
          <div className="footer-mg">
            <h2 className="footer-h2">OTHER</h2>
            <p className="footer-p">Copyright</p>
            <p className="footer-p">Privacy Policy</p>
            <p className="footer-p">Terms of Service</p>
          </div>
          <div className="footer-mgg">
            <div>
              <h2 className="footer-contact">contact</h2>
              <a className="footer-contact--1" href="mailto:tdat8244@gmail.com">
                tdat8244@gmail.com
              </a>
            </div>
            <div>
              <label className="footer-contact">supports</label>
              <a
                className="footer-contact--1"
                href="https://www.facebook.com/colenbana"
              >
                tdat8244@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
