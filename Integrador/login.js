const USER = document.querySelector("#user");

const PASSWORD = document.querySelector("#password");
const RESULT = document.querySelector("#result");
const BUTTON = document.querySelector("#bttn");

const LOAD = BUTTON.addEventListener("click", (e) => {
  e.preventDefault();
  let userRegistered = localStorage.getItem("Users Registered");
  let data = JSON.parse(userRegistered);

  if (!userRegistered) {
    console.log("Malo"); // Registrate
  } else if (!data) {
    console.log("Malo"); // Registrate
  } else {
    const userLogin = data.find((e) => {
      if (e.user === USER.value && e.password === PASSWORD.value) {
        console.log("bienvenido", e);
        localStorage.setItem("Users Loggin", JSON.stringify(e));
      } else console.log("usuario o contra incorrecta");
      // Registrate
    });
  }
});
