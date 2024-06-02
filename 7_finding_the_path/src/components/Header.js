import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button className="login-btn" onClick={handleLoginClick}>
            {loginStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
