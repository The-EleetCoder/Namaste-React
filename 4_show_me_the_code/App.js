import React from "react";
import ReactDOM from "react-dom/client";

/*
Basic layout of the app

- Header
  - Logo
  - Nav items
- Body
  - Search
  - Restaurant Container
    - Restaurant Card
      - Img
      - name of Res, Star Rating, Cuisine, time
- Footer
  - Copyrights
  - links
  - address
  - contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591"
      />
      <div className="res-details">
        <h3>Meghana Foods</h3>
        <h4>Burgers, fries, drinks</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
