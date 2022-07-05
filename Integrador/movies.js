const TITLE = document.getElementById("movieName");
const YEAR = document.getElementById("movieYear");
const DIRECTOR = document.getElementById("movieDirector");
const CATEGORIE = document.getElementById("movieCategorie");
const SINOPSIS = document.getElementById("movieSinopsis");
const USERLOGGIN = document.querySelector("#userLoggin");
const BUTTON = document.querySelector("#bttn");

const SHOW_USER = () => {
  const data = JSON.parse(localStorage.getItem("Users Loggin"));
  data !== null ? (USERLOGGIN.innerHTML = "User: " + data.user) : "";
};

const LOADDATA = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

  if (USERLOGGIN !== undefined) {
    console.log("registrate flaco");
  } else if (
    TITLE.value !== "" &&
    YEAR.value !== "" &&
    DIRECTOR.value !== "" &&
    CATEGORIE.value !== "" &&
    SINOPSIS.value !== ""
  ) {
    // CARGAMOS LAS MOVIES AL ARRAY && LAS MONTAMOS EN EL LOCAL

    let movieList = [];

    moviesList = JSON.parse(localStorage.getItem("Movies")) || [];
    moviesList.push({
      title: TITLE.value,
      year: YEAR.value,
      director: DIRECTOR.value,
      categorie: CATEGORIE.value,
      url: URL.value,
      sinopsis: SINOPSIS.value,
    });

    localStorage.setItem("Movies", JSON.stringify(moviesList));
    moviesList = localStorage.getItem("Movies");
    moviesList = JSON.parse(moviesList);

    TITLE.value == "";
    YEAR.value == "";
    DIRECTOR.value == "";
    CATEGORIE.value == "";
    URL.value == "";
    SINOPSIS.value == "";
    // VER SI HAGO UN POPUP
  } else {
    TITLE.value == "";
    YEAR.value == "";
    DIRECTOR.value == "";
    CATEGORIE.value == "";
    URL.value == "";
    SINOPSIS.value == "";
  }
});

export { SHOW_USER, LOADDATA };
