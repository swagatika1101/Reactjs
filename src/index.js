import React from "react";
import ReactDOM from "react-dom";
const fname = "P";
const lname = "Swagatika";

const num = 2;

ReactDOM.render(
  <div>
    <h1>My name is {fname + " " + lname}</h1>
    <h1>My Hobbies are: </h1>
    <ul>
      <li>Dancing</li>
      <li>Travelling</li>
      <li>Cooking</li>
    </ul>
    <h1>My Lucky Number Is {Math.floor(Math.random() * 10)}</h1>
  </div>,
  document.getElementById("root")
);
