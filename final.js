const firstShow =  document.querySelector(".first-showing"),
	formGreeting = firstShow.querySelector(".form-name"),
	name = formGreeting.querySelector("input"),
	mainShow = document.querySelector(".main-showing"),
	clock = mainShow.querySelector("#clock"),
	greeting = mainShow.querySelector(".js-greeting"),
	resetBtn = mainShow.querySelector("#resetBtn"),
	formTodo = mainShow.querySelector("#form-todo"),
	newTodo = formTodo.querySelector("input"),
	listTodo = formTodo.querySelector("#list");

const GREET_LS = "name",
	TODO_LS = "todo";

function changePage() {
	const savedName = localStorage.getItem(GREET_LS);

	if(savedName !== null) {
		firstShow.classList.add("not-showing");
		mainShow.classList.remove("not-showing");
		paintGreeting();
	}
}

function resetHandler(event) {
	event.preventDefault();
	mainShow.classList.add("not-showing");
	firstShow.classList.remove("not-showing");
}

function paintGreeting() {
	const currentName = localStorage.getItem(GREET_LS);
	const greetMsg = "Hello, ";
	greeting.innerText = greetMsg + currentName;
}

function greetingHandler(event) {
	event.preventDefault();

	changePage();

	const newName = name.value;
	localStorage.setItem(GREET_LS, newName);
	paintGreeting();
}

function getTime() {
	const currentTime = new Date(),
		hour = currentTime.getHours(),
		minutes = currentTime.getMinutes();

	const sumHour = `${hour < 10 ? `0${hour}` : hour}`;
	const sumMins = `${minutes < 10 ? `0${minutes}` : minutes}`;
	clock.innerText = `${sumHour} : ${sumMins}`;
}

function init() {
	window.addEventListener("load", changePage);
	setInterval(getTime, 1000);
	formGreeting.addEventListener("submit", greetingHandler);
	resetBtn.addEventListener("click", resetHandler);
}

init();