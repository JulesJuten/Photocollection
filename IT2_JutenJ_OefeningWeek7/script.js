let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}

let darkLink = document.querySelectorAll("header a")[4];
let lightLink = document.querySelectorAll("header a")[5];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
