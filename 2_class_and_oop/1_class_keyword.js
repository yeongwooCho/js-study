/**
 * Class Keyworld
 */

class IdolModel {
    name;
    // year; // 생성자에서 값 할당 한다면 선언 안해도 됨. 근데 하자
    group = '아이브';
    #age; // private, 인스턴스 출력 시 값이 안보임, (ES7부터 사용가능)

    // constructor
    constructor(name, year, age) {
        this.name = name;
        this.year = year;
        this.age = age;
    }

    // method 는 function 키워드를 사용하지 않음
    // function sayName() { }
    sayName () {
        return `${this.name} 입니다.`
    }

    // 1) 데이터를 가공해서 새로운 데이터를 반환
    // 2) private 값 반환
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    // (1)보통 바꾸고 싶은 변수 이름과 똑같이 사용한다.
    // (2)필수 값: 반드시 값 하나는 받아야 한다. set 이니깐!!
    set name(name) {
        this.name = name;
    }

    get age() {
        return this.#age; // #age 주의 하셈
    }

    set age(age) {
        this.age = age;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.gender); // undefined
console.log(yuJin.sayName());

console.log(typeof IdolModel); // function
console.log(typeof yuJin); // object

console.log(yuJin.nameAndYear); // get: 변수처럼 선언
yuJin.name = '장원영'; // set: property에 넣는 것처럼 사용, 많이 사용X
console.log(yuJin.name); // private name이 될때를 생각하셈.

yujin.age = 30;
console.log(yujin.name);