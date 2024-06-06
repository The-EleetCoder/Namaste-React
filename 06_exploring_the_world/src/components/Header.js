import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");

  const handleLoginClick = () => {
    setLoginStatus(loginStatus == "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLoginClick}>
            {loginStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
