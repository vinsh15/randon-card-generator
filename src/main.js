/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/fondo-mesa.jpg";

var top = document.createElement("div");
var middle = document.createElement("div");
var bottom = document.createElement("div");

top.classList.add("top");
middle.classList.add("middle");
bottom.classList.add("bottom");

document.querySelector(".card").appendChild(top);
document.querySelector(".card").appendChild(middle);
document.querySelector(".card").appendChild(bottom);

var spanTop = document.createElement("span");
var numMiddle = document.createElement("h1");
var spanBotton = document.createElement("span");

spanTop.classList.add("spanTop");
numMiddle.classList.add("number");
spanBotton.classList.add("spanBotton");

top.appendChild(spanTop);
middle.appendChild(numMiddle);
bottom.appendChild(spanBotton);

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "k"
];

let color = ["red", "black"];
let redSimbol = ["♦", "♥"];
let blackSimbol = ["♠", "♣"];

function randNum(limit) {
  return Math.floor(Math.random() * limit) + 0;
}

function selection(array, length) {
  return array[randNum(length)];
}

function createCard() {
  let colorSelect = selection(color, color.length);
  let simbolSelect;

  document.body.style.color = colorSelect;

  if (colorSelect == "red") {
    simbolSelect = selection(redSimbol, redSimbol.length);
    spanTop.innerHTML = simbolSelect;
    spanBotton.innerHTML = simbolSelect;
  } else {
    simbolSelect = selection(blackSimbol, blackSimbol.length);
    spanTop.innerHTML = simbolSelect;
    spanBotton.innerHTML = simbolSelect;
  }

  numMiddle.innerHTML = selection(numbers, numbers.length);
}

window.onload = function() {
  createCard();
};
