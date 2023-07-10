const inputName = document.querySelector(".input_name");
const inputSurname = document.querySelector(".input_surname");
const inputEmail = document.querySelector(".input_email");
const inputPassword = document.querySelector(".input_password");
const inputs = document.querySelectorAll(".input");
const submit = document.querySelector(".submit_button");
const errorName = document.getElementById("error-name");
const errorSurname = document.getElementById("error-surname");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const containerTry = document.querySelector(".container_try");
const formContainer = document.querySelector(".form_container");
const containerDescription = document.querySelector(".container_description");
const containerNext = document.querySelector(".container_next");
const emailAddress = document.querySelector(".email_address");

submit.addEventListener("click", () => {
  let isValid = true;
  if (
    !isNaN(inputName.value) &&
    (inputName.value === "" || typeof inputName.value !== "string")
  ) {
    inputName.style.border = "1px solid red";
    inputName.style.backgroundImage = "url(images/icon-error.svg)";
    inputName.style.backgroundPositionY = "50%";
    inputName.style.backgroundPositionX = "95%";
    inputName.style.backgroundSize = "15px";
    inputName.style.backgroundRepeat = "no-repeat";
    errorName.classList.add("span_1");
    isValid = false;
  } else {
    inputName.style.border = "1px solid rgba(128, 128, 128, 0.264)";
    inputName.style.backgroundImage = "initial";
    errorName.classList.remove("span_1");
  }

  if (
    !isNaN(inputSurname.value) &&
    (inputSurname.value === "" || typeof inputSurname.value !== "string")
  ) {
    inputSurname.style.border = "1px solid red";
    inputSurname.style.backgroundImage = "url(images/icon-error.svg)";
    inputSurname.style.backgroundPositionY = "50%";
    inputSurname.style.backgroundPositionX = "95%";
    inputSurname.style.backgroundSize = "15px";
    inputSurname.style.backgroundRepeat = "no-repeat";
    errorSurname.classList.add("span_2");
    isValid = false;
  } else {
    inputSurname.style.border = "1px solid rgba(128, 128, 128, 0.264)";
    inputSurname.style.backgroundImage = "initial";
    errorSurname.classList.remove("span_2");
  }

  if (
    inputEmail.value === "" ||
    typeof inputEmail.value !== "string" ||
    !(
      inputEmail.value.includes("hotmail.com") ||
      inputEmail.value.includes("gmail.com")
    )
  ) {
    inputEmail.style.border = "1px solid red";
    inputEmail.style.backgroundImage = "url(images/icon-error.svg)";
    inputEmail.style.backgroundPositionY = "50%";
    inputEmail.style.backgroundPositionX = "95%";
    inputEmail.style.backgroundSize = "15px";
    inputEmail.style.backgroundRepeat = "no-repeat";
    errorEmail.classList.add("span_3");
    isValid = false;
  } else {
    inputEmail.style.border = "1px solid rgba(128, 128, 128, 0.264)";
    inputEmail.style.backgroundImage = "initial";
    errorEmail.classList.remove("span_3");
  }

  if (inputPassword.value === "" || typeof inputPassword.value !== "string") {
    inputPassword.style.border = "1px solid red";
    inputPassword.style.backgroundImage = "url(images/icon-error.svg)";
    inputPassword.style.backgroundPositionY = "50%";
    inputPassword.style.backgroundPositionX = "95%";
    inputPassword.style.backgroundSize = "15px";
    inputPassword.style.backgroundRepeat = "no-repeat";
    errorPassword.classList.add("span_4");
    isValid = false;
  } else {
    inputPassword.style.border = "1px solid rgba(128, 128, 128, 0.264)";
    inputPassword.style.backgroundImage = "initial";
    errorPassword.classList.remove("span_4");
  }
  if (isValid) {
    containerDescription.style.display = "none";
    containerTry.style.display = "none";
    formContainer.style.display = "none";
    containerNext.style.display = "block";
  }
  emailAddress.textContent = inputEmail.value;
});
