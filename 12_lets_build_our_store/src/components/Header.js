import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import useInternetStatus from "../hooks/useInternetStatus";
import { AppContext } from "../context/AppContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loginStatus, setLoginStatus } = useContext(AppContext);
  const internetStatus = useInternetStatus("online");

  const cartItems = useSelector((store)=>store.cart.items) 

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
            <Link to="/">Cart ({cartItems.length})</Link>
          </li>
          <button className="login-btn" onClick={handleLoginClick}>
            {loginStatus}{" "}
            <p className="online-indicator">
              {internetStatus == "online" ? "🟢" : "🔴"}
            </p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
