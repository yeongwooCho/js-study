/**
 * Hoisting
 */

console.log(name); // 이것만 적으면 에러
var name = '코드팩토리'; // 이까지 적으면 에러
console.log(name); // 이까지 적으면 undefined
/**
 * 위 코드는 아래와 같이 실행되었다. 이게 hoisting 이다.
 * var name = '코드팩토리';
 * console.log(name);
 * name = '코드팩토리';
 * console.log(name);
 */
 

/**
 * Hoisting 정의 -> 실행 컨텍스트에서 자세히 배움
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 실제로 이동하지는 않지만, 이동하는 것처럼 실행되는 현상이다.
 * 
 * let, const 또한 Hoisting 호이스팅이 발생한다.
 * 아래의 주석의 코드를 실행시키면 yuJin 변수가 선언되기전 출력하는 것이기에
 * 정의 되지 않은 것으로 나와야 하는데 초기화 전 접근하는 것으로 나온다.
 * But 대처는 가능하다
 */

// // ReferenceError: Cannot access 'yuJin' before initialization
// console.log(yuJin); 
// let yuJin = '안유진';

// console.log(name);
// var name = '코드팩토리';


/**
 * let과 const를 var대신 사용하는 이유 중 하나이다.
 * Hoisting 이 발생해도 이를 대처하는 기능이 있다.
 * 
 * 나중에 실행 컨텍스트를 배울때 
 * 정확히 이러한 현상이 이러나는 이유를 배울 것이다.
 */




