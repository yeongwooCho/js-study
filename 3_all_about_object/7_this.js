/**
 * this
 * 
 * JS의 this는 좀 다르다.
 * this 키워드가 가리키는 것이 계속 바뀐다.
 * 
 * JS 는 Lexical Scope를 사용하기 떄문에 
 * 함수의 상위 스코프가 정의 시점에 평가된다.
 * 
 * 별*****
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function(){
    return this;
}

console.log(testFunction());
console.log(testFunction() === global); // true

// 일반 함수를 실행하면 this 키워드가 global object에 매핑이 된다.



console.log(`\n`);
const yuJin = {
    name: '안유진',
    year: 2003,
    sayHello: function() {
        // 여기 this는 현재 객체를 의미한다.
        return `안녕하세요 저는 ${this.name} 입니다.`;
    }
}
console.log(yuJin.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        // 여기 this는 현재 객체를 의미한다.
        return `안녕하세요 저는 ${this.name} 입니다.`;
    };
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function() {
    // this는 이 함수를 실행하는 객체를 의미힌다. 여기까지는 똑같다.
    return `${this.name}이 춤을 춥니다.`;
}

console.log(yuJin2.dance());


Person.prototype.sing = function() {
    function sing2(){
        return `${this.name}이 노래를 부릅니다.`;
    }
    return sing2();
}

console.log(yuJin2.sing()); // undefined이 노래를 부릅니다.

/**
 * 객체의 method로 가장 상위 레벨에 함수를 선언하면 
 * this는 자동으로 실행하는 대상 객체로 매핑이 된다.
 * 
 * 그러나 만약 그 외의 위치에서 함수를 선언하게 되면 
 * 함수의 this는 무조건 global object에 매핑된다.
 */

/**
 * this 키워드가 어떤 것을 가리키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수를 호출할땐 this가 최상위 객체(global or window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을떈 객체를 가리킨다.
 * 
 * 2), 3) 이 아닌 경우에는 global, window를 가리킨다.
 */



/**
 * 예상하거나 원하는 this 값으로 this를 매핑하는 방법 3가지
 * 
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

console.log('\n 예상하거나 원하는 this 값으로 this를 매핑하는 방법 3가지');
function returnName(){
    return this.name;
}

console.log(returnName()); // global.name 을 선언한 적 없다.

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3)); // 안유진
// returnName 을 yujin3 에 바인딩해서 call 하겠다.

console.log(returnName.apply(yuJin3)); // 안유진

/**
 * 1) call: 컴마를 기반으로 argument를 순서대로 넘겨준다.
 * 2) apply: argument를 리스트로 입력해야 한다.
 */

function multiply(x, y, z) {
    return `${this.name} / 결과 값 ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));
// 여기는 call, apply를 하는 순간 바로 계산이 된다.



/**
 * bind(): this를 바인딩만 하고 나중에 출력할 수 있다.
 * 함수로 만들어 버린다.
 */
const laterFunc = multiply.bind(yuJin3, 3,4,5);
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc());


/**
 * 정리하면 call, apply, bind는 모두 
 * 함수 내의 this 키워드가 무엇을 가리킬지(바인딩 될지) 지정할 수 있다.
 * 
 * call은 콤마기준
 * apply는 리스트로 전달
 * 또 이 두가지는 바로 계산이 된다.
 * 
 * bind는 바로 실행이 되지 않고 실행을 할 수 있는 function으로 만든다.
 * 호출하는 순간 계산이 된다.
 */