const input = document.querySelectorAll("input");

input.forEach((item) => {
  item.addEventListener("focus", (event) => {
    const element = event.target;
    element.classList.toggle("focus");
  });
  item.addEventListener("blur", (event) => {
    const element = event.target;
    element.classList.toggle("focus");
  });
});
