// // const CLICKED_CLASS = "clicked";

// // const title = document.querySelector("#title");
// // // console.dir(document); -> show funcs or objects with html

// // function changeColor(event){
// // 	// const hasClickedClass = title.classList.contains(CLICKED_CLASS);

// // 	// if(hasClickedClass) {
// // 	// 	title.classList.remove(CLICKED_CLASS);
// // 	// } else {
// // 	// 	title.classList.add(CLICKED_CLASS);
// // 	// }
	
// // 	title.classList.toggle(CLICKED_CLASS);
// // }
// // title.addEventListener("click", changeColor);

// const time = document.querySelector("#clock"),
// 	form = document.querySelector(".js-input"),
// 	input = form.querySelector("input"),
// 	greeting = document.querySelector(".greeting");

// function greetFunc(name) {
// 	greeting.innerText = `Hi, ${name}`;
// 	greeting.classList.add("showing");
// }

// function saveName(name) {
// 	const key = "name";
// 	localStorage.setItem(key, name);
// 	greetFunc(name);
// }w

// function handleEvent(event) {
// 	const currentValue = input.value;
	
// 	event.preventDefault();
// 	form.classList.add("notShowing");
// 	saveName(currentValue);
// }

// function askName() {
// 	form.addEventListener("submit", handleEvent);
// }

// function getTime() {
// 	const now = new Date();
// 	const hours = now.getHours();
// 	const minutes = now.getMinutes();
// 	const sec = now.getSeconds();

// 	time.innerHTML =  
// 	`${hours < 10 ? `0${hours}` : hours} :
// 	 ${minutes < 10 ? `0${minutes}` : minutes} :
// 	 ${sec < 10 ? `0${sec}` : sec}`;
// }

// function init() {
// 	getTime();
// 	setInterval(getTime, 1000);	
// 	askName();
// }

// init();