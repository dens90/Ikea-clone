const gettingMenu = document.querySelector(".hamburger");
const gettingMenu2 = document.querySelector(".hamburger-2");
const leftMenu = document.getElementById("left-menu");
const bodyContainer = document.querySelector(".body-container");
const closingMenu = document.querySelector(".lm-logo-back");

function openMenu() {
  bodyContainer.style.opacity = ".40";
  bodyContainer.style.display = "block";
  leftMenu.style.left = `0`;
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
// bodyContainer.addEventListener("click", close);

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
