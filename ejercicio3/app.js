// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ulCountr = document.createElement("ul");

for (let country of countries) {
  const li = document.createElement("li");
  li.innerText = country;
  ulCountr.appendChild(li);
}
document.body.append(ulCountr);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementRemove = document.querySelector(".fn-remove-me");
elementRemove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const ulCars = document.createElement("ul");

for (let car of cars) {
  const li = document.createElement("li");
  li.setAttribute("data-function", "printHere");
  li.innerText = car;
  ulCars.appendChild(li);
}
document.body.append(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const randomArr = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const dataDisplay = (array) => {
  for (let element of array) {
    const div = document.createElement("div");
    div.setAttribute("id", "dataDisplay");
    const h4 = document.createElement("h4");
    h4.innerText = element.title;
    div.appendChild(h4);
    const img = document.createElement("img");
    img.src = element.imgUrl;
    div.appendChild(img);
    document.body.append(div);
  }
};

dataDisplay(randomArr);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

//!He añadido un id como atributo para que sea más fácil de seleccionar
//!Creamos el botón
const button = document.createElement("button");
button.innerText = "Eliminar última entrada";
document.body.append(button);

//!Lógica detrás de el eliminado
const dataSelector = document.querySelectorAll("#dataDisplay");
button.addEventListener("click", () => {
  dataSelector.forEach((element, key, parent) => {
    if (key === parent.length - 1) {
      element.remove();
    }
  });
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

dataSelector.forEach((element) => {
  const indivButton = document.createElement("button");
  indivButton.innerText = "Eliminar entrada";

  indivButton.addEventListener("click", () => {
    element.remove();
    indivButton.remove();
  });
  element.insertAdjacentElement("afterend", indivButton);
});
