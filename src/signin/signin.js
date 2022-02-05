import sgin from "../logo/bdfc3bf9fbe8c9c7a9ba.png";
import sgin2 from "../logo/e9b85d9d9916eec8f1a3.png";
import "../signin/signin.scss";
function SignIn() {
  document.title = "signIn";
  return (
    <div className="sign">
      <div>
        <img
          alt=""
          className="sign--img"
          height="100%"
          width="100%"
          src={sgin}
        />
        <div className="sign--img__title">
          <h2 className="sign--img__h2">Deploy in Minutes</h2>
          <p className="sign--img__p">
            Everything is fully backed by TheSphere, Codesphere's distributed
            high-performance data center
          </p>
          <img alt="" width="100%" src={sgin2} />
        </div>
      </div>
      <div className="sign--title">
        <h2 className="sign--title__h2">Welcome to Codesphere</h2>
        <p className="sign--title__p">Let's get started</p>

        <div className="sign--login">
          <input className="sign--login__email" placeholder="Email" />
        </div>
        <div>
          <input className="sign--login__email" placeholder="Password" />
        </div>
        <div className="sign--button">Create a new account</div>
      </div>
    </div>
  );
}

export default SignIn;