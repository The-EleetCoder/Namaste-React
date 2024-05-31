import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
