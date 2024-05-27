// this {} is the place where we give attributes to the corresponding tag
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, world! using React"
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Creating nested elements using react
{
  /* 
<div id='parent'>
    <div id='child'>
        <h1>this is h1 tag</h1>
    </div>
</div> 
*/
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "this is h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
