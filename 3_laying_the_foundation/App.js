import React from "react";
import ReactDOM from "react-dom/client";

// react element using core react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

// react element using jsx
const jsxHeading = <h1 id="heading">Namaste React using jsx 🚀</h1>;

// react functional component
const Title = () => {
  return <h1>Title component 🚀</h1>;
};

const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>Namaste React functional component 🚀</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
