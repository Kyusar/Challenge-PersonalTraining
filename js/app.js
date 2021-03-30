const hamburger = document.querySelector(".hamburger");
const hamburgerNav = document.querySelector(".hamburger-nav");

// replace the hamburger

function changeImg(name) {
  document.getElementById("hamburger_icon").src = name;
}

const imgElement = document.getElementById("hamburger_icon");
imgOpen = "images/icon-hamburger.svg";
imgClose = "images/icon-close.svg";

hamburger.addEventListener("click", () => {
  hamburgerNav.classList.toggle("open");
  if (imgElement.src === "http://127.0.0.1:5500/images/icon-hamburger.svg") {
    changeImg(imgClose);
  } else {
    changeImg(imgOpen);
  }
});

const dropBtn = document.querySelector(".dropdown-mob");
const dropdown = document.querySelector(".dropdown-content-mob");
const mobileArrow = document.getElementById("mobile-nav-arrow");

dropBtn.addEventListener("click", () => {
  dropdown.classList.toggle("open");
  mobileArrow.classList.toggle("open");
});

const itemDrop = document.querySelector(".dropdown");
const menuDrop = document.querySelector(".dropdown-content");
const desktopArrow = document.getElementById("arrow-up");

itemDrop.addEventListener("click", () => {
  menuDrop.classList.toggle("open");
  desktopArrow.classList.toggle("open");
});
