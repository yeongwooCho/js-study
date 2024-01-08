/**
 * Static keyword
 * 갹체에 귀속되지 않고 클래스에 귀속된다.
 */

class IdolModelStaticTest {
    name;
    year;

    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {
        return '아이브';
    }
}

console.log(IdolModelStaticTest.groupName);
console.log(IdolModelStaticTest.returnGroupName());





/**
 * 어디에 사용하는가?
 * factory constructor
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(obj) {
        return new IdolModel(
            obj.name,
            obj.year,
        );
    }

    static fromList(list) {
        return new IdolModel(
            list.name,
            list.year,
        )
    }
}

const yuJinObj = new IdolModel('안유진', 2004);
const yuJinFactoryObj = IdolModel.fromObject(yuJinObj);
const yuJinListObj = IdolModel.fromObject(['안유진', 2004]);

console.log(yuJinObj);
console.log(yuJinFactoryObj);
console.log(yuJinListObj);

console.log(yuJinObj === yuJinFactoryObj);
console.log(yuJinObj === yuJinListObj);
console.log(yuJinListObj === yuJinFactoryObj);