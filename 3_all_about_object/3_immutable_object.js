/**
 * Immutable Object
 * 
 */

const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year - new Date().getFullYear();
    },
};

console.log(yuJin);



/**
 * Extensible: 확장 가능한
 */
console.log('\n Extensible');

console.log(Object.isExtensible(yuJin));
yuJin.position = 'vocal';
console.log(yuJin);
 
Object.preventExtensions(yuJin); // extension 막기
console.log(Object.isExtensible(yuJin));
yuJin.position = 'vocal1'; // 값 변경은 가능
yuJin.position2 = 'vocal2'; // key 확장은 불가능
console.log(yuJin);

delete yuJin['position']; // 삭제는 쌉가능
console.log(yuJin);

console.log('-------------확인')
console.log(Object.getOwnPropertyDescriptors(yuJin));
console.log(Object.isExtensible(yuJin));
console.log(Object.isSealed(yuJin));
console.log(Object.isFrozen(yuJin));





/**
 * Seal: 봉인하다. 편지 봉투 막을때 사용
 * 
 * seal 을 하는 것은 모든 property에 대해서 
 * configurable: false 로 만드는 작업이다.
 * 
 * 추가 및 삭제 불가능 -> 에러 발생 안함
 * 업데이트는 가능
 */
console.log('\n Seal');

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year - new Date().getFullYear();
    },
};

console.log(yuJin2);


console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);  // 객체 봉인하기
console.log(Object.isSealed(yuJin2));


yuJin2.groupName = '아이브';
yuJin2.name = '장원영';
delete yuJin2.name;
console.log(yuJin2); // 추가 및 삭제 


// property attribute 수정해보기

Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('-------------확인')
console.log(Object.getOwnPropertyDescriptors(yuJin2));
console.log(Object.isExtensible(yuJin2));
console.log(Object.isSealed(yuJin2));
console.log(Object.isFrozen(yuJin2));






/**
 * Freezed : 몹시 추운, 동결, 얼어버린
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

console.log('\n Freezed');

const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year - new Date().getFullYear();
    },
};

console.log(yuJin3);

console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3.groupName = '아이브';
yuJin3.name = '장원영';
delete yuJin3.name;
console.log(yuJin3); // 추가 및 삭제

console.log('-------------확인')
console.log(Object.getOwnPropertyDescriptors(yuJin3));
console.log(Object.isExtensible(yuJin3));
console.log(Object.isSealed(yuJin3));
console.log(Object.isFrozen(yuJin3));






/**
 * 객체 안에 객체가 있을때 상위 객체를 freezed 한다면?
 * 
 * 내부에 있는 객체는 freezed되지 않는다. 
 * seal, preventExtension도 마찬가지
 */
console.log('\n Freezed 심화');
const yuJin4 = {
    name: '안유진',
    year: 2003,

    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};

Object.freeze(yuJin4);
console.log(Object.getOwnPropertyDescriptors(yuJin4));
console.log(Object.getOwnPropertyDescriptor(yuJin4, 'wonYoung'));

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4.wonYoung));