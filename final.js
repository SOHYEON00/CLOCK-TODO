const firstShow =  document.querySelector(".first-showing"),
	formGreeting = firstShow.querySelector(".form-name"),
	name = formGreeting.querySelector("input"),
	mainShow = document.querySelector(".main-showing"),
	clock = mainShow.querySelector("#clock"),
	greeting = mainShow.querySelector(".js-greeting"),
	resetBtn = mainShow.querySelector("#resetBtn"),
	formTodo = mainShow.querySelector("#form-todo"),
	newTodo = formTodo.querySelector("input"),
	todaysTodo = formTodo.querySelector("#todaysTodo");

const GREET_LS = "name",
	TODO_LS = "todo";

// --------------------- today's focus -----------------------

function deleteTodo(event) {
	event.preventDefault();
	localStorage.removeItem(TODO_LS);
	paintTodo();
}

function addButton() {
	const delBtn = document.createElement("input");
	delBtn.type = "button";
	delBtn.value = "X";
	delBtn.addEventListener("click", deleteTodo);

	todaysTodo.appendChild(delBtn);
}

function paintTodo() {
	const todo = localStorage.getItem(TODO_LS);
	todaysTodo.innerText = todo;	

	if(todo !== null){
		addButton();
	}
}

function submitHandler(event) {
	event.preventDefault();

	const currentTodo = newTodo.value;
	localStorage.setItem(TODO_LS, currentTodo);
	paintTodo();

	newTodo.value = '';
}

// --------------------- greeting -----------------------
function changePage() {
	const savedName = localStorage.getItem(GREET_LS);
	const savedTodo = localStorage.getItem(TODO_LS);

	if(savedName !== null) {
		firstShow.classList.add("not-showing");
		mainShow.classList.remove("not-showing");
		paintGreeting();
		paintTodo();
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

	const newName = name.value;
	localStorage.setItem(GREET_LS, newName);
	changePage();
	paintGreeting();
}

// --------------------- clock -----------------------
function getTime() {
	const currentTime = new Date(),
		hour = currentTime.getHours(),
		minutes = currentTime.getMinutes();

	const sumHour = `${hour < 10 ? `0${hour}` : hour}`;
	const sumMins = `${minutes < 10 ? `0${minutes}` : minutes}`;
	clock.innerText = `${sumHour} : ${sumMins}`;
}

// --------------------- init -----------------------
function init() {
	window.addEventListener("load", changePage);
	setInterval(getTime, 1000);
	formGreeting.addEventListener("submit", greetingHandler);
	resetBtn.addEventListener("click", resetHandler);

	formTodo.addEventListener("submit", submitHandler);
}

init();