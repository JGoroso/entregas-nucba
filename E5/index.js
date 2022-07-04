// En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

// 👉 Guardarlo en el local storage.
// 👉 Renderizar HTML desde JS.
// 👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes).
// 👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas cuyos nombres coincidan con la búsqueda realizada.

// 🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel).

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
  console.log(pizza);
});

const searchCardContainer = document.querySelector("[cardSearch]");
const pizzaCardTemplate = document.querySelector("[data-pizza-template]");
const pizzaCardContainer = document.querySelector("[pizza-container]");

let pizzas = [];

searchCardContainer.addEventListener("input", (e) => {
  const value = e.target.value;
  pizzas.forEach((p) => {
    const isVisible = p.name.includes(value);
    p.element.classList.toggle("hide", !isVisible);
    console.log(p.element);
  });
});



pizzas = pizza.map((e) => {
  const card = pizzaCardTemplate.content.cloneNode(true).children[0];

  const contImg = document.createElement("img");
  const img = card.querySelector("[img-card]");

  const title = card.querySelector("[name-pizza]");
  const contTitle = document.createElement("h1");

  const ingredients = card.querySelector("[ingredients]");
  const contIngredients = document.createElement("span");

  const price = card.querySelector("[price]");
  const contPrice = document.createElement("span");

  contImg.src = e.img;
  img.appendChild(contImg);

  contTitle.innerHTML = e.name;
  title.appendChild(contTitle);

  contPrice.innerHTML = `$ ${e.price}`;
  price.appendChild(contPrice);

  contIngredients.innerHTML = `Ingredientes: ${e.ingredients} `;
  ingredients.appendChild(contIngredients);

  pizzaCardContainer.append(card);

  return {
    name: e.name,
    element: card,
  };
});
