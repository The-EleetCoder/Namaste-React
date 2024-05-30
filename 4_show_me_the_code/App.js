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
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png" />
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
  )
}

const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
