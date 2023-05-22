// 2. 문자 : string (문자열 = 문자의 나열)
//  '  ' = "  "

let str = "Hello World";
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열 길이 확인하기 
// console.log(str.length);

// 2-2. 문자열 결합하기
let str1 = "Hello";
let str2 = "world!";
let result = str1.concat(str2);
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5))
console.log(str3.slice(7, 12))

// 2-4. 문자열 검색
// 찾는 문자열이 시작되는 위치를 반환한다.
let str4 = "Hello, World!";
console.log(str4.search("World"));

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result01 = str5.replace("World","Javascript");
console.log(result01);

// 2-6. 문자열 분할
// 문자열을 잘라서 각각 배열로 넣음
let str6 = "apple, bananam, kiwi";
let result02 = str6.split(",");
console.log(result02);

