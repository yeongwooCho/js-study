/**
 * Closure
 * A closure is ths combination of a function and the lexical
 * environment within which that function was declared.
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * "상위 함수보다 하위함수가 더 오래 살아있는 경우를 closure 라고 한다."
 */

function getNumber() {
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(getNumber());

/**
 * getNumber() 을 실행하면 innerGetNumber() 이 실행이 된다.
 * JS lexical scope 의 개념에 따라 선언문에 존재하는 number을 가져오게 된다.
 * 
 * 그런데 이 경우는 하위 함수가 상위 함수보다 오래 살아있는 경우가 아니다.
 * call stack에서 나중에 쌓이고 먼저 반환된다.
 */

function getNumber() {
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());









/**
 * 그럼 클로져는 어디서 사용할까?
 * 
 * 1) 데이터 캐싱 - 복잡하고 오래 걸리는 작업인데 반복적으로 가져올때
 * 2) 데이터 캐싱 - 반복적으로 특정 값을 변환해야 할때
 * 3) 정보 은닉 - private(#) 변수 선언이 생긴지 얼마 안됐다.
 */




/**
 * 1) 데이터 캐싱: 복잡하고 오래 걸리는 작업인데 반복적으로 가져올때
 */

// 복잡하고 오래 걸리는 작업인데 반복적으로 가져와야 한다면 caching을 사용한다.
function beforeCacheFunction(newNumber) {
    
    var number = 10 * 10; // 매우 오래걸리는 작업이라 가정

    return number * newNumber;
}

// 게산을 할때마다 10*10 을 진행해야 한다.
console.log(beforeCacheFunction(10));



// cache
console.log('\n cache');

function cacheFunction() {
    
    var number = 10 * 10; // 매우 오래걸리는 작업이라 가정

    function innerCacheFunction(newNumber){
        return number * newNumber;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction();
// Closure 에서 number 값을 기억을 하고 있어서 
// number 에 대한 계산은 딱 1번만 진행한다.
console.log(runner2(10));
console.log(runner2(20));
console.log(runner2(30));





/**
 * 2) 데이터 캐싱 - 반복적으로 특정 값을 변환해야 할때
 */


function cacheFunction2(){
    var number = 99;

    function increament(){
        number ++;
        return number;
    }

    return increament;
}

const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102

// 우리는 함수가 끝나면 함수 안의 number 따로 반환받지 않으면 기억하지 못한다.
// 하지만 Closure는 함수 내부의 변수를 기억하고 있다.




/**
 * 3) 정보 은닉 - private(#) 변수 선언이 생긴지 얼마 안됐다.
 */

// private 변수를 사용하는 옛날 방식
function Idol(name, year) {
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요. 저는 ${this.name}:${_year} 입니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); // undefined
// this키워드에 넣은 값이 아니기에 yuJin으로 접근이 불가능하다.
// 생성자 함수 안에 선언한 새로운 함수를 통해서 갖고 올 수 있다.
// 과거에는 이렇게 private 변수를 활용했다.