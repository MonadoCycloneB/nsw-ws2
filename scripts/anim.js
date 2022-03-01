/// <reference path="gsap.min.js" />
/// <reference path="ScrollTrigger.min.js" />

"use strict";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero", {
	opacity: 1,
	duration: 0.4,
});

gsap.fromTo(
	"#hero .pre-order-button a",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		delay: 1.5,
		duration: 0.75,
		ease: "elastic.out(1.125, 1)",
		scaleX: 1,
		scaleY: 1,
	}
);
gsap.fromTo(
	".hero-bg",
	{
		opacity: 0,
	},
	{
		delay: 0.5,
		duration: 1,
		opacity: 1,
	}
);
gsap.fromTo(
	".switch-logo",
	{
		opacity: 0,
	},
	{
		delay: 0.75,
		duration: 0.5,
		opacity: 1,
	}
);

// Key Messaging
gsap.fromTo(
	"#key-message h2",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: {
			trigger: "#key-message",
			start: "-100px 80%",
			end: "bottom 20%",
			toggleActions: "play none none none",
		},
		ease: "power1.out",
		duration: 0.5,
		opacity: 1,
		y: 0,
	}
);

// Exposistion
gsap.fromTo(
	"#key-message .line",
	{
		x: "110%",
	},
	{
		scrollTrigger: {
			trigger: "#exposition",
			start: "top center",
			// end: "bottom 80%",
			toggleActions: "play none none none",
		},
		delay: 0.05,
		ease: "power4.out",
		duration: 0.6,
		x: 0,
	}
);
gsap.fromTo(
	"#exposition .media-text--text",
	{
		opacity: 0,
	},
	{
		scrollTrigger: {
			trigger: "#exposition",
			start: "top center",
			// end: "bottom 80%",
			toggleActions: "play none none none",
		},
		delay: 0.05,
		ease: "power4.out",
		duration: 0.6,
		opacity: 1,
	}
);

gsap.fromTo(
	"#exposition .media-text--media .frame-container",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		scrollTrigger: {
			trigger: "#exposition .media-text",
			start: "40% center",
			// end: "bottom 80%",
			toggleActions: "play none none none",
		},
		duration: 1,
		ease: "elastic.out(1.125, 1)",
		scaleX: 1,
		scaleY: 1,
	}
);

gsap.fromTo(
	"#exposition .media-text--media img",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		scrollTrigger: {
			trigger: "#exposition .media-text",
			start: "40% center",
			// end: "bottom 80%",
			toggleActions: "play none none none",
			// markers: true,
		},
		delay: 0.2,
		duration: 0.8,
		ease: "elastic.out(1.125, 1)",
		scaleX: 1,
		scaleY: 1,
	}
);
gsap.fromTo(
	"#exposition .line--w80",
	{
		x: "110%",
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		delay: 0.05,
		ease: "power4.out",
		duration: 0.6,
		x: 0,
	}
);

// Multiplayer
const multDelay = 0.15;
const multDuration = 0.3;
gsap.fromTo(
	"#multiplayer .media-text--text .white-block",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#multiplayer .media-text--text h2",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		delay: multDelay * 1,
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#multiplayer .media-text--text h3",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		delay: multDelay * 2,
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#multiplayer .media-text--text p",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		delay: multDelay * 3,
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#multiplayer .media-text--media img",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		scrollTrigger: {
			trigger: "#multiplayer",
			start: "center 80%",
			toggleActions: "play none none none",
			markers: true,
		},
		delay: multDelay * 2,
		ease: "elastic.out(1, 0.8)",
		duration: 0.75,
		scaleX: 1,
		scaleY: 1,
	}
);
