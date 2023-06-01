import React, { useRef, useState } from "react";
import "./index.css";
import CoverPic from "../../../assest/image/cover-pic.png";
import CompanyLogo from "../../../assest/icon/logo.png";
import VisiblePasswordIcon from "../../../assest/icon/visible-password-icon.png";
import Input from "../../widgets/input";
const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Do something with the username and password, such as authentication

    // Clear the input fields
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login-screen">
      <div className="left-side">
        <img src={CoverPic} alt="Wallpaper" />
      </div>
      <div className="right-side">
        <div className="logoStyle">
          <img className="logo" src={CompanyLogo} alt="Company Logo" />
        </div>
        <div>
          <span className="welcome-text logo-slogan-1">Welcome</span>
          <span className="back-text logo-slogan-1"> Back!</span>
        </div>
        <span className="logo-slogan-2">Glad to see you, Again!</span>

        <div className="login-content">
          <Input
            inputStyle={{
              width: "63%",
            }}
            type={"text"}
            ref={usernameRef}
            placeholder={"Enter your email"}
          />
          <Input
            inputStyle={{
              width: "63%",
            }}
            type={passwordVisible ? "text" : "password"}
            ref={passwordRef}
            iconStyle={{ width: "25px" }}
            placeholder={"Enter your email password"}
            rightIcon={VisiblePasswordIcon}
            iconHandler={() => setPasswordVisible(!passwordVisible)}
          />

          <div className="button" onClick={handleLogin}>
            <text className="button-text">Log In</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
