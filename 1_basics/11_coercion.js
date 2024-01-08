/**
 * 타입 변환(Type Conversion)
 * 
 * 명시적, 암묵적
 */


// 명시적
let age = 32;
let stringAge = age.toString();


// 암묵적
// 가능하다는거지, 쓰라는 얘기는 아니다.
let test = age + '';
console.log(typeof test, test);

console.log(typeof '98' + 2, '98' + 2);
console.log(typeof ('98' + 2), '98' + 2);
console.log(typeof 98 + '2', 98 + '2');
console.log(typeof (98 + '2'), 98 + '2');
console.log(typeof '98' * 2, '98' * 2);
console.log(typeof ('98' * 2), '98' * 2);
console.log('\n');



// 명시적으로 사용하라!!!
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log()



// 숫자 타입으로 변환 (+, parseInt, parseFloat)
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseInt('0.99'), parseInt('0.99'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');
console.log()



// Boolean 타입으로 변환
// String 안에 값이 있으면 true이다.
console.log(!'x');
console.log(!!'x');
console.log(!!'');
console.log();

console.log(!0); // 이건 false 가 0이어서 반대인 true가 나온다.
console.log(!'0'); // 이건 string 글자가 있어서 반대인 false가 나온다.
console.log();

console.log(!undefined);
console.log(!!undefined);
console.log(!null);
console.log(!!null);
console.log();

 // object는 값이 있던 었던 true가 나온다.
console.log(!!{});
console.log(!![]);

console.log();



/**
 * JS에서의 false
 * 아무 글자도 없는 String
 * 값이 없는 경우 (object 제외)
 * 0
 */



