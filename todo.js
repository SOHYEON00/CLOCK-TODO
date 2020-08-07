const formTodo = document.querySelector(".conTodo .js-form");
const inputTodos = formTodo.querySelector("#inputTodos");
const listTodo = formTodo.querySelector("ul");
let arrTodoObj = [];

const TODO_LS = "todo";

function saveArrToLs(arrTodoObj) {
	let arrJson = JSON.stringify(arrTodoObj);
	localStorage.setItem(TODO_LS, arrJson);
}

function delBtnHandler(button) 
{
	const clickedLI = button.path[1];
	const clickedText = (clickedLI.innerText);

	listTodo.removeChild(clickedLI);
	console.log();
	const clicekdID = arrTodoObj.findIndex(x => x.text === clickedText);
	arrTodoObj.splice(clicekdID, 1);
	//.slice와 .splice의 차이!!!!!!!
	saveArrToLs(arrTodoObj);
}

function paintList(object) {
	const li = document.createElement('li');
	const delBtn = document.createElement('input');
	delBtn.type = "button";

	li.id = object.id;
	delBtn.id = object.id;
	delBtn.value = "X";
	li.innerText = `${object.text}`;

	listTodo.appendChild(li);
	li.appendChild(delBtn);
	delBtn.addEventListener("click", delBtnHandler, delBtn);
}

//target 사용법
function clearInput(target) {
	if(target.value !== null){
		target.value = '';
	}
}

function submitHandler(event) {
	event.preventDefault();
	
	const newTodo = inputTodos.value;
	const newId = arrTodoObj.length + 1;

	const todoObj = {
		"text": newTodo,
		"id": newId
	};

	arrTodoObj.push(todoObj);
	paintList(todoObj);
	console.log(arrTodoObj);
	clearInput(inputTodos);
	saveArrToLs(arrTodoObj); //새로 입력되는 투두 바로 ls에 추가
}

function init() {
	let currentLS = localStorage.getItem(TODO_LS);
	let currentArr = JSON.parse(currentLS);

	if(currentArr !== null)
	{	
		arrTodoObj = currentArr;

		currentArr.forEach(function(element){
			paintList(element);
		});
	}
	formTodo.addEventListener("submit", submitHandler);
}
init();



// function delTodo() {
	// 1. 인풋 입력받기
	// 2. ls에 객체배열 선언
	// 3. 인풋값 넣은 객체 생성
	// 4. 생성된 객체 객체배열에 푸쉬
	// 5. 객체배열에 있는 모든 객체의 text값 출력
// }

// function printOriTodos() {
// 	let currentArr = localStorage.getItem(TODO_LS);
// 	let currentObj = JSON.parse(currentArr);

// 	if(currentObj !== '') {
		
// 		let li = document.createElement("li");
// 		let delBtn = document.createElement("button");

// 		currentObj.forEach(function(element, index) {
// 			li.id = index + 1;
// 			delBtn.id = index + 1;
// 			li.innerText = element.text;

// 			listTodo.appendChild(li);
// 			li.appendChild(delBtn);
// 		});

// 	}
// }

// function setId() {
	
	
// }

// function buildTodoList(text) {

// 	let savedArrLength = setId();

// 	const todoObj = {
// 		text: text,
// 		id: savedArrLength
// 	};

// 	arrTodoObj.push(todoObj);

// 	const strArr = JSON.stringify(arrTodoObj);
// 	localStorage.setItem(TODO_LS, strArr);

	
// 	return todoObj.id;
// }

// function onList(todoId) {
// 	const savedTodo = arrTodoObj[todoId-1].text;
// 	const newLi = document.createElement("li");
// 	const delBtn = document.createElement("button");

// 	delBtn.value = todoId;
// 	newLi.id = todoId;

// 	listTodo.appendChild(newLi);
// 	newLi.appendChild(delBtn);

// 	newLi.innerText = savedTodo;
// }

// function clearInput(target) {
// 	if(target.value !== null){
// 		target.value = '';
// 	}
// }

// function saveTodo(text) {
// 	let todoId = buildTodoList(text);
// 	onList(todoId);
// }

// function submitHandler(event) {
// 	event.preventDefault();
// 	const currentTodo = inputTodos.value;
	
// 	if(currentTodo !== null){
// 		saveTodo(currentTodo);
// 		clearInput(inputTodos);
// 	}

// }

// function init() {
// 	//printOriTodos();
// 	formTodo.addEventListener("submit", submitHandler);
	
	
// }

// init();