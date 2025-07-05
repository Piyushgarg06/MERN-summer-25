import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//understanding how an elemenrt is created in react
// function NewApp() { this function works and create element as intended
//   return (
//     <>
//       <h1>element using newApp</h1>
//     </>
//   );
// }
// const AnotherElement = ( this method also works and create an anchor tag
//   <a href="https://google.com" target="_blank">
//     visit google by clicking
//   </a>
// );
const username = "piyush garg";
const ReactElement = React.createElement(
  //it has a structure tagname , attributes as an object, placeholder text or innerHTML , variables
  "a",
  { href: "https://google.com", target: "_blank" },
  "visit google.com by clicking here",
  //here we can pass any variable if we cant to
  username
);
createRoot(document.getElementById("root")).render(ReactElement);
