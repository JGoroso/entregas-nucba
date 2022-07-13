import { modalRegister, modalForm } from "./modals.js";

const TITLE = document.getElementById("movieName");
const YEAR = document.getElementById("movieYear");
const DIRECTOR = document.getElementById("movieDirector");
const CATEGORIE = document.getElementById("movieCategorie");
const URL = document.getElementById("moviePortada");
const BUTTONLOGOUT = document.querySelector("#btnLogout");
const BUTTON = document.querySelector("#bttn");

let moviesList = [];
moviesList = localStorage.getItem("Movies");
moviesList = JSON.parse(moviesList);

const SHOW_USER = () => {
  const data = JSON.parse(localStorage.getItem("Users Loggin"));
  data !== null
    ? (BUTTONLOGOUT.innerHTML =
        "Salir " +
        ` <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg></button>`) &&
      BUTTONLOGOUT.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("Users Loggin");
        location.reload();
      })
    : "";
};

const LOADDATA = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

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
    console.log(moviesList);

    TITLE.value = "";
    YEAR.value = "";
    DIRECTOR.value = "";
    CATEGORIE.value = "";
    URL.value = "";

    renderCard();
  } else {
    modalForm();
    TITLE.value = "";
    YEAR.value = "";
    DIRECTOR.value = "";
    CATEGORIE.value = "";
    URL.value = "";
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
            <span id="remove">Eliminar 😢</button>
          </div>
        </div>
      </div>
    `;
    });
};

renderCard();



export { SHOW_USER };
