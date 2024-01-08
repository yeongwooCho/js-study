/**
 * All about objects
 * 우리가 기존 알고있는 object 와는 차이점이 존재한다.
 * 
 * 객체를 선언할때 사용할 수 있는 방법들.
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성 -> 생성자 함수라고 부름
 * 
 * 이 3가지를 알아보고 차이점을 알아보자.
 */



// 1)
const yuJin = {
    name: '안유진',
    year: 2003,
}



// 2)
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const yuJin2 = new IdolModel('안유진', 2003);



// 3) function을 통해 객체를 생성 - 생성자 함수
// 클래스와 같이 property를 선언 안해도 된다고 생각하면 됨
// 주의: this 키워드로 property를 할당해준 경우에만 new 키워드 사용가능
// 앞글자 대문자 쓰기로 약속
// class 이전에 있던 방법이라 오래된 코드에서 자주 보인다.

function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

const yuJin3 = new IdolFunction('안유진', 2003);



console.log(yuJin);
console.log(yuJin2);
console.log(yuJin3);