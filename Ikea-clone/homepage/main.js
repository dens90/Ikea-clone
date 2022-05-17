const gettingMenu = document.querySelector(".hamburger");
const gettingMenu2 = document.querySelector(".hamburger-2");
const leftMenu = document.getElementById("left-menu");
const bodyContainer = document.querySelector(".body-container");
const closingMenu = document.querySelector(".lm-logo-back");

function openMenu() {
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
  leftMenu.style.left = 0;
  leftMenu.style.visibility = "visible";
  leftMenu.style.width = "500px";
  leftMenu.style.transition = "0.2s ease";
}

function closeMenu() {
  leftMenu.style.left = "-500px";
  leftMenu.style.width = "0";
  leftMenu.style.transition = "0.2s ease";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}

gettingMenu2.addEventListener("click", openMenu);
gettingMenu.addEventListener("click", openMenu);
closingMenu.addEventListener("click", closeMenu);
bodyContainer.addEventListener("click", closeMenu);
bodyContainer.addEventListener("click", close);

// Menu da destra , cliccando profilo

let userBtn = document.getElementById("user-btn");
let closeSide = document.getElementById("close-side");

function open() {
  document.getElementById("user-side").style.width = "400px";
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
}

function close() {
  document.getElementById("user-side").style.width = "0";
  bodyContainer.style.opacity = "1";
  bodyContainer.style.display = "none";
}

userBtn.addEventListener("click", open);
closeSide.addEventListener("click", close);

let next = document.getElementById("next");
let previous = document.getElementById("previous");
const selectButtons = document.querySelector(".selection-buttons");

next.addEventListener("click", () => {
  selectButtons.scrollBy({
    left: 140,
    behavior: "smooth",
  });
});

previous.addEventListener("click", () => {
  selectButtons.scrollBy({
    left: -140,
    behavior: "smooth",
  });
});

// FORM

class Registration {
  constructor(email, password, name, surname, nationality) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.nationality = nationality;
  }
}

let data = [];

function addUser(mail, password, name, surname, nation) {
  let registration = new Registration(mail, password, name, surname, nation);
  data.push({ mail, password, name, surname, nation });
  console.log(data);
}

let password = document.querySelector('input[type="password"]');

function controlPass() {
  let errore = document.getElementById("errore");
  let passValue = document.querySelector('input[type="password"]').value;
  if (passValue.length <= 8) {
    errore.innerHTML = "Minimo 8 caratteri";
    errore.style.display = "block";
    errore.style.fontFamily = "bold";
  } else {
    errore.style.display = "none";
    errore.innerHTML = "";
  }
}
password.addEventListener("focusout", controlPass);

let confirmPass = document.getElementById("confirm");

confirmPass.addEventListener("focusout", (e) => {
  let equalPass = document.getElementById("equal-pass");
  let confirmValuePass = document.getElementById("confirm").value;
  let passValue = document.querySelector('input[type="password"]').value;
  if (passValue != confirmValuePass) {
    equalPass.style.display = "block";
    equalPass.innerHTML = "Invalid password";
  } else {
    equalPass.style.display = "none";
    equalPass.innerHTML = "";
  }
});

const btn = document.getElementById("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let mail = document.querySelector('input[type="email"]').value;
  let password = document.querySelector('input[type="password"]').value;
  let name = document.querySelector('input[name="name"]').value;
  let surname = document.querySelector('input[name="surname"]').value;
  let nation = document.querySelector("#country").value;

  addUser(mail, password, name, surname, nation);

  localStorage.setItem("users", JSON.stringify(data));
});

let answer = document.getElementById("error");

let local = localStorage.getItem("users");

let obj = JSON.parse(local);
console.log(obj);

if (obj[0].mail) {
  answer.innerHTML = "sei gia registrato";
}

let mail = document.getElementById("mail").value;
let idMail = document.getElementById("mail");

const errorDOM = document.getElementById("error");
const validateEmail = (mail) => {
  const email_regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mail === "" ? "empty" : email_regex.test(String(mail).toLowerCase());
};

idMail.addEventListener("blur", (e) => {
  e.preventDefault();
  let valueMail = document.getElementById("mail").value;
  let result = validateEmail(valueMail);
  errorDOM.innerText =
    result === "empty"
      ? "Enter an email address"
      : result
      ? "Email valid"
      : "Email invalid";
});
