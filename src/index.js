import React from "react";
import ReactDOM from "react-dom";

const name = "Ayushhhh!";
const currentDate = new Date();
const Year = currentDate.getFullYear();
const time = currentDate.getHours();
console.log(time);

const Customstyle = {
  color: " Brown",
  fonstSize: "20px",
  border: "1px solid black"
};

console.log(Year);

let greeting;
if (time < 12) {
  greeting = "Morning Bitch";
} else if (time < 18) {
  greeting = "afternoooon sucker";
} else {
  greeting = "Soja Bhai";
}
ReactDOM.render(
  <div>
    <h1 style={Customstyle}> Heyy {name}</h1>
    <h2 className="heading">{greeting}</h2>
    <p>Copyright {Year}</p>
  </div>,
  document.getElementById("root")
);
