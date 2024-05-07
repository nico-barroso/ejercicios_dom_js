// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const insertParr = document.createElement("p");
insertParr.innerText = "Este párrafo ha sido creado con DOM.";
document.body.appendChild(insertParr);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

for (let i = 0; i < 6; i++) {
  const pLoop = document.createElement("p");
  pLoop.innerText = "Soy el párrafo " + (i + 1);
  document.body.appendChild(pLoop);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const dinamicText = document.createElement("p");
dinamicText.innerText = "Soy dinámico!";
document.body.appendChild(dinamicText);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const parentDiv = document.querySelector(".fn-insert-here");
parentDiv.innerText = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (let app of apps) {
  const li = document.createElement("li");
  li.innerText = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//! Al hacer un querySelectorAll devolvemos todos los elementos atrapados
//! como un array. Por ende solo hace falta recorrerlo para aplicar el borrado
const removeText = document.querySelectorAll(".fn-remove-me");
removeText.forEach((element) => {
  element.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const getDiv = document.querySelectorAll("div");
//! Sabemos que los divs que vienen por defecto serán los dos primeros,
//! podemos simplemente seleccionar el primer div y añadirlo después
const betweenParr = document.createElement("p");
betweenParr.innerText = "Voy en medio!";
getDiv[0].insertAdjacentElement("afterend", betweenParr);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const insertDiv = document.querySelectorAll("div.fn-insert-here");

insertDiv.forEach((element) => {
  const insideParr = document.createElement("p");
  insideParr.innerText = "Voy dentro!";
  element.append(insideParr);
});
