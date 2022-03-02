"use strict";

const trailerLink = document.querySelector(".trailer-link");
const trailerFrame = trailerLink.querySelector("iframe");
const scrShot = trailerLink.querySelector("img");
const strong = trailerLink.querySelector("strong");

trailerLink.addEventListener("click", function () {
	scrShot.style.opacity = "0";
	strong.style.opacity = "0";
	trailerFrame.style.display = "block";
});
