// 주석 : JS엔진이 해석하지 않는 부분

// 변수, 상수
// 변수 : 메모리에 저장한다. 읽어들여서 재사용한다.

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수에 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var : 재선언 O, 재할당 O
var myVar = "Hello World";
console.log(myVar);

// 2. let : 재선언 X, 재할당 O
let myLet = "Hello World1";
console.log(myLet);

// 3. const : 재선언 X, 재할당 X
var myConst = "Hello World2";
console.log(myConst);