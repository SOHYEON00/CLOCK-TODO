const formClock = document.querySelector("#formClock");
const inputPlace = formClock.querySelector("#inputPlace");
const currentTime = document.querySelector("#nowTime");
const greeting = formClock.querySelector(".greeting");

function savePlace(place) {
	localStorage.setItem("place",place);
}

function getTime() {
	const now = new Date();
	const hours = now.getHours();
	const mins = now.getMinutes();
	const sec = now.getSeconds();

	currentTime.classList.remove("notShowing");
	currentTime.classList.add("showing");

	currentTime.innerText = `${inputPlace.value} >> ${hours < 10 ? `0${hours}` : hours} : ${mins < 10 ? `0${mins}` : mins} : ${sec < 10 ? `0${sec}` : sec}`;

}

function getPlace(event) {
	event.preventDefault();
	const currentPlace = inputPlace.value;

	inputPlace.classList.add("notShowing");
	greeting.innerText = `Hello, ${currentPlace}`;
	greeting.classList.remove("notShowing");

	if(currentPlace !== null){
		setInterval(getTime, 1000);
		savePlace(currentPlace);
	}
}
function init() {
	formClock.addEventListener("submit", getPlace);
}


init();






