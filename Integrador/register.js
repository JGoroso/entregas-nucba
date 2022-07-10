import { registerOn } from "./modals.js";

const USER = document.querySelector("#user");
const PASSWORD = document.querySelector("#password");
const EMAIL = document.querySelector("#email");
const BUTTON = document.querySelector("#bttn");
const FORM = document.querySelector(".form");
const cargar = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  let isFormValid = FORM.checkValidity();
  if (!isFormValid) {
    FORM.reportValidity();

  } else {
    if (USER.value !== "" && PASSWORD.value !== "" && EMAIL.value !== "") {
      // CARGAMOS USERS AL ARRAY && LOS MONTAMOS EN EL LOCAL

      let users = [];

      users = JSON.parse(localStorage.getItem("Users Registered")) || [];
      users.push({
        user: USER.value,
        password: PASSWORD.value,
        email: EMAIL.value,
      });

      localStorage.setItem("Users Registered", JSON.stringify(users));
      users = localStorage.getItem("Users Registered");
      users = JSON.parse(users);
      registerOn();
      USER.value = "";
      PASSWORD.value = "";
      EMAIL.value = "";
    } else {
      USER.value = "";
      PASSWORD.value = "";
      EMAIL.value = "";
    }
  }
});

export { cargar };
