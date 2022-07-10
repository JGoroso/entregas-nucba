import { modalRegister, modalForm } from "./modals.js";

const TITLE = document.getElementById("movieName");
const YEAR = document.getElementById("movieYear");
const DIRECTOR = document.getElementById("movieDirector");
const CATEGORIE = document.getElementById("movieCategorie");
const URL = document.getElementById("moviePortada");
const USERLOGGIN = document.querySelector("#userLoggin");
const BUTTON = document.querySelector("#bttn");
const movieCardTemplate = document.querySelector("[data-movie-template]");
const movieContainer = document.querySelector("[movie-container]");

let moviesList = [];
moviesList = localStorage.getItem("Movies");
moviesList = JSON.parse(moviesList);

// movieContainer.setAttribute(
//   "style",
//   "background-image: url('https://m.media-amazon.com/images/I/71UNQX+50AL._AC_SX679_.jpg'"
// );

const SHOW_USER = () => {
  const data = JSON.parse(localStorage.getItem("Users Loggin"));
  data !== null ? (USERLOGGIN.innerHTML = "User: " + data.user) : "";
};

const LOADDATA = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  const container = document.querySelector(".row");
  const data = JSON.parse(localStorage.getItem("Users Loggin"));
  if (data == null) {
    //Por favor registrate
    modalRegister();
    TITLE.value = "";
    YEAR.value = "";
    DIRECTOR.value = "";
    CATEGORIE.value = "";
    URL.value = "";
  } else if (
    TITLE.value !== "" &&
    YEAR.value !== "" &&
    DIRECTOR.value !== "" &&
    CATEGORIE.value !== ""
  ) {
    // CARGAMOS LAS MOVIES AL ARRAY && LAS MONTAMOS EN EL LOCAL

    moviesList = JSON.parse(localStorage.getItem("Movies")) || [];
    moviesList.push({
      title: TITLE.value,
      year: YEAR.value,
      director: DIRECTOR.value,
      categorie: CATEGORIE.value,
      url:
        URL.value ||
        "https://ih1.redbubble.net/image.1995557870.8597/st,small,507x507-pad,600x600,f8f8f8.jpg",
    });

    localStorage.setItem("Movies", JSON.stringify(moviesList));
    moviesList = localStorage.getItem("Movies");
    moviesList = JSON.parse(moviesList);

    TITLE.value = "";
    YEAR.value = "";
    DIRECTOR.value = "";
    CATEGORIE.value = "";
    URL.value = "";

    renderCard();
    // VER SI HAGO UN POPUP PELICULAR CARGADA
  } else {
    modalForm();
    TITLE.value = "";
    YEAR.value = "";
    DIRECTOR.value = "";
    CATEGORIE.value = "";
    URL.value = "";

    //POPUP PELICULAR CARGADA llena los formularios requeridos
  }
});

const renderCard = () => {
  const container = document.querySelector(".row");
  while (container.children[3]) {
    container.removeChild(container.children[3]);
  }
  if (moviesList !== null)
    moviesList.forEach((e) => {
      container.innerHTML += `
      <div class="col-3 col-m-4 col-s-6">
        <div
          class="card-movie"
          
          style=" background-image:url('${e.url}');"
        >
          <div class="description-container">
            <p>
              <span class="titleCard">${e.title}</span>
            </p>
            <p>
              <span>Estreno: </span>${e.year}
            </p>
            <p>
              <span>Director: </span>${e.director}
            </p>
            <p>
              <span>Categorie: </span>${e.categorie}
            </p>
          </div>
        </div>
      </div>
    `;
    });
};

renderCard();
export { SHOW_USER };
