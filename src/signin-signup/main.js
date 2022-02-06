import React, { Fragment, useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

function MainSign() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Fragment>
      {isLogin ? (
        <SignIn setIsLogin={setIsLogin} />
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
    </Fragment>
  );
}

export default MainSign;
