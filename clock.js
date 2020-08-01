const formClock = document.querySelector("#formClock");
const inputContinent = formClock.querySelector("#inputContinent");
const inputCity = formClock.querySelector("#inputCity");
const greeting = document.querySelector(".greeting");
const submitBtn = formClock.querySelector("#submitBtn");
const currentTime = document.querySelector(".divClock");
const currentLink = currentTime.querySelector("iframe");


let arrClock = [];
const baseLink = "https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=medium&timezone=";
const spaceBar = "%2F";



// function clearClock() {
// 	const button = document.querySelector("button");
// 	notShowElements(button);
// 	notShowElements(greeting);
// 	notShowElements(currentTime);
// 	showElements(inputPlace);
// }

// function addBtn(element) {
// 	const reBtn = document.createElement('button');
// 	element.appendChild(reBtn);
// 	reBtn.innerHTML = "RESTART";
// 	reBtn.addEventListener("click", clearClock);
// }


function savePlace(place) {
	arrClock.push(place);
	let strbj = JSON.stringify(place);
	localStorage.setItem("place",strbj);
}

function showElements(element) {
	element.classList.remove("notShowing");
	element.classList.add("showing");
}

function notShowElements(element) {
	element.classList.remove("showing");
	element.classList.add("notShowing");
}

function findLink(continent, city) {
	let link = `${baseLink}${continent}${spaceBar}${city}`;
	currentLink.src = link;
}

function getTime() {
	// const now = new Date();
	// const hours = now.getHours();
	// const mins = now.getMinutes();
	// const sec = now.getSeconds();
	//currentTime.innerText = `${inputPlace.value} >> ${hours < 10 ? `0${hours}` : hours} : ${mins < 10 ? `0${mins}` : mins} : ${sec < 10 ? `0${sec}` : sec}`;
	// let placeObj = {
	// 	continent: continent,
	// 	city: city
	// };

	// savePlace(placeObj);
	showElements(currentTime);
}	

function getPlace(event) {
	event.preventDefault();
	let currentContinent = inputContinent.value;
	let currentCity = inputCity.value;
		
	//객체로 저장하고 싶었는데, 뭔가 어렵다... 사실 굳이 객체가 필요없는 곳인 것 같음.

	if( (currentContinent !== "") && (currentCity !== "" )){
		greeting.innerText = `Hello, ${currentCity}`;
		notShowElements(inputContinent);
		notShowElements(inputCity);
		notShowElements(submitBtn);
		showElements(greeting);
		findLink(currentContinent, currentCity);
		setInterval(getTime, 1000);
	}
	else {
		alert("Please re-write");
	}
}

function init() {
	formClock.addEventListener("submit", getPlace);
}


init();






