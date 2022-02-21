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

const password = document.querySelector("#pwd");
const confirm_password = document.querySelector("#confirm-pwd");

function validatePassword() {
  if (password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
