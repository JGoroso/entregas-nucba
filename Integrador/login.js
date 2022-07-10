import { modalUser, modalUserOn, modalUserError } from "./modals.js";

const USER = document.querySelector("#user");

const PASSWORD = document.querySelector("#password");
const RESULT = document.querySelector("#result");
const BUTTON = document.querySelector("#bttn");
const FORM = document.querySelector(".form");
const LOAD = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  let userRegistered = localStorage.getItem("Users Registered");
  let data = JSON.parse(userRegistered);

  if (!userRegistered) {
    modalUser();
    USER.value = "";
    PASSWORD.value = "";
  } else if (!data) {
    modalUser();
    USER.value = "";
    PASSWORD.value = "";
  } else {
    const userLogin = data.find((e) => {
      let isFormValid = FORM.checkValidity();
      if (!isFormValid) {
        FORM.reportValidity();
      } else {
        if (e.user === USER.value && e.password === PASSWORD.value) {
          modalUserOn();
          localStorage.setItem("Users Loggin", JSON.stringify(e));
        } else modalUserError();
        USER.value = "";
        PASSWORD.value = "";
      }
    });
  }
});
