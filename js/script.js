const form = document.querySelector("#contactForm");
const firstNameInput = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastNameInput = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const emailInput = document.querySelector("#email");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstNameInput.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lastNameInput.value.trim().length > 0) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (emailInput(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("I cant belive it works");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
