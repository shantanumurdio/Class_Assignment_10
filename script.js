var cColor = document.getElementById("Change-color");

var cShape = document.getElementById("Change-shape");

var colors = [
  "red",
  "green",
  "cyan",
  "pink",
  "voilet",
  "blue",
  "yellow",
  "purple",
  "orange",
  "lightgreen",
  "lemon",
];
var index = 0;
var isTriangle = false;
cColor.addEventListener("click", changeColor);

cShape.addEventListener("click", changeShape);

function changeColor() {
  if (index === colors.length) {
    index = 0;
  }
  document.getElementById("Circle").style.backgroundColor = colors[index];
  index++;
}

const innerShape = document.getElementById("inner");

function changeShape() {
  if (isTriangle) {
    innerShape.innerHTML = '<div class="shape" id="square"></div>';
    isTriangle = false;
  } else {
    innerShape.innerHTML = '<div class="shape" id="triangle"></div>';
    isTriangle = true;
  }
}

window.onload =  document.getElementById("Circle").style.backgroundColor = colors[6];
window.onload =    innerShape.innerHTML = '<div class="shape" id="square"></div>';