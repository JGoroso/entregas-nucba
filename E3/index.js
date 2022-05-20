// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number
//  y un botón.

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en
// el input.

// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza
// cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

const pizza = [
  {
    id: 1,
    nombre: "cheguevara",
    ingredientes: ["muzzarella", "tomate", "frijoles"],
    precio: 400,
  },
  {
    id: 2,
    nombre: "cachocastaña",
    ingredientes: ["jamon", "huevo", "tomate"],
    precio: 300,
  },
  {
    id: 3,
    nombre: "pabloescobar",
    ingredientes: ["jamon", "huevo", "tomate"],
    precio: 700,
  },
  {
    id: 4,
    nombre: "silvio soldan",
    ingredientes: ["rucula", "muzzarella", "tomate"],
    precio: 1200,
  },
  {
    id: 5,
    nombre: "el retutu",
    ingredientes: ["panceta", "huevo", "jamon"],
    precio: 500,
  },
  {
    id: 6,
    nombre: "avril lavigne",
    ingredientes: ["aceitunas", "muzzarella", "frijoles"],
    precio: 750,
  },
];

const capturar = document.getElementById("inputnumber");

const button = document.querySelector(".button");

const labels = document.querySelector(".labels");
const h2 = document.createElement("h2");

const h4 = document.createElement("h4");

const error = document.createElement("h2");

labels.appendChild(h2);
labels.appendChild(h4);
labels.appendChild(error);

button.addEventListener("click", () => {
  const capturarResult = capturar.value;
  const datosPizzaTrue = pizza.find((e) => e.id == capturarResult);
  const datosPizzaFalse = pizza.find((e) => e.id !== capturarResult);

  if (datosPizzaTrue) {
    h2.innerHTML = datosPizzaTrue.nombre;
  }

  if (!datosPizzaTrue) {
    error.innerHTML = "No existe ese ID";
  }
});
