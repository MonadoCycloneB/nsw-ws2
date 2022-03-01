/// <reference path="gsap.min.js" />
/// <reference path="ScrollTrigger.min.js" />

"use strict";

gsap.registerPlugin(ScrollTrigger);

// Triggers
const trig_exposition = {
	trigger: "#exposition",
	start: "30% 80%",
	toggleActions: "play none none none",
};
const trig_multiplayer = {
	trigger: "#multiplayer",
	start: "center 80%",
	toggleActions: "play none none none",
};
const trig_league_a = {
	trigger: "#league",
	start: "30% 80%",
	toggleActions: "play none none none",
};
const trig_league_b = {
	trigger: "#league",
	start: "50% 80%",
	toggleActions: "play none none none",
	markers: true,
};

// Delays
const dly_exposition = 0.15;
const dly_multiplayer = 0.15;
const dly_league = 0.15;

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
		scrollTrigger: trig_exposition,
		delay: 0.05,
		ease: "power2.out",
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
		scrollTrigger: trig_exposition,
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
		scrollTrigger: trig_exposition,
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
		scrollTrigger: trig_exposition,
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
		scrollTrigger: trig_multiplayer,
		delay: 0.05,
		ease: "power2.out",
		duration: 0.6,
		x: 0,
	}
);

// Multiplayer
const multDuration = 0.3;
gsap.fromTo(
	"#multiplayer .media-text--text .white-block",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: trig_multiplayer,
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
		scrollTrigger: trig_multiplayer,
		delay: dly_multiplayer * 1,
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
		scrollTrigger: trig_multiplayer,
		delay: dly_multiplayer * 2,
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
		scrollTrigger: trig_multiplayer,
		delay: dly_multiplayer * 3,
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
		scrollTrigger: trig_multiplayer,
		delay: dly_multiplayer * 2,
		ease: "elastic.out(1, 0.8)",
		duration: 0.75,
		scaleX: 1,
		scaleY: 1,
	}
);

// League
gsap.fromTo(
	"#league .line--color-green",
	{
		x: "-100%",
	},
	{
		scrollTrigger: trig_league_a,
		delay: 0.05,
		ease: "power2.out",
		duration: 0.6,
		x: 0,
	}
);
gsap.fromTo(
	"#league .bluepill--right",
	{
		x: "100%",
		opacity: 0,
	},
	{
		scrollTrigger: trig_league_a,
		delay: 0.25,
		ease: "power2.out",
		duration: 0.8,
		x: 0,
		opacity: 1,
	}
);
gsap.fromTo(
	"#league .bluepill--left",
	{
		x: "-100%",
		opacity: 0,
	},
	{
		scrollTrigger: trig_league_a,
		delay: 0.45,
		ease: "power2.out",
		duration: 0.3,
		x: 0,
		opacity: 1,
	}
);
gsap.fromTo(
	"#league .line--end-left",
	{
		x: "100%",
	},
	{
		scrollTrigger: trig_league_b,
		delay: 0.05,
		ease: "power2.out",
		duration: 0.8,
		x: 0,
	}
);

gsap.fromTo(
	"#league .media-text--text h3",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: trig_league_b,
		delay: 0,
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#league .media-text--text p",
	{
		opacity: 0,
		y: 50,
	},
	{
		scrollTrigger: trig_league_b,
		delay: dly_league * 2,
		ease: "power2.out",
		durtaion: multDuration,
		opacity: 1,
		y: 0,
	}
);
gsap.fromTo(
	"#league .media-text--media .frame-container",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		delay: dly_league * 3,
		scrollTrigger: trig_league_b,
		duration: 1,
		ease: "elastic.out(1.125, 1)",
		scaleX: 1,
		scaleY: 1,
	}
);

gsap.fromTo(
	"#league .media-text--media img",
	{
		scaleX: 0,
		scaleY: 0,
	},
	{
		scrollTrigger: trig_league_b,
		delay: dly_league * 2 + 0.2,
		duration: 0.8,
		ease: "elastic.out(1.125, 1)",
		scaleX: 1,
		scaleY: 1,
	}
);
