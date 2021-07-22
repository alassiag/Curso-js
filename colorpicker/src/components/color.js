import React from "react";

export default function color() {
  const color = document.querySelector("#color");
  const card = document.querySelector("#card");
  const text = document.querySelector("#text");

  const storage = JSON.parse(localStorage.getItem("colorValue")) || "#ffffff";

  console.log(storage[0], storage[1], storage[2]);

  color.value = storage[0];
  card.value = storage[1];
  text.value = storage[2];

  const cardvalue = card.value;
  const textvalue = text.value;

  const colorList = [];
  const setColor = () => {
    const colorValue = color.value;

    //cardtext.innerHTML = colorValue;
    bodyback.style.background = colorValue;
    cardtext.style.background = card.value;
    cardtext.style.color = text.value;
  };

  const saveColor = (value) => {
    colorList.push(value);
    localStorage.setItem("colorValue", JSON.stringify(colorList));
  };

  setColor();

  color.addEventListener("input", setColor);
  color.addEventListener("change", () => saveColor(color.value));
  card.addEventListener("input", setColor);
  card.addEventListener("change", () => saveColor(card.value));
  text.addEventListener("input", setColor);
  text.addEventListener("change", () => saveColor(text.value));
}

//const color = document.querySelector("#color");
//const salida = document.querySelector("#salida");
