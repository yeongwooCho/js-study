/**
 * Prototype
 * 상속 체인의 가장 중요한 요소
 */


const testObj = {};

// __proto__ : 모든 객체에 존재하는 프로퍼티이다.
// 상속에서 부모 클래스에 해당하는 값이다.
console.log(testObj.__proto__);


function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true,
});

console.log('\n');
const yuJin = new IdolModel('안유진', 2003);

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype.constructor === IdolModel.prototype.constructor);
console.log(yuJin.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true
console.log(IdolModel.__proto__ === Function.prototype); // true

console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype);  // true



/**
 * yuJin의 부모는 IdolModel
 * testObj의 부모는 Object
 * IdolModel 의 부모는 Function
 * Function.prototype의 부모는 Object
 * 
 * 
 * IdolModel.prototype 의 최상위 객체는 Object.prototype이 된다.
 */



/**
 * 정리하면 표의 모든 것들의 __proto__ 는 무언가의 prototype을 레퍼런스 하고 있다.
 * 
 * 우리가 객체를 선언하면 공통적으로 사용할 수 있는 method가 존재했다.
 * 
 * __proto__는 부모의 상속 체인을 의미한다.
 * yuJin 객체는 IdolModel.protytpe 을 상속 받았다.
 * IdolModel.prototype은 Object.prototype을 상속 받았다.
 * 
 * 이를 Prototype끼리 연결이 되어있다고 해서 Prototype Chain 이라고 부른다.
 */

console.log(yuJin.toString());
console.log(Object.prototype.toString());
console.log(IdolModel.prototype.prototype);





/** 
 * 이걸 알면 뭐가 좋음? 
*/
console.log('\n IdolModel2');

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name} 이 인사를 합니다`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false ..?
// yuJin2 와 wonYoung2 는 name,year 가 서로 다른 객체이며 다른 메모리 공간을 차지 한다.

// hasOwnProperty: property가 상속을 받은 것인지 자기 고유의 것인지 체크 가능
// true: 고유의 것, false: 상속 받은 것
console.log(yuJin2.hasOwnProperty('sayHello')); // true: 고유의 것
console.log(wonYoung2.hasOwnProperty('sayHello')); // true: 고유의 것


console.log('\n IdolModel3');
// 이 sayHello를 공유를 하고 있으면 메모리 공간을 덜 차지한다. 그래서 효율적이다.
function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function() {
    return `${this.name} 이 인사를 합니다`;
}
const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);
console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true: 동일한 것을 사용한다.
// 메모리를 하나만 사용해서 리소스 소모가 적다.
console.log(yuJin3.hasOwnProperty('sayHello')); // false: 상속 받은 것이다.
console.log(wonYoung3.hasOwnProperty('sayHello')); // false: 상속 받은 것이다.






/**
 * static 함수는 어떻게 하는가?
 * 
 * 모든 함수는 객체이다.
 */
console.log('\n static IdolModel4');
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel4.sayStaticHello = function(){
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel4.sayStaticHello());





/**
 * Overriding
 */
function IdolModel5(name, year) {
    this.name = name;
    this.year = year;

    // 이름만 유지한채로 그대로 선언하면 된다.
    this.sayHello = function(){
        return '안녕하세요 저는 인스턴스 메서드 입니다.';
    }
}

IdolModel5.prototype.sayHello = function(){
    return '안녕하세요 저는 prototype 메서드 입니다.';
}

const yuJin5 = new IdolModel5('안유진', 2003);

// 프로퍼티 쉐도잉 - class의 override 와 똑같다.
console.log(yuJin5.sayHello());





/**
 * 여기서부터는 쌉집중하셈. 일반적인 OOP에서는 존재하지 않는 기능이 있다.
 * JS OOP는 전통적인 OOP를 따르지 않는 경우가 많다.
 * 
 * prototype, __proto__ 값을 변경할 수 있다.... 와우....
 * 인스턴스를 생성하고 난 다음에도 할 수 있다.
 * 일반적인 개발자들이 깜짝 놀랄만하다. 헷갈릴까봐 많이 사용하지는 않지만 가능한 것을 보면
 * 이 Prototype Chainning에 대해 더 잘 이해할 수 있다.
 */






/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
console.log('\n 인스턴스의 __proto__ 변경');

// 함수는 똑같은 이름으로 두번 선언하면 덮어쓴다.
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

// 실제로은 showHidden으로 숨겨진 값을 더 볼 수 있다.
console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
// gaEul.__proto__ (부모)는 IdolModel.prototype이다.

console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true
// Object.getPrototypeOf(A객체) 는 A객체.__proto__ 를 가져온다.

console.log(gaEul.sayHello());
console.log(ray.dance());

// ray.sayHello() 를 사용하기 위해 FemaleIdolModel는 IdolModel의 상속을 받고 싶다.
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); // 가능하다.
// 런타임에서 객체의 부모를 바꿔버렸다.

console.log(ray.constructor === FemaleIdolModel); // false: 바꼈다.
console.log(ray.constructor === IdolModel); // true
// 모든 prototype 에는 constructor 가 존재한다.
// 모든 constructor는 함수를 가리키는 Circular reference 가 된다.
// ray 의 부모는 prototype이고 constructor를 갖는다.

// 원래는 생성자 함수를 통해서 객체를 생성하면 생성자 함수가 객체의 constructor가 된다.
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true





console.log('\n 함수의 prototype 변경');
FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2003);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(Object.getPrototypeOf(eSeo) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
console.log(eSeo.constructor); // [Function: IdolModel]





