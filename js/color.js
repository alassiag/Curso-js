//const color = document.querySelector("#color");
//const salida = document.querySelector("#salida");
const color = document.querySelector("#color");
const card = document.querySelector("#card");
const text = document.querySelector("#text");

const storedColor = localStorage.getItem("colorValue") || "#ffffff";

const cardvalue = card.value;
const textvalue = text.value;
color.value = storedColor;

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
  localStorage.setItem("colorValue", color.value);
};

setColor();

color.addEventListener("input", setColor);
color.addEventListener("change", () => saveColor(color.value));
card.addEventListener("input", setColor);
card.addEventListener("change", () => saveColor(card.value));
text.addEventListener("input", setColor);
text.addEventListener("change", () => saveColor(text.value));
