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

const pr1 = document.querySelector("#pr1");
const pr2 = document.querySelector("#pr2");
const pr3 = document.querySelector("#pr3");
const pr4 = document.querySelector("#pr4");

function passwordRequirements() {
  const regexUpper = /[A-Z]/g;
  const regexLower = /[a-z]/g;
  const regexNumber = /[0-9]/g;

  let pwd = password.value;

  if (regexUpper.test(pwd)) {
    pr1.textContent = "✓";
  } else {
    pr1.textContent = "";
  }

  if (regexLower.test(pwd)) {
    pr2.textContent = "✓";
  } else {
    pr2.textContent = "";
  }

  if (regexNumber.test(pwd)) {
    pr3.textContent = "✓";
  } else {
    pr3.textContent = "";
  }

  if (pwd.length >= 8) {
    pr4.textContent = "✓";
  } else {
    pr4.textContent = "";
  }
}

password.onchange = validatePassword;
password.oninput = passwordRequirements;
confirm_password.onkeyup = validatePassword;
