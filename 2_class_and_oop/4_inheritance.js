/**
 * Inheritance
 * 
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    // FemaleIdolModel property가 없어서 
    // super constructor 없음
    dance() {
        return `${this.name} 이 춤을 춥니다.`;
    };
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `${this.name} 이 노래를 부릅니다.`;
    };
}

const qwer = new IdolModel('코드팩토리', 1992);
const asdf = new FemaleIdolModel('안유진', 2003);
const zxcv = new MaleIdolModel('지민', 1999);

console.log(qwer instanceof IdolModel);  // true
console.log(asdf instanceof IdolModel);  // true
console.log(zxcv instanceof IdolModel);  // true

console.log(qwer instanceof FemaleIdolModel);  // false
console.log(asdf instanceof FemaleIdolModel);  // true
console.log(zxcv instanceof FemaleIdolModel);  // false

console.log(qwer instanceof MaleIdolModel);  // false
console.log(asdf instanceof MaleIdolModel);  // false
console.log(zxcv instanceof MaleIdolModel);  // true


