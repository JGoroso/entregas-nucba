import { SHOW_USER } from "./movies.js";
import { search } from "./search.js";

SHOW_USER();
search();

/*Terminado el recorrido de la pag tambien podemos remover una peli */
const REMOVEBTN = document.querySelectorAll("#remove");

REMOVEBTN.forEach((e) => {
  if (
    e.addEventListener("click", () => {
      e.parentElement.parentElement.parentElement.remove();
    })
  ) {
  }
});
