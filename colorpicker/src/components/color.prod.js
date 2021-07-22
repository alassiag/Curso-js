"use strict";

var color = document.querySelector("#color");
var salida = document.querySelector("#salida");
var body = document.querySelector("body");
color.addEventListener("input", function () {
  var select = color.value;
  console.log(select);
  salida.innerHTML = select;
  salida.style.background = select;

  salida.style.color = "#fff";
  //body.style.background = select;
});
