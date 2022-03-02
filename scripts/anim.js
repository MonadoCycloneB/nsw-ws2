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
};
const trig_preOrder_b = {
	trigger: "#pre-order",
	start: "50% 80%",
	toggleActions: "play none none none",
	markers: true,
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

const anim_moveFadeX = function (
	selector,
	trigger,
	dly,
	x,
	opacity,
	duration,
	ease = "power2.out"
) {
	gsap.fromTo(
		selector,
		{
			x: x,
			opacity: opacity,
		},
		{
			scrollTrigger: trigger,
			delay: dly,
			duration: duration,
			ease: ease,
			x: 0,
			opacity: 1,
		}
	);
};
const anim_moveFadeY = function (
	selector,
	trigger,
	dly,
	y,
	opacity,
	duration,
	ease = "power2.out"
) {
	gsap.fromTo(
		selector,
		{
			y: y,
			opacity: opacity,
		},
		{
			scrollTrigger: trigger,
			delay: dly,
			duration: duration,
			ease: ease,
			y: 0,
			opacity: 1,
		}
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
anim_moveFadeY(
	"#key-message h2",
	{
		trigger: "#key-message",
		start: "-100px 80%",
		end: "bottom 20%",
		toggleActions: "play none none none",
	},
	0,
	50,
	0,
	0.5
);

// Exposistion
anim_moveFadeX("#key-message .line", trig_exposition, 0.05, "110%", 1, 0.6);

anim_moveFadeY(
	"#exposition .media-text--text h3",
	trig_exposition,
	0,
	50,
	0,
	0.5
);
anim_moveFadeY(
	"#exposition .media-text--text p",
	trig_exposition,
	dly_exposition,
	50,
	0,
	0.5
);

animComp_mediaTextImagePop("#exposition", trig_exposition, 0);

anim_moveFadeX(
	"#exposition .line--w80",
	trig_multiplayer,
	0.05,
	"110%",
	1,
	0.6
);

// Multiplayer
const multDuration = 0.3;

anim_moveFadeY(
	"#multiplayer .media-text--text .white-block",
	trig_multiplayer,
	0,
	50,
	0,
	multDuration
);
anim_moveFadeY(
	"#multiplayer .media-text--text h2",
	trig_multiplayer,
	dly_multiplayer * 1,
	50,
	0,
	multDuration
);
anim_moveFadeY(
	"#multiplayer .media-text--text h3",
	trig_multiplayer,
	dly_multiplayer * 2,
	50,
	0,
	multDuration
);
anim_moveFadeY(
	"#multiplayer .media-text--text p",
	trig_multiplayer,
	dly_multiplayer * 3,
	50,
	0,
	multDuration
);

anim_pop(
	"#multiplayer .media-text--media img",
	trig_multiplayer,
	dly_multiplayer * 2,
	ease_pop_img_multiplayer,
	0.75
);

// League
anim_moveFadeX(
	"#league .line--color-green",
	trig_league_a,
	0.05,
	"-100%",
	1,
	0.6
);

anim_moveFadeX("#league .bluepill--right", trig_league_a, 0.25, "100%", 0, 0.8);
anim_moveFadeX("#league .bluepill--left", trig_league_a, 0.45, "-100%", 0, 0.5);

anim_moveFadeX("#league .line--end-left", trig_league_b, 0.05, "105%", 0, 0.8);

anim_moveFadeY(
	"#league .media-text--text h3",
	trig_league_b,
	0,
	50,
	0,
	multDuration
);
anim_moveFadeY(
	"#league .media-text--text p",
	trig_league_b,
	dly_league * 1,
	50,
	0,
	multDuration
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

let count = 7;
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
anim_pop("#pre-order .capsule", trig_preOrder_a, dly_preOrder * 2);
