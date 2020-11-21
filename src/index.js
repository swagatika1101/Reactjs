import React from "react";
import ReactDOM from "react-dom";

//Dynamically change the color using inline css styles
const customStyle = {
  color: "Black",
  fontSize: "30px"
};

//end

//To change greeting acc to time
const date = new Date();
const currentTime = date.getHours();

let wish;

if (currentTime < 12) {
  wish = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 16) {
  wish = "Good Afternoon";
  customStyle.color = "green";
} else if (currentTime < 20) {
  wish = "Good Evening";
  customStyle.color = "blue";
} else {
  wish = "Good Night";
  customStyle.color = "brown";
}

//end greeting section

//to change year in footer
const Aname = "P Swagatika";
const currentDate = new Date();
const year = currentDate.getFullYear();

//end

//to add img constant in render function
const img = "https://picsum.photos/500/250";
//end

ReactDOM.render(
  <div>
    <h1 className="Heading" style={customStyle}>
      {wish}
    </h1>
    <div>
      <img alt="biriyani" src={img} />
    </div>
    <div>
      <h3 style={customStyle}>footer</h3>
      <p>Created by {Aname}</p>
      <p>Copyright © {year}</p>
    </div>
  </div>,
  document.getElementById("root")
);
