import { SHOW_USER } from "./movies.js";
import { search } from "./search.js";

SHOW_USER();
search();

const BTNDELETE = document.querySelectorAll("#remove");

BTNDELETE.forEach((e) => {
  e.addEventListener("click", (x) => {
    e.parentElement.parentElement.parentElement.remove();
  });
});
