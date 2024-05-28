import React from "react";
import ReactDOM from "react-dom/client";

// react element using core react
const heading = React.createElement("h1",{id: "heading"}, "Namaste React 🚀");

// react element using jsx
const jsxHeading = <h1 id='heading'>Namaste React using jsx 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
