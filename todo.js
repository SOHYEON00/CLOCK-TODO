const formTodo = document.querySelector(".conTodo .js-form");
const inputTodos = formTodo.querySelector("#inputTodos");
const listTodo = formTodo.querySelector("ul");
const arrObj = [];

const TODO_LS = "todo";

function createObj(text) {
	const todoObj = {
		text: text,
		id: arrObj.length + 1
	};
	arrObj.push(todoObj);
	console.log(arrObj);
}

function onList() {
	const savedTodo = localStorage.getItem(TODO_LS);
	const newLi = document.createElement("li");
	listTodo.appendChild(newLi);
	newLi.innerText = savedTodo;
}

function clearInput(target) {
	if(target.value !== null){
		target.value = '';
	}
}

function saveTodo(text) {
	localStorage.setItem(TODO_LS, text);
	onList();
	createObj(text);
}

function submitHandler(event) {
	event.preventDefault();
	const currentTodo = inputTodos.value;
	
	if(currentTodo !== null){
		saveTodo(currentTodo);
		clearInput(inputTodos);
	}

}

function init() {
	formTodo.addEventListener("submit", submitHandler);
}

init();