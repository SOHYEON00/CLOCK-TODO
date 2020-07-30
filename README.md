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
