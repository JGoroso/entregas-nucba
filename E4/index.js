// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío:

// 👉 A cada Pizza, agregarle una imagen. ok
// 👉 Guardar el array en el local storage. ok
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨).
// 👉 Debajo del card tiene que haber un input y un botón.

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel).

const img = document.getElementById("img");
const contImg = document.createElement("img");

const title = document.getElementById("namePizza");
const contTitle = document.createElement("h1");

const ingredients = document.getElementById("ingredients");
const contIngredients = document.createElement("span");

const price = document.getElementById("price");
const contPrice = document.createElement("span");

const input = document.getElementById("codPizza");
const button = document.getElementById("cmdButton");

const error = document.getElementById("error");
const contError = document.createElement("img");

const pizza = [
  {
    id: 1,
    name: "Che Guevara",
    ingredients: ["muzzarella", "tomate", "frijoles"],
    price: 400,
    img: "https://static.eldiario.es/clip/c7da1ee2-71bf-4196-80a9-9ea4ef82d664_16-9-aspect-ratio_default_0.jpg",
  },
  {
    id: 2,
    name: "Cacho Castaña",
    ingredients: ["jamon", "huevo", "tomate"],
    price: 300,
    img: "https://estaticos.miarevista.es/media/cache/680x_thumb/uploads/images/gallery/5ac4eae85bafe857c23c986a/pizzaburguerkebab.jpg",
  },
  {
    id: 3,
    name: "Pablo Escobar",
    ingredients: ["jamon", "huevo", "tomate"],
    price: 700,
    img: "https://static.eldiario.es/clip/b156c943-0f56-4ac0-8bd6-429da45c047c_16-9-aspect-ratio_default_0.jpg",
  },
  {
    id: 4,
    name: "Silvio Soldan",
    ingredients: ["rucula", "muzzarella", "tomate"],
    price: 1200,
    img: "https://static.eldiario.es/clip/3ff76e3a-5979-4727-af2b-0d8db1dd2147_16-9-aspect-ratio_default_0.jpg",
  },
  {
    id: 5,
    name: "El Retutu",
    ingredients: ["panceta", "huevo", "jamon"],
    price: 500,
    img: "https://ubidelavega.com//wp-content/uploads/2018/03/pizzas-raras-hamburguesa-300x177.jpeg",
  },
  {
    id: 6,
    name: "Avril Lavigne",
    ingredients: ["aceitunas", "muzzarella", "frijoles"],
    price: 750,
    img: "https://ricardoacosta52.files.wordpress.com/2016/05/1135.jpg?w=1000",
  },
];

pizza.forEach((e) => {
  localStorage.setItem("pizzas", JSON.stringify(pizza));
});

button.addEventListener("click", () => {
  const resultFind = pizza.find((e) => input.value == e.id);

  while (
    img.firstChild &&
    title.firstChild &&
    price.firstChild &&
    ingredients.firstChild
  ) {
    img.removeChild(img.firstChild);
    title.removeChild(title.firstChild);
    price.removeChild(price.firstChild);
    ingredients.removeChild(ingredients.firstChild);
  }

  while (error.firstChild) {
    error.removeChild(error.firstChild);
  }
  if (resultFind) {
    contImg.src = resultFind.img;
    img.appendChild(contImg);

    contTitle.innerHTML = resultFind.name;
    title.appendChild(contTitle);

    contPrice.innerHTML = `$ ${resultFind.price}`;
    price.appendChild(contPrice);

    contIngredients.innerHTML = `Ingredientes: ${resultFind.ingredients} `;
    ingredients.appendChild(contIngredients);
  }

  if (!resultFind) {
    contError.src =
      "https://img.freepik.com/vector-gratis/pizza-estado-vacio-error-404-ilustracion-plana_288067-137.jpg?w=2000";
    error.appendChild(contError);
  }
});
