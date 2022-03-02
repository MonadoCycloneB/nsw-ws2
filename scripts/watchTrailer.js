"use strict";

const trailerLink = document.querySelector(".trailer-link");
const trailerFrame = trailerLink.querySelector(".trailer-container");
const scrShot = trailerLink.querySelector("img");
const strong = trailerLink.querySelector("strong");
const frameContainer = document.querySelector(".frame-container");

trailerLink.addEventListener("click", function () {
	scrShot.style.opacity = "0";
	strong.style.opacity = "0";
	trailerFrame.style.display = "block";
	frameContainer.classList.add("trailer-hide");
	scrShot.classList.add("trailer-hide");
	strong.classList.add("trailer-hide");
});
