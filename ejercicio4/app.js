// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const clickInp = document.querySelector(".click");
clickInp.addEventListener("click", (event) => {
  console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInp = document.querySelector(".focus");
focusInp.addEventListener("focus", (event) => {
  console.log(event);
});
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valueInp = document.querySelector(".value");
valueInp.addEventListener("input", (event) => {
  console.log(event);
});

// 1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
for (let album of albums) {
  const li = document.createElement("li");
  li.innerText = album;
  ul.appendChild(li);
}
document.body.insertAdjacentElement("afterend", ul);
