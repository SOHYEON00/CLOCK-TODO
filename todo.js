const formTodo = document.querySelector(".conTodo .js-form");
const inputTodos = formTodo.querySelector("#inputTodos");
const listTodo = formTodo.querySelector("ul");
const arrTodoObj = [];
let strArrTodo = JSON.stringify(arrTodoObj);

const TODO_LS = "todo";

function delTodo() {

}

function printOriTodos() {
	let currentArr = localStorage.getItem(TODO_LS);
	let currentObj = JSON.parse(currentArr);

	if(currentObj !== '') {
		
		let li = document.createElement("li");
		let delBtn = document.createElement("button");

		currentObj.forEach(function(element, index) {
			li.id = index + 1;
			delBtn.id = index + 1;
			li.innerText = element.text;

			listTodo.appendChild(li);
			li.appendChild(delBtn);
		});

	}
}

function setId() {
	
	
}

function buildTodoList(text) {

	let savedArrLength = setId();

	const todoObj = {
		text: text,
		id: savedArrLength
	};

	arrTodoObj.push(todoObj);

	const strArr = JSON.stringify(arrTodoObj);
	localStorage.setItem(TODO_LS, strArr);

	
	return todoObj.id;
}

function onList(todoId) {
	const savedTodo = arrTodoObj[todoId-1].text;
	const newLi = document.createElement("li");
	const delBtn = document.createElement("button");

	delBtn.value = todoId;
	newLi.id = todoId;

	listTodo.appendChild(newLi);
	newLi.appendChild(delBtn);

	newLi.innerText = savedTodo;
}

function clearInput(target) {
	if(target.value !== null){
		target.value = '';
	}
}

function saveTodo(text) {
	let todoId = buildTodoList(text);
	onList(todoId);
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
	//printOriTodos();
	formTodo.addEventListener("submit", submitHandler);
	
	
}

init();