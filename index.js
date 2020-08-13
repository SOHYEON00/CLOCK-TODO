// // const form = document.querySelector("form"),
//  const     span = document.querySelector("#range"),
//       inputRange = document.querySelector("#rangeInput"),
//       inputNum = document.querySelector("#numberInput"),
//       playBtn = document.querySelector("#play"),
//       wroteSpan = document.querySelector("#wrote"),
//       machineSpan = document.querySelector("#machine"),
//       nowLine = document.querySelector("#now"),
//       resultLine = document.querySelector("#result");
// let answer;
// // 1. input range값 조절하기 = answer값 얻기
// // 2. 내가 생각한 답 입력하기.
// // 3. 버튼 누르면 현재 입력한 값이랑 answer값 비교해 결과 출력
// // 4. 입력한 값이 없으면 3번이 작동하지 않기.
// function checkCorrect(urAnswer) {

//   const wroteAnswer = parseInt(urAnswer);
//   (wroteAnswer === answer) ? resultLine.innerText = `You won!` : resultLine.innerText = `You lost!`
//   resultLine.classList.add("showing");
// }

// function getRealAnswer(min, max) {
//   answer = Math.floor(Math.random() * (max - min)) - min;
// }

// function currentSituation() {
//   if(inputNum.value === '') {
//     return;
//   }
//   const currentAnswer = inputNum.value;
//   wroteSpan.innerText = currentAnswer;
//   machineSpan.innerText = answer;
//   nowLine.classList.add("showing");

//   checkCorrect(currentAnswer);
//   getRange();
// }

// function getRange() {
//   const range = inputRange.value;
//   const divided = Math.floor(range / 10);
//   const rest = range % 10;
//   let max;
//   const min = 0;

//   if(rest > 5){
//     max = (divided + 1) * 10;
//   }
//   else {
//     max = (divided * 10) + 5;
//   }
//   span.innerText = max;
//   getRealAnswer(min, max);
  
//   playBtn.addEventListener("click", currentSituation);
// }

// function init() {
//   inputRange.addEventListener("input", getRange);
// }

// init();

// const formPend = document.querySelector("#formPend");
// const formFin = document.querySelector("#formFin");
// const input = formPend.querySelector("input");
// const listPend = formPend.querySelector("#listPend");
// const listFin = formFin.querySelector("#listFin");
// let arrPend = [];
// let arrFin = [];

// const PENDING = "Pending";
// const FINISHED = "Finished";


// function lsSetItem() {

//   const strArrPend = JSON.stringify(arrPend);
//   const strArrFin = JSON.stringify(arrFin);
//   //배열로 setItem
//   localStorage.setItem(PENDING, strArrPend);
//   localStorage.setItem(FINISHED, strArrFin);
// }

// function deleteHandler(event) {
//   const clickedBtn = event.target;
//   const idOfClickedBtn = parseInt(clickedBtn.id); //1~
//   const clickedLi = document.querySelector(`li[id="${idOfClickedBtn}"]`); 
//   const clickedList = clickedLi.parentNode;
  
//   if(clickedList.id === 'listPend') {
//     const index = arrPend.findIndex(e => e.id === idOfClickedBtn); // 0~
//     listPend.removeChild(clickedLi);
//     arrPend.splice(index, 1);
    
//   }
//   else {
//     const index = arrFin.findIndex(e => e.id === idOfClickedBtn); // 0~
//     listFin.removeChild(clickedLi);
//     arrFin.splice(index, 1);
//   }

// lsSetItem();
  
// }


// function moveTo(event) {
//   const movedBtn = event.target;
//   const idOfBtn = parseInt(movedBtn.id); //1~
//   const movedLi = movedBtn.parentNode;
//   const fromList = movedLi.parentNode;


//   if(fromList.id === 'listPend') {
//     listPend.removeChild(movedLi);
//     listFin.appendChild(movedLi);

//     movedBtn.value = '<';
//     const index = arrPend.findIndex(e => e.id === idOfBtn);
//     const movedObj = arrPend[index];

//     arrFin.push(movedObj);
//     arrPend.splice(index, 1);

//   }
//   else {
//     listFin.removeChild(movedLi);
//     listPend.appendChild(movedLi);

//     movedBtn.value = '>';
//     const index = arrFin.findIndex(e => e.id === idOfBtn);
//     const movedObj = arrFin[index];
    
//     arrPend.push(movedObj);
//     arrFin.splice(index, 1);
//   }

//   lsSetItem();
// }

// function paintList(text, list) {

//   const li = document.createElement("li");
//   const delBtn = document.createElement("input");
//   const btnToMove = document.createElement("input");
//   li.innerText = text;
//   li.id = arrPend.length;
//   delBtn.type = "button"; 
//   delBtn.value = "X";
//   delBtn.id = li.id;
//   btnToMove.type = "button";
//   btnToMove.value = ">";
//   btnToMove.id = li.id;

//   list.appendChild(li);
//   li.appendChild(delBtn);
//   li.appendChild(btnToMove);
  
//   delBtn.addEventListener("click", deleteHandler);
//   btnToMove.addEventListener("click", moveTo);
// }


// function submitHandler(event) {
//   event.preventDefault();
//   const newText = input.value;
//     //객체 생성
//   const newId = arrPend.length + 1;
//   const newTask = {
//     "id": newId,
//     "text": newText
//   };
//   //생성된 객체 배열에 넣기
//   arrPend.push(newTask);
//   lsSetItem();
//   paintList(newText, listPend);
//   input.value = ''; //clear input
// }


// function getArray() {
//   const existPend = localStorage.getItem(PENDING);
//   const existFin = localStorage.getItem(FINISHED);

//   if(JSON.parse(existPend) !== null){
//     arrPend = JSON.parse(existPend);
//     arrPend.forEach(function(e) {
//       paintList(e.text, listPend);
//     });
//   }
//   if(JSON.parse(existFin) !== null) {
//     arrFin = JSON.parse(existFin);
//     arrFin.forEach(function(element) {
//       paintList(element.text, listFin);
//     });
//   }
// }

// function init() {
//   getArray();
//   lsSetItem();
//   formPend.addEventListener("submit", submitHandler);
// }

// init();



/*
1. 보드 생성
2. 
*/











// const selection = document.querySelector("select");
// const COUNTRY = "country";

// function changeHandler(event) {
//   const currentSel = event.target.value;
//   localStorage.setItem(COUNTRY, currentSel);
 
// }
// function init() {
//   selection.value = localStorage.getItem(COUNTRY);
//   selection.addEventListener("change", changeHandler);
// }

// init();



// //import "./styles.css";

// // You're gonna need this
// // -> the variable 'date' in this code, has current KST. so I didn't use the next variable which was declared by instructor.
// //const NINE_HOURS_MILLISECONDS = 32400000;

// const currentTime = document.querySelector("h3");
// function calGap(xmas, date) {
//   const gap = xmas.getTime() - date.getTime();

//   let gapSec = Math.floor((gap / 1000) % 60);
//   let gapMin = Math.floor((gap / (1000 * 60)) % 60);
//   let gapHour = Math.floor((gap / (1000 * 60 * 60)) % 24);
//   let gapDay = Math.floor(gap / (1000 * 60 * 60 * 24));

//   currentTime.innerHTML = `${gapDay < 10 ? `0${gapDay}` : gapDay}d ${
//     gapHour < 10 ? `0${gapHour}` : gapHour
//   }h ${gapMin < 10 ? `0${gapMin}` : gapMin}m ${
//     gapSec < 10 ? `0${gapSec}` : gapSec
//   }s`;
// }

// function getTime() {
//   // Don't delete this.
//   const xmasDay = new Date("2020-12-24:00:00:00");
//   const date = new Date();

//   calGap(xmasDay, date);
// }

// function init() {
//   setInterval(getTime, 1000);
// }
// init();





// const body = document.querySelector("body");

// function resizeHandler() {
//  let width = window.innerWidth;
//  if(width < 1000) {
//    body.style.backgroundColor = "red";
//  }
//  else if(width > 1400) {

//  }
//  else {

//  }
// }

// window.addEventListener("resize", resizeHandler);



// const header = document.querySelector('header');
// const section = document.querySelector('section');
// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// let request = new XMLHttpRequest(); // XMLHttpRequest 초기화
// // 전체 페이지의 새로고침없이도 URL 로부터 데이터를 받아올 수 있음.
// // 즉, 웹 페이지가 사용자의 사용을 방해하지 않고 페이지의 일부만 업데이트해줌.

// // (HTTP메소드, URL)
// // HTTP메소드 : 네트워크 요청 시 사용
// // URL : 요청을 보낼 곳 지정

// request.open('GET', requestURL); 
// request.responseType = 'json'; // XHR로 하여금 서버가 JSON 데이터 반환, 자바스크립트 객체로서 변환될 것이라는 걸 알게 하기 위해 사용.
// request.send(); // 요청



// request.onload = function() {
//     const superHeroes = request.response;
//     populateHeader(superHeroes);
//     showHeroes(superHeroes);
// }
// // //서버 응답 wait, 처리 관련 섹션
// // request.onload = function() {
// //   const superHeroes = request.response; //요청에 대한 응답 저장 -> 변수 superHeroes는 JSON데이터에 기반한 JS 객체 포함함
// //   populateHeader(superHeroes); //함수 호출해 객체 전달 (<header>를 적절한 데이터로 채움)
// //   showHeroes(superHeroes); // 팀의 각 히어로에 대한 정보카드 생성해 <section>에 넣음
// // }//request 객체에 로드 이벤트가 발생할 경우에만 함수 실행

// // //---------- JSON 데이터를 가져와 JS 객체로 변환 --------------------//


// //헤더 조작
// function populateHeader(jsonObj) {
//       const myH1 = document.createElement('h1');
//       myH1.textContent = jsonObj['squadName'];
//       header.appendChild(myH1);

//       const myPara = document.createElement('p');
//       myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//       header.appendChild(myPara);
// }

// //히어로 정보 카드 생성
// function showHeroes(jsonObj) {
//  const heroes = jsonObj['members'];

//  for(let i = 0; i < heroes.length; i++) {
//    let myArticle = document.createElement('article');
//    let myH2 = document.createElement('h2');
//    let myPara1 = document.createElement('p');
//    let myPara2 = document.createElement('p');
//    let myPara3 = document.createElement('p');
//    let myList = document.createElement('ul');

//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';

//    let superPowers = heroes[i].powers;
//    for(let j = 0; j < superPowers.length; j++) {
//      let listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);

//    section.appendChild(myArticle);
//  }
// }

// // parse(): JSON 문자열을 매개변수로서 수용하고, 일치하는 자바스크립트 객체로서 변환합니다.
// // stringify(): 객체를 매개변수로서 수용하고, JSON 문자열 형태로 변환합니다. 

