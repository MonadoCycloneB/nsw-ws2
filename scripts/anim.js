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
	start: "10% 80%",
	toggleActions: "play none none none",
};
const trig_league_a = {
	trigger: "#league",
	start: "15% 80%",
	toggleActions: "play none none none",
};
const trig_league_b = {
	trigger: "#league",
	start: "30% 70%",
	toggleActions: "play none none none",
};
const trig_features = {
	trigger: "#features",
	start: "0% 80%",
	toggleActions: "play none none none",
};
const trig_preOrder_a = {
	trigger: "#pre-order",
	start: "15% 90%",
	toggleActions: "play none none none",
};
const trig_preOrder_b = trig_preOrder_a;
// const trig_preOrder_b = {
// 	trigger: "#pre-order",
// 	start: "30% 80%",
// 	toggleActions: "play none none none",
// };
const trig_nintendoSwitch = {
	trigger: "#nintendo-switch",
	start: "20% 90%",
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
		selector + " .media-text--media .screenshot",
		trigger,
		dly + 0.1,
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
const animComp_textArrayAppear = function (
	selectors,
	trigger,
	delay,
	interval
) {
	selectors.forEach(element => {
		anim_moveFadeY(element, trigger, delay, 50, 0, 0.3);
		delay += interval;
	});
};

gsap.fromTo(
	"#hero",
	{ opacity: 0 },
	{
		opacity: 1,
		duration: 1.25,
	}
);

anim_pop("#hero .pre-order-button a", null, 2);

gsap.fromTo(
	".hero-bg",
	{
		opacity: 0,
	},
	{
		delay: 0.8,
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
		delay: 1.5,
		duration: 0.15,
		opacity: 1,
	}
);

// Key Messaging
anim_moveFadeY(
	"#key-message h2",
	{
		trigger: "#key-message",
		start: "-100px 80%",
		toggleActions: "play none none none",
	},
	0.5,
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
	"-105%",
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
animComp_lineHeading("#features .heading", trig_features, dly_features);

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

let count = 4;
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
anim_moveFadeX(
	"#features .line--color-green.line--w80",
	trig_preOrder_a,
	0.05,
	"110%",
	1,
	0.6
);

animComp_lineHeading("#pre-order", trig_preOrder_a, dly_preOrder);
anim_pop("#pre-order .capsule", trig_preOrder_a, dly_preOrder * 2);

const verDelay = 0.65;

anim_moveFadeY(
	"#pre-order #physical",
	trig_preOrder_b,
	verDelay + 0,
	50,
	0,
	0.6
);

anim_pop("#pre-order #physical img", trig_preOrder_b, verDelay + 0.15, "1, 1");

animComp_textArrayAppear(
	[
		"#pre-order #physical h3",
		"#pre-order #physical p",
		"#pre-order #physical .price-tag",
		"#pre-order #physical small",
		"#pre-order #physical .order-button",
	],
	trig_preOrder_b,
	verDelay + 0.35,
	0.05
);

anim_moveFadeY(
	"#pre-order #digital",
	trig_preOrder_b,
	verDelay + 0.5,
	50,
	0,
	0.6
);

anim_pop("#pre-order #digital img", trig_preOrder_b, verDelay + 0.65, "1, 1");

animComp_textArrayAppear(
	[
		"#pre-order #digital h3",
		"#pre-order #digital p",
		"#pre-order #digital .price-tag",
		"#pre-order #digital .order-button",
	],
	trig_preOrder_b,
	verDelay + 0.85,
	0.05
);

// Nintendo Switch
anim_moveFadeX(
	"#nintendo-switch .switch-banner",
	trig_nintendoSwitch,
	0,
	0,
	0,
	2
);
anim_moveFadeX("#nintendo-switch h2", trig_nintendoSwitch, 0, 0, 0, 2);
anim_moveFadeX(
	"#nintendo-switch .warranty-sticker",
	trig_nintendoSwitch,
	0.9,
	0,
	0,
	0.2
);

anim_pop("#nintendo-switch .choose-system-button a", trig_nintendoSwitch, 1.4);
