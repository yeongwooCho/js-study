
/**
 * 데이터 타입
 * 
 * 여섯개의 Primitive Type과 한개의 오브젝트 타입이 있다.
 * 
 * Number, String, Boolean, undefined, null, Symbol
 * Object(객체) - 내부에 Function, Array, Object
 */

const pi = 3.14;
console.log(typeof pi);
const infinity = Infinity;
const uninfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof uninfinity);

const codefactory1 = "'코드팩토리' ㅎㅇ";
const codefactory2 = '"코드팩토리" ㅎㅇ';
console.log(codefactory1);
console.log(codefactory2);
console.log(`\n`);
const isTrue = true;
const isFalse = false;



/** 
 * Template Literal
 * \n, \t, \\, \', \", 
 * `(원화 표시): 개행 필요없이 계속 이어서 출력 가능
 */
const yeong = `영우여
우우영우웅우/// $ㅁㄴㅇ리ㅏㅓ;/n`;
console.log(yeong);
console.log(yeong + '하이하이');
console.log('${yeong}');
console.log(`${yeong} 하이하이`);
console.log(`\n`);



/**
 * undifined
 * 사용자가 직접 값을 초기화 하지 알았을때 지정되는 값;
 * 
 * null
 * 마찬가지로 값이 없다는 뜻이나 JS에서는 
 * 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 * 
 * null이 아니라 object 가 나오는 것은 개발자도 인정한 버그이다. 
 * 바꾸지 않는 이유는 null type이 object type으로 작성된 
 * 레거시 코드가 많기 때문에 변경이 되지 않고 있다.
 */
let noInit1;
let noInit2 = undefined;

console.log(noInit1);  // undefined
console.log(typeof noInit1);  // undefined
console.log(noInit2);  // undefined
console.log(typeof noInit2);  // undefined
console.log(`\n`);

let init = null;
console.log(init);  // null
console.log(typeof init);  // object
console.log(`\n`);


/**
 * Symbol type
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

// 값이 같아도 유일무이한 값이 된다.
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); 
console.log(`\n`);



/**
 * Object 타입
 * 
 * 1. Map: key value
 * 
 * 2. Array 타입
 * 값을 리스트로 나열 할 수 있는 타입
 * index를 이용
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}
console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary['red']);
console.log(dictionary.red);
console.log(typeof dictionary.red);
console.log(dictionary.keys);
console.log(typeof dictionary.keys);
console.log(`\n`);

const iveMembersArray = [
    'asd1',
    'asd2',
    'asd3',
    'asd4',
    'asd5',
]



/**
 * static typing
 * 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * 
 * dynamic typing 
 * 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * js는 변수 선언 시 let, const 만 사용한다.
 * 타입 추론을 하는 dynamic typing에 해당한다.
 */

