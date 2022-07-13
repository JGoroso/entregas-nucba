/*Array peliculas default */
const moviesDefault = [
  {
    title: "John Wick 3: Parabellum",
    year: "2019",
    director: "Chad Stahelski",
    categorie: "Acción",
    url: "https://images-na.ssl-images-amazon.com/images/I/91XKS5MN9uL._AC_SL1500_.jpg",
  },
  {
    title: "Erase una vez en... Hollywood",
    year: "2019",
    director: "Quentin Tarantino",
    categorie: "Drama",
    url: "https://images-na.ssl-images-amazon.com/images/I/815BZqTNrsL._AC_SY606_.jpg",
  },
  {
    title: "Scary Movie",
    year: "2000",
    director: "Keenen Ivory Wayans",
    categorie: "Comedia",
    url: "https://cdn.shopify.com/s/files/1/1416/8662/products/scarymovie_2000_original_film_art_1200x.jpg?v=1611771906",
  },
];

let movieListDefault = [];

localStorage.setItem("MoviesDefault", JSON.stringify(moviesDefault));
movieListDefault = localStorage.getItem("MoviesDefault");
movieListDefault = JSON.parse(movieListDefault);

const renderCardDefault = () => {
  const container = document.querySelector(".row");
  while (container.children[0]) {
    container.removeChild(container.children[0]);
  }
  if (movieListDefault !== null)
    movieListDefault.forEach((e) => {
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

renderCardDefault();
