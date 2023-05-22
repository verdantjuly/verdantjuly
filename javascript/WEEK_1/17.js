// for, while => ~동안 : 반복문

// for (초기값;조건식;증감식) {

// }

// i라는 변수는 0부터 시작할 거야
// i라는 변수가 10에 도달하기 전까지 계속할 거야
// // i라는 변수는 한 사이클이 돌고나면 1을 더할 거야.
// for(let i = 0; i<10;i++){
//     console.log("for문 돌아가고 있음"+i);
// }

// 배열과 for문은 짝꿍이다.
// const arr = ["one", "two", "three", "four", "five"]
// for (let i = 0; i<arr.length; i++){
//     console.log(i)
//     console.log(arr[i])
// }

// 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시

let array = []
for(i=0;i<11;i++){
    if(i%2==0 && i>=2){
        array.push(i);       
    }
}
console.log(array)

// for ~in 문
// 객체의 속성을 출력하는 문법
let person = {
    name: 'John',
    age: 30,
    gender:'male'
}

for(let key in person){
    console.log(key + ":" + person[key])
}