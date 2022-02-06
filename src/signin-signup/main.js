import React, { useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

function MainSign() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? <SignIn /> : <SignUp />}
      <button onClick={() => setIsLogin(!isLogin)}>Click here to change</button>
    </div>
  );
}

export default MainSign;
