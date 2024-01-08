/**
 * super: 부모 클래스
 * override: 상속 받는 클래스가 재정의 하는 것
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요. ${this.name} 입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    part; // 노래, 춤 등

    constructor(name, year, part) {
        super(name, year);
        this.part = part;
    }

    sayHello() {
        return `${super.sayHello()} 저는 ${this.part}입니다.`
        
        // 원래 잘 짜여진 객체지행 프로그래밍 언어에서는 아래가 정답이다.
        // return `안녕하세요 ${super.name}입니다. 저는 ${this.part}입니다.`
        // JS 에서는 다음이 정답이다.
        // return `안녕하세요 ${this.name}입니다. 저는 ${this.part}입니다.`
    }
}




const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
console.log(wonYoung.sayHello());

const yuJin = new FemaleIdolModel('안유진', 2003, '춤');
console.log(yuJin);
console.log(yuJin.sayHello());


