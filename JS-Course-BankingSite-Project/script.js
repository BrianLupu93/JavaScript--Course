'use strict';
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// Modal window

const openModal = function(e) {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
///////////////////////////////////////////////
//	PAGE NAVIGATION

//  This kind of method attach to all the elements the same callbacks functions
//  is unnecessary to keep all of this. (for thousend of elements, will not be great)

// document.querySelectorAll('.nav__link').forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.preventDefault();

// 		const id = this.getAttribute('href');
// 		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// 	});
// });

// Implement EVENT DELEGATION

// 1. Add event listner to common partent
//2 Determine way element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
	e.preventDefault();

	// Matching strategy (ignore click outside the links into the nav__links bar)

	if (e.target.classList.contains('nav__link')) {
		const id = e.target.getAttribute('href');
		// console.log(id);
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
	}
});

//////////////////////////////////////////////
//	BTN SCROLLING
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', function(e) {
	//console.log(s1coords);
	// console.log(e.target.getBoundingClientRect());
	// console.log('Current Scroll', window.pageXOffset, window.pageYOffset);
	// console.log('height and width view port', document.documentElement.clientHeight);

	// Two way to implement a scroll effect:
	// method #1

	// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
	// method #2

	// window.scrollTo({
	// 	left: s1coords.left + window.pageXOffset,
	// 	top: s1coords.top + window.pageYOffset,
	// 	behavior: 'smooth'
	// });

	// Modern method to scroll to:
	section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////
// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//	event delegation

tabsContainer.addEventListener('click', function(e) {
	const clicked = e.target.closest('.operations__tab');

	// console.log(clicked);

	if (!clicked) return; // Guard clause (if)  no more error in the console

	//  Active tab
	tabs.forEach((t) => t.classList.remove('operations__tab--active'));
	// Remove active content
	tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

	// Active tab
	clicked.classList.add('operations__tab--active');

	// Activate content area

	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

///////////////////////////////////////////////
//	SELECTING, CREATING AND DELETE ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookied for improved 
functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>`;
// header append
header.append(message);
// remove element
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
	message.remove();
});

// STYLES

message.style.backgroundColor = '#37383d';
message.style.width = '110%';
// getComputedStyle
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// setProperty
// document.documentElement.style.setProperty('--color-primary', 'green');

//////////////////////////////////////////////////////
// MENU FADE ANIMATIONS

const handleHOver = function(e, opacity) {
	if (e.target.classList.contains('nav__link')) {
		const link = e.target;
		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
		const logo = link.closest('.nav').querySelector('img');

		siblings.forEach((el) => {
			if (el !== link) el.style.opacity = this;
		});

		logo.style.opacity = this;
	}
};

const nav = document.querySelector('.nav');
// option 1
// nav.addEventListener('mouseover', function(e) {
// 	handleHOver(e, 0.5);
// });

// nav.addEventListener('mouseout', function(e) {
// 	handleHOver(e, 1);
//});
// option 2
nav.addEventListener('mouseover', handleHOver.bind(0.5));

nav.addEventListener('mouseout', handleHOver.bind(1));

/////////////////////////////////////////////////

// 	STICKY NAVIGATIONS (bad choice with scroll) & (good choice with the intersection observer API)

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function() {
// 	if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
// 	else nav.classList.remove('sticky');
// });

/////////////////////////////////////////////////
// 	STICKY NAVIGATIONS - INTERSECTION OBSERVER API
// littele explications
// const obsCallback = function(entries, observer) {
// 	entries.forEach((entry) => console.log(entry));
// };

// const obsOptions = {
// 	root: null,
// 	threshold: [ 0, 0.2 ]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const styckyNav = function(entries) {
	const [ entry ] = entries;

	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};

const styckyNavObj = {
	root: null,
	treshold: 0,
	rootMargin: `-${navHeight}px`
};

const headerObserver = new IntersectionObserver(styckyNav, styckyNavObj);

headerObserver.observe(header);

/////////////////////////////////////////////////
//	REVEALING ELEMENTS ON SCROLL
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
	const [ entry ] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');

	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	trashold: 0.15
});

allSections.forEach(function(section) {
	sectionObserver.observe(section);
	// section.classList.add('section--hidden');
});

////////////////////////////////////////////////
//LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
	const [ entry ] = entries;

	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;

	entry.target.addEventListener('load', function() {
		entry.target.classList.remove('lazy-img');

		observer.unobserve(entry.target);
	});
};

const imgObserver = new IntersectionObserver(loadImg, {
	root: null,
	trashold: 0
});

imgTargets.forEach((img) => imgObserver.observe(img));

////////////////////////////////////////////////
// BUILD A SLIDER COMPONENT

// The end slider result  in a single container function

const slider = function() {
	// Part 1

	const slides = document.querySelectorAll('.slide');

	let curSlide = 0;
	const maxSlide = slides.length;

	const goToSlide = function(slide) {
		slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
	};

	const slider = document.querySelector('.slider');
	// slider.style.transform = 'scale(0.5)';
	// slider.style.overflow = 'visible';

	const btnLeft = document.querySelector('.slider__btn--left');
	const btnRight = document.querySelector('.slider__btn--right');

	const nextSlide = function() {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activeDot(curSlide);
	};

	const prevSlide = function() {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activeDot(curSlide);
	};

	btnRight.addEventListener('click', nextSlide);
	btnLeft.addEventListener('click', prevSlide);

	////////////////////////////////////////////////
	// BUILD A SLIDER COMPONENT
	// Part 2

	document.addEventListener('keydown', function(e) {
		if (e.key === 'ArrowLeft') prevSlide();
		e.key === 'ArrowRight' && nextSlide();
	});

	const dotContainer = document.querySelector('.dots');

	const createDots = function() {
		slides.forEach(function(_, i) {
			dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
		});
	};

	const activeDot = function(slide) {
		document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
	};

	dotContainer.addEventListener('click', function(e) {
		if (e.target.classList.contains('dots__dot')) {
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activeDot(slide);
		}
	});

	///////////////////////

	const initSlider = function() {
		createDots();
		activeDot(curSlide);
		goToSlide(0);
	};

	initSlider();

	////////////////////////
};

slider();
///////////////// //////////////////////////////
//STYLES ATTRIBUITES AND CLASSES

const logo = document.querySelector('.nav__logo');

// console.log(logo.getAttribute('src')); // real adress

// Data attributes

// console.log(logo.dataset.versionNumber);

// Classes

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains(); // not includes

// Don't use this

// logo.className = 'nameXxX';   this will overwrite all

//////////////////////TYPES OF EVENTS AND EVENT HANDLERS

// const h1 = document.querySelector('h1');

// // MODERN WAY ... BETTER WAY WITH ADDEVENTLISTENERS

// const alertH1 = function(e) {
// 	alert('addEventListener: Great! You are reading the HTMLHeadingElement.');

// 	// Big Advantage: you can remove an event after that event was happened!!!
// 	// You can also remove this event when you want to: with a setTimeout, with
// 	// numbers of event... whatever you want
// 	h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// OLD WAY TO ADD EVENTS
// h1.onmouseenter = function(e) {
// 	alert('addEventListener: Great! You are reading the HTMLHeadingElement.');
// };
//////////////////BUBBLING AND CAPTURING

// // rgb (255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('LINK', e.target, e.currentTarget);

// 	// Stop event propagation  (not goog to use in general)
// 	// e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function(e) {
// 	this.style.backgroundColor = randomColor();
// 	console.log('NAV', e.target, e.currentTarget);
// });

//////////////	DOM TRAVERSING

// const h1 = document.querySelector('h1');

// //	Going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstChild);
// console.log(h1.lastChild);
// h1.firstElementChild.style.color = 'red';

// // Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways : siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

/////////////////////////////////////
// 	 LIFECYCLE DOM EVENTS

// document.addEventListener('DOMContentLoaded', function(e) {
// 	console.log('html parsed and dom tree built', e);
// });

// window.addEventListener('load', function(e) {
// 	console.log('content was loaded complete', e);
// });

// // window.addEventListener('beforeunload', function(e) {
// // 	e.preventDefault();
// // 	console.log(e);
// // 	e.returnValue = 'message';
// // });
