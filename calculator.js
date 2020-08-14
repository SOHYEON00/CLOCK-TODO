const container = document.querySelector("container"),
	form = container.querySelector(".showNum"),
	screen = document.querySelector("#window"),
	number = document.querySelector(".number")
	resultBtn = document.querySelector("#submit"),
	clearBtn = document.querySelector("#clear"),
	operatorBtn = document.querySelector(".operator");

let num1;
let num2;
let getOperator;
let stringedNum = num1; //한 자리 수 이상의 수를 입력받기 위한 변수
let currentNum;
let arrNumber = [];

// 1. 넘버 클릭 이벤트 발생->핸들러
// 2. submit 이벤트 발생->핸들러
// 3. 오퍼레이터 클릭 이벤트 발생 -> 핸들러
// 4. clear 클릭 이벤트 발생->핸들러

 function operation() {
 	let total;

	switch(getOperator) {
		case '+':
			total = num1 + num2;
			break;
		case '-':
			total = num1 - num2;
			break;
		case '*':
			total = num1 * num2;
			break;
		case '/':
			total = num1 / num2;
			break;
	}
	screen.innerText = total;
	num1 = total;
	arrNumber = [];
 }

function getInputOperator(operator) {

	if(num1 === undefined) {
		num1 = parseInt(stringedNum);
		stringedNum = undefined;
		arrNumber.push(num1);
	}
	else {
		num2 = parseInt(stringedNum);
		arrNumber.push(num2);
		stringedNum = undefined;
	}
	arrNumber.push(operator);
	getOperator = operator;

}

function getInputNum(value) {
	screen.innerText = '';

	if(stringedNum === undefined) {
		stringedNum = String(value);
		screen.innerText = stringedNum;	
	}
	else {
		stringedNum += String(value);
		screen.innerText = stringedNum;
	}	
}

function submitHandler() {
	event.preventDefault();
	
	num2 = parseInt(stringedNum);
	arrNumber.push(num2);
	console.log(num1);
	console.log(getOperator);
	console.log(num2);

	if(arrNumber.length === 3) {
		operation();
	}
	
 }

function resetHandler() {
	event.preventDefault();
	console.log(arrNumber);
	console.log(num1);
	console.log(getOperator);
}

function init() {

}

init();