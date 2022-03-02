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
	start: "50% 70%",
	toggleActions: "play none none none",
};
const trig_features = {
	trigger: "#features",
	start: "50% 80%",
	toggleActions: "play none none none",
};
const trig_preOrder_a = {
	trigger: "#pre-order",
	start: "15% 90%",
	toggleActions: "play none none none",
	markers: true,
};
const trig_preOrder_b = {
	trigger: "#pre-order",
	start: "50% 80%",
	toggleActions: "play none none none",
};

// Delays
const dly_exposition = 0.15;
const dly_multiplayer = 0.15;
const dly_league = 0.15;
const dly_features = 0.15;
const dly_preOrder = 0.15;

// Eases
const ease_pop_button = "1.125, 1";
const ease_pop_imgFrame = "1.125, 1";
const ease_pop_img = "1.125, 1";
const ease_pop_img_multiplayer = "1, 0.8";

// Preset Animations
// #region lineHeading
const anim_lineHeading_topLine = function (hSelector, trigger, dly, delayMult) {
	hSelector += " .line--end-left";
	gsap.fromTo(
		hSelector,
		{
			opacity: 0,
			x: "40%",
		},
		{
			scrollTrigger: trigger,
			delay: dly * delayMult,
			duration: 0.5,
			ease: "power2.out",
			x: 0,
			opacity: 1,
		}
	);
};
const anim_lineHeading_bottomLine = function (
	hSelector,
	trigger,
	dly,
	delayMult
) {
	hSelector += " .line--end-right";
	gsap.fromTo(
		hSelector,
		{
			opacity: 0,
			x: "-40%",
		},
		{
			scrollTrigger: trigger,
			delay: dly * delayMult,
			duration: 0.5,
			ease: "power2.out",
			x: 0,
			opacity: 1,
		}
	);
};
const anim_lineHeading_heading = function (hSelector, trigger, dly, delayMult) {
	hSelector += " h2";
	gsap.fromTo(
		hSelector,
		{
			opacity: 0,
		},
		{
			scrollTrigger: trigger,
			delay: dly * delayMult,
			duration: 0.3,
			ease: "power2.out",
			opacity: 1,
		}
	);
};
// #endregion
const animComp_lineHeading = function (selector, trigger, dly) {
	anim_lineHeading_topLine(selector, trigger, dly, 0);
	anim_lineHeading_bottomLine(selector, trigger, dly, 1);
	anim_lineHeading_heading(selector, trigger, dly, 3);
};
const anim_pop = function (
	selector,
	trigger,
	delay,
	easeParams = "1.125, 1",
	duration = 0.75
) {
	gsap.fromTo(
		selector,
		{
			scaleX: 0,
			scaleY: 0,
		},
		{
			scrollTrigger: trigger,
			delay: delay,
			ease: "elastic.out(" + easeParams + ")",
			duration: duration,
			scaleX: 1,
			scaleY: 1,
		}
	);
};
const animComp_mediaTextImagePop = function (selector, trigger, dly) {
	anim_pop(
		selector + " .media-text--media .frame-container",
		trigger,
		dly,
		ease_pop_imgFrame,
		1
	);
	anim_pop(
		selector + " .media-text--media img",
		trigger,
		dly + 0.2,
		ease_pop_img,
		0.8
	);
};

gsap.to("#hero", {
	opacity: 1,
	duration: 0.4,
});

anim_pop("#hero .pre-order-button a", null, 1.5);

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

animComp_mediaTextImagePop("#exposition", trig_exposition, 0);

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

anim_pop(
	"#multiplayer .media-text--media img",
	trig_multiplayer,
	dly_multiplayer * 2,
	ease_pop_img_multiplayer,
	0.75
);

// gsap.fromTo(
// 	"#multiplayer .media-text--media img",
// 	{
// 		scaleX: 0,
// 		scaleY: 0,
// 	},
// 	{
// 		scrollTrigger: trig_multiplayer,
// 		delay: dly_multiplayer * 2,
// 		ease: "elastic.out(1, 0.8)",
// 		duration: 0.75,
// 		scaleX: 1,
// 		scaleY: 1,
// 	}
// );

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
		x: "105%",
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

animComp_mediaTextImagePop("#league", trig_league_b, dly_league * 3);

// Features
animComp_lineHeading("#features", trig_features, dly_features);

const bulletFrom = {
	opacity: 0,
	x: "25%",
};
const bulletTo = function (delayMult) {
	return {
		scrollTrigger: trig_features,
		delay: dly_features * delayMult,
		duration: 0.5,
		ease: "power2.out",
		opacity: 1,
		x: 0,
	};
};
const itemFrom = { opacity: 0 };
const itemTo = function (delayMult) {
	return {
		scrollTrigger: trig_features,
		delay: dly_features * delayMult,
		duration: 0.5,
		ease: "power2.out",
		opacity: 1,
	};
};

let count = 3;
gsap.fromTo("#features #feat-1 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-1 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-2 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-2 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-3 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-3 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-4 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-4 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-5 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-5 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-6 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-6 span", itemFrom, itemTo(count));
count += 0.5;

gsap.fromTo("#features #feat-7 .bullet-line", bulletFrom, bulletTo(count));
gsap.fromTo("#features #feat-7 span", itemFrom, itemTo(count));
count += 0.5;

// Pre Order
animComp_lineHeading("#pre-order", trig_preOrder_a, dly_preOrder);
