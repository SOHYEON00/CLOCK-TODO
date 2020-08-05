# Clock - Todo - TIL

## ADD ELEMENT - JS
- .createElement()

    Element.createElement('h1');
    //<h1></h1> 

- .appendChild()
    
    document.appendChild('button');
    //button생성
    
- 차이를 잘 구분하자.
    var p = document.createElement("p");
    document.body.appendChild(p);  
    // 새로운 단락 요소를 생성하고 문서에 있는 바디 요소의 끝에 붙임
    
* input clear : using target.value = ''; (simple!)

###### 공부하다가 생긴 질문들
1. 함수를 어느 정도로 세분화하는 게 맞는 걸까? 너무 세분화하는 것도 오히려 낭비이지 않을까.
2. 함수를 세분화할 때 파라미터는 있는게 좋을까? 굳이 필요없다면 오히려 localStorage에서 가져오는 게 더 맞을까?


# CONCEPTS OF JS

### 1.1  왜 js를 웹 프론트엔드에서 사용하는가?

- js is only one thing to code for web front-end
- js가 좋은 이유 : no fragmentation
- js가 별로인 이유: not changed, not updated, not replaced to what we want —> 웹 자체가 매우 빠르게 변화하기에 js도 엄청 빠르게 바뀌고 더 큰 영향력을 가짐(더 많은 걸 할 수 있음)

    ex) 웹, 웹 앱, 모바일 앱, native app, 비디오 게임, 데스크톱 앱 . 

- 모든 컴퓨터에는 브라우저가 있음. 브라우저는 js로 돌아감. 즉, 모든 컴퓨터에는 js가 이미 깔려있음.

### 1.2

- js에 ECMAScript가 있는데, Specification( 안내책자 같은 체계 매뉴얼) 의 명칭같은 것임.

    ES5 === ECMAScrpit, ES6 === ECMAScript6

    다 그냥 specification의 업데이트 버전.

- 브라우저는 Specification을 받아서 각자의 방식으로 똑같은 결과를 냄.
- 바닐라JS : JS의 한 종류로, NO Library
