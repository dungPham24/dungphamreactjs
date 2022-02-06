import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sgin from "../logo/bdfc3bf9fbe8c9c7a9ba.png";
import sgin2 from "../logo/e9b85d9d9916eec8f1a3.png";
import "./signin.scss";

function SignIn({ setIsLogin }) {
  document.title = "signIn";
  const history = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handerSubmit = () => {
    const user_local = JSON.parse(localStorage.getItem("userArr"));
    let hasLogin = false;
    let user_data = null;
    if (user_local) {
      user_local.forEach((item) => {
        if (item.Email === Email && item.Password === Password) {
          hasLogin = true;
          user_data = item;
        }
      });
    }
    if (hasLogin) {
      localStorage.setItem("HAS_LOGIN", hasLogin);
      localStorage.setItem("user_data", JSON.stringify(user_data));
      history("/");
    }
  };

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
        <div className="sign--button" onClick={() => setIsLogin(false)}>
          Dang ki
        </div>
      </div>
    </div>
  );
}

export default SignIn;
