const USER = document.querySelector("#user");
const PASSWORD = document.querySelector("#password");
const EMAIL = document.querySelector("#email");
const BUTTON = document.querySelector("#bttn");

const cargar = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();

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

    USER.value = "";
    PASSWORD.value = "";
    EMAIL.value = "";
    // VER SI HAGO UN POPUP
    // location.href = "login.html";
  } else {
    alert("llena el form"); // VER SI HAGO UN POPUP
    USER.value = "";
    PASSWORD.value = "";
    EMAIL.value = "";
  }
});

export { cargar };
