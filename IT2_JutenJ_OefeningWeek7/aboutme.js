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

let mainGedeelte = document.querySelector("nav");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);



let mijnAfbeeldingen = document.querySelectorAll("img a");

let i = 0;
while (i < mijnAfbeeldingen.length) {
			mijnAfbeeldingen[i].addEventListener("mouseover",veranderAfb);
			mijnAfbeeldingen[i].addEventListener("mouseout",zetAfbTerug);
      i++;
}
function veranderAfb() {
			var mijnSrc = this.getAttribute("src");
			this.setAttribute("src",this.getAttribute("data-rug"));
			this.setAttribute("data-rug",mijnSrc);
}

function zetAfbTerug() {
			var mijnSrc = this.getAttribute("src");
			this.setAttribute("src",this.getAttribute("data-rug"));
			this.setAttribute("data-rug",mijnSrc);
}


let darkLink = document.querySelectorAll("header a")[5];
let lightLink = document.querySelectorAll("header a")[6];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","aboutme-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
