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
        <img className="logo" src="https://cdn.dribbble.com/userupload/4288549/file/original-438b97178ade9d02cb34fd941adc6357.jpg?resize=400x300&vertical=center" />
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
