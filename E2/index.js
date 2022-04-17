// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly.
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano.
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

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

const pizzaimpar = pizza.filter((pizza) => pizza.id % 2);
const resultimpar = pizzaimpar.map((pizza) => pizza.id);
console.log(`Los id impar de las pizzas son ${resultimpar}`);

const precioMenor = pizza.filter((pizza) => pizza.precio < 700);
const resultMenor = precioMenor.map((pizza) => pizza.nombre);
console.log(
  `Las pizzas con precio menor a 700 son las siguientes: ${resultMenor}`
);

const nombresPizza = pizza.map((pizza) => pizza.nombre);
console.log(`Los nombres de las pizzas son los siguientes ${nombresPizza}`);

const preciosPizza = pizza.map((pizza) => pizza.precio);
console.log(`Los precios de las pizzas son los siguientes ${preciosPizza}`);

for (let i = 0; i < pizza.length; i++) {
  console.log(
    `La pizza ${nombresPizza[i]} tiene un valor de: ${preciosPizza[i]}`
  );
}
