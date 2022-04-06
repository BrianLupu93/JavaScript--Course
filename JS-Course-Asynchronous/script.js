'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
	// const intoTheLanguages = data.languages;
	// const languageValues = Object.values(intoTheLanguages);
	const html = `
<article class="country ${className}">
<img class="country__img" src="${data.flag}" />
<div class="country__data">
	<h3 class="country__name">${data.name}</h3>
	<h4 class="country__region">${data.region}</h4>
	<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
	<p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
	<p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
</div>
</article>
`;
	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.getElementsByClassName.opacity = 1;
};

// const renderError = function(msg) {
// 	countriesContainer.insertAdjacentHTML('beforeend', msg);
// 	countriesContainer.style.opacity = 1;
// };

///////////////////////////////////////

// const getCountryData = function(country) {
// // 	const request = new XMLHttpRequest();
// // 	request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // 	request.send();

// // 	request.addEventListener('load', function() {
// // 		const [ data ] = JSON.parse(this.responseText);
// // 		console.log(data);

// // 		const intoTheLanguages = data.languages;
// // 		const languageValues = Object.values(intoTheLanguages);
// // 		const html = `
// // 	<article class="country">
// // 	<img class="country__img" src="${data.flags.png}" />
// // 	<div class="country__data">
// // 		<h3 class="country__name">${data.name.common}</h3>
// // 		<h4 class="country__region">${data.region}</h4>
// // 		<p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
// // 		<p class="country__row"><span>🗣️</span>${languageValues}</p>
// // 		<p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
// // 	</div>
// // </article>
// // `;
// // 		countriesContainer.insertAdjacentHTML('beforeend', html);
// // 		countriesContainer.getElementsByClassName.opacity = 1;
// // 	});
// // };

// const getCountyAndNeighbour = function(country) {
// 	// AJAX call country 1
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function() {
// 		const [ data ] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// Render country 1
// 		renderCountry(data);

// 		// Get neighbour country (2)
// 		const [ neighbour ] = data.borders;
// 		if (!neighbour) return;

// 		// AJAX call country 2
// 		const request2 = new XMLHttpRequest();
// 		request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// 		request2.send();

// 		request2.addEventListener('load', function() {
// 			const [ data2 ] = JSON.parse(this.responseText);
// 			console.log(data2);

// 			// Render country 2
// 			renderCountry(data2, 'neighbour');
// 		});
// 	});
// };

// getCountyAndNeighbour('germany');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then(function(response) {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then(function(data) {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

// const getCountryData = function(country) {
// 	//Countty 1
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			const neighbour = data[0].borders[0];

// 			if (!neighbour) return;

// 			// Country 2
// 			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// 		})
// 		.then((response) => response.json())
// 		.then((data) => renderCountry(data, 'neighbour'))
// 		.catch((err) => {
// 			console.error(`${err} 💥💥💥`);
// 			renderError(`Something wen wrong 💥💥${err.message}. Try againf!`);
// 		});
// };
// btn.addEventListener('click', function() {
// 	getCountryData('portugal');
// });

// THE EVENT LOOP IN PRACTICE
// Timer vs promise
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1 ').then((res) => console.log(res));

// Promise.resolve('Resolved promise 2').then((res) => {
// 	for (let i = 0; i < 1000000000; i++) {}
// 	console.log(res);
// });

// console.log('Test end');

// Building a simple Promise

// const lotteryPromise = new Promise(function(resolve, reject) {
// 	console.log('Lotter draw is happening 🎁');
// 	setTimeout(function() {
// 		if (Math.random() >= 0.5) {
// 			resolve('You WIN 💰');
// 		} else {
// 			reject(new Error('You lost your money 💩'));
// 		}
// 	}, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// // Promisifying setTimeout
// const wait = function(seconds) {
// 	return new Promise(function(resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// wait(4).then((seconds) => {
// 	console.log('I waited 4 seconds');
// 	return wait(2).then((seconds) => {
// 		console.log('I waited 2 seconds');
// 	});
// });

// ASYNC AND AWAIT

const getPosition = function() {
	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = async function() {
	try {
		const pos = await getPosition();
		const { latitude: lat, longitude: lng } = pos.coords;

		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
		const dataGeo = await resGeo.json();

		const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

		const data = await res.json();
		renderCountry(data[0]);

		return `You are in ${dataGeo.city}, ${dataGeo.country}`;
	} catch (err) {
		console.error(err);
	}
};
// console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI().then((city) =>
// 	console
// 		.log(`2: ${city}`)
// 		.catch((err) => {
// 			return console.error(`2: ${err.message} 💥`);
// 		})
// 		.finally(() => console.log(`3: Finishing getting location`))
// );

// (async function() {
// 	try {
// 		const city = await whereAmI();
// 		console.log(`2: ${city}`);
// 	} catch (err) {
// 		console.error(`2: ${err.message}`);
// 	}
// 	console.log('3: Finished getting location');
// })();

//	 TRY AND CATCH ERROR HANDLING

// try {
// 	let y = 1;
// 	const x = 2;
// 	x = 3;
// } catch (err) {
// 	alert(err.message);
// }

// RUNNING PROMISES IN PARALEL

const getJSON = function(url, errorMsg = 'Something wen wrong') {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};

// const get3Countries = async function(c1, c2, c3) {
// 	try {
// 		// const [ data1 ] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// 		// const [ data2 ] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// 		// const [ data3 ] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

// 		const data = await Promise.all([
// 			getJSON(`https://restcountries.com/v2/name/${c1}`),
// 			getJSON(`https://restcountries.com/v2/name/${c2}`),
// 			getJSON(`https://restcountries.com/v2/name/${c3}`)
// 		]);

// 		console.log(data.map((d) => d[0].capital));

// 		// console.log([ data1.capital, data2.capital, data3.capital ]);
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// get3Countries('portugal', 'germany', 'italy');

//	PROMISE.RACE

(async function() {
	const res = await Promise.race([
		getJSON(`https://restcountries.com/v2/name/usa`),
		getJSON(`https://restcountries.com/v2/name/italy`),
		getJSON(`https://restcountries.com/v2/name/germany`)
	]);
	console.log(res[0]);
})();

const timeout = function(sec) {
	return new Promise(function(_, reject) {
		setTimeout(function() {
			reject(new Error('Request took too long!'));
		}, sec * 1000);
	});
};

Promise.race([ getJSON(`https://restcountries.com/v2/name/usa`), , timeout(1) ])
	.then((res) => console.log(res[0]))
	.catch((err) => console.log(err));

// PROMISE.ALLSETTLED vs PROMISE.ALL
Promise.allSettled([
	Promise.resolve('Success'),
	Promise.reject('ERROR'),
	Promise.resolve('Another Success')
]).then((res) => console.log(res));
Promise.all([ Promise.resolve('Success'), Promise.reject('ERROR'), Promise.resolve('Another Success') ]).then((res) =>
	console.log(res)
);
//	 PROMISE.ANY  [es2021]
Promise.any([ Promise.resolve('Success'), Promise.reject('ERROR'), Promise.resolve('Another Success') ]).then((res) =>
	console.log(res)
);
