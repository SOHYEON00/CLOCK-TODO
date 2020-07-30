const formTodo = document.querySelector(".conTodo .js-form");
const inputTodos = formTodo.querySelector("#inputTodos");
const listTodo = formTodo.querySelector("ul");


function onList() {
	const savedTodo = localStorage.getItem("todo");
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
	localStorage.setItem("todo", text);
	onList();
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