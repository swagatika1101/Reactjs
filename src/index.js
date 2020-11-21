import React from "react";
import ReactDOM from "react-dom";

const Aname = "P Swagatika";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/500/250";
const customStyle = {
  color: "Black",
  fontSize: "30px",
  border: "1px solid black"
};

customStyle.color = "grey";

ReactDOM.render(
  <div>
    <h1 className="mainHeading">My Posters</h1>
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
