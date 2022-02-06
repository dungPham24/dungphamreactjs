import { useState } from "react";
import sgin from "../logo/bdfc3bf9fbe8c9c7a9ba.png";
import sgin2 from "../logo/e9b85d9d9916eec8f1a3.png";
import "./signin.scss";

function SignIn() {
  document.title = "signIn";
  const login = [];
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handerSubmit = () => {
    login.push({
      Email: Email,
      Password: Password,
    });
    localStorage.setItem("userArr", JSON.stringify(login));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
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
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="sign--login__email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="sign--login__email"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <div onClick={handerSubmit} className="sign--button">
            dang nhap
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
