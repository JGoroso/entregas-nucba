const search = () => {
  document.addEventListener("keyup", (e) => {
    const searchInput = document.querySelector("#search");
    const filter = searchInput.value.toLowerCase();
    const CARDS = document.querySelectorAll(".card-movie");

    CARDS.forEach((c) => {
      let text = c.textContent;
      if (text.toLowerCase().includes(filter.toLowerCase())) {
        c.style.display = "";
      } else {
        c.style.display = "none";
      }
    });
  });
};

export { search };
