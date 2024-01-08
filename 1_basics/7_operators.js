/**
 * Operators
 * 
 * 산술연산자 (+, -, *, /, %)
 * 증가와 감소 (++, --)
 * 할당 연산자, 연산자에 =를 붙이면 "연산 후 할당"이 된다 (=, +=, -=)
 * 비교 연산자 (<, <=, >, >=)
 * 논리 연산자 (&&, ||)
 * * 삼항 조건 연산자 (10 > 0 ? '트루' :'펄스')
 */



/**
 * 연산자의 위치
 */
let result1 = 1;
let result2 = result1++; // 할당 후 증가
console.log(result1, result2);

let result3 = 1;
let result4 = ++result3; // 증가 후 할당, 이거 하지 마셈
console.log(result3, result4);
console.log('\n');


/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 * Number type이 된다.
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample);

let sample1 = '99a';
console.log(+sample1); // NaN: Not a Number
// NaN은 잘못된 입력으로 인해 계산을 할 수 없음을 나타내는 기호
console.log(typeof +sample1); // number

let sample2 = true;
console.log(+sample2); // 1
console.log(typeof +sample2);
console.log('\n');



/**
 * 값의 비교 ==, !=
 * 값과 타입의 비교 ===, !==, 실무에서는 3개만 사용한다.
 */
console.log(5 == 5);  //
console.log(5 == '5');
console.log(0 == '');
console.log(0 == '0');
console.log(true == 1);
console.log(true == '1');
console.log(false == 0);
console.log('----');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(0 === '0');
console.log(true === 1);
console.log(true !== '1');
console.log(false === 0);
console.log('\n');



/**
 * 단축평가 (short circuit evaluation)
 * 실무에서 많이 사용한다. 난해하지만 외워라.
 * 
 * && 를 사용했을때 좌측이 true면 우측 값을 반환
 * && 를 사용했을때 좌측이 false면 좌측 값을 반환
 * || 를 사용했을때 좌측이 true면 좌측 값을 반환
 * || 를 사용했을때 좌측이 false면 우측 값을 반환
 */

console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');

// 장점은 연속적으로 조건을 확인하고 default 값을 지정할 수 있다.
console.log(false || false || '아이브');
console.log(true && true && '아이브');
console.log(true && true && false && '아이브');
console.log('\n');



/**
 * 지수 연산자 (**)
 */
console.log(2 ** 2);
console.log(10 ** 3);



/**
 * null 연산자 (??)
 * +할당 연잔사 (??=)
 */

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);
name = name ?? '하이하이';
console.log(name);

let name2;
name2 ??= '하이';
console.log(name2);
console.log('\n');








