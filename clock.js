const formClock = document.querySelector("#formClock");
const inputPlace = formClock.querySelector("#inputPlace");
const currentTime = document.querySelector(".divClock");
const greeting = formClock.querySelector(".greeting");


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
	localStorage.setItem("place",place);
}

function showElements(element) {
	element.classList.remove("notShowing");
	element.classList.add("showing");
}

function notShowElements(element) {
	element.classList.remove("showing");
	element.classList.add("notShowing");
}

function getTime() {
	const now = new Date();
	const hours = now.getHours();
	const mins = now.getMinutes();
	const sec = now.getSeconds();

	showElements(currentTime);
	//currentTime.innerText = `${inputPlace.value} >> ${hours < 10 ? `0${hours}` : hours} : ${mins < 10 ? `0${mins}` : mins} : ${sec < 10 ? `0${sec}` : sec}`;
}	

function getPlace(event) {
	event.preventDefault();
	const currentPlace = inputPlace.value;
	
	greeting.innerText = `Hello, ${currentPlace}`;
	notShowElements(inputPlace);
	showElements(greeting);
	//addBtn(greeting);

	if(currentPlace !== null){
		setInterval(getTime, 1000);
		savePlace(currentPlace);
	}
}
function init() {
	formClock.addEventListener("submit", getPlace);
}


init();






