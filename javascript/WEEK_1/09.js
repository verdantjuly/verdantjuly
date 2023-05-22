// 스코프(범위), 전역변수, 지역변수, 화살표함수



function printX() {
    let x = 10; //지역변수
    console.log(x);
}

console.log(x);
printX();