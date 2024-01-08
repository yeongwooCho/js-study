/**
 * Function(함수)
 * parameter: 함수에서 입력받는 값
 * argument: 실제 입력하는 값
 */

function addition(x, y) {
    return x + y;
}

function multiply(x = 3, y) {
    // default value parameter는 뒤에서 부터 안 넣으면 NaN
    // 원리는 C랑 같구만.
    return x * y
}

console.log(addition(2, 3));
console.log(multiply(2, 3));
console.log(multiply(4));


// 이렇게 선언도 가능, arguments
const multiply0 = function(x, y) {
    // [Arguments] { '0': 10, '1': 23 }
    console.log(arguments);
    return x * y; 
}
console.log(multiply0(10,23));
console.log();




// Array Function
const multiply1 = (x, y) => {
    return x * y; 
}

// body 없애도 됨
const multiply2 = (x, y) => x * y;

// parameter 1개는 괄호 제외 가능
const multiply3 = x => x * 2;

// 1개인 경우를 여러개 사용
const multiply4 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply4(2)(3)(4));
console.log(multiply4(2).toString());
// y => z => `x: ${x}, y: ${y}, z: ${z}` 를 반환함.

function multiply5(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}, y: ${y}, z: ${z}`;
        }
    }
}
console.log(multiply5(2)(3)(4));
console.log(multiply5(2).toString());
console.log();





/**
 * arguments, ...
 * 무한하게 parameter를 받는다.
 */
const multiplyAll = function(...arguments) {
    // Object.values(arguments) == [ 2, 3, 4 ]
    return Object.values(arguments).reduce((a,b) => a * b, 1);
}
console.log(typeof multiplyAll(2,3,4));
console.log(multiplyAll(3,4,5));
console.log(multiplyAll(3,4,5,6,7,8));





/**
 * 함수 선언 방법 =>
 * 선언해두고 나중에 쓰려면 
 * 접근할 메모리 주소 or 변수이름이 필요하다.
 * 그게 아니면 바로 실행 해야 함.
 * 
 * 1. 선언 시 이름 붙임. 
 * 2. 바로 변수에 넣으면 이름 불필요
 * 3. 선언과 동시에 바로 호출 (function(){})()
 */

function name1(x) {
    return x;
}
const name2 = function(x) {
    return x;
}
const name3 = (x) => x;

// 즉시 실행 함수
// immediately invoked function
(function(x, y){
    console.log(`${x * y}입니다.`);
})(3, 4);
console.log();


console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
// function 은 Object 의 자손이다.
