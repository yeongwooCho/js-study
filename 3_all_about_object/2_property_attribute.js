/**
 * Property Attribute
 * 
 * 프로퍼티의 종류
 * 1) data property - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 
 * 2) access property - 자체적으로 값을 갖고 있지 않지만 
 * 다른 값을 가져오거나 설정할때 호출되는 함수로 구성된 프로퍼티
 * 예) getter, setter 두개
 * 
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

// (객체, 가져오고 싶은 키 값)
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
// { 
//     value: '안유진', 
//     writable: true, 
//     enumerable: true, 
//     configurable: true 
// };

// 모든 property에 대한 속성을 파악 가능
console.log(Object.getOwnPropertyDescriptors(yuJin));


/**
 * 1) value - 실제 프로퍼티의 값
 * 
 * 2) writable - 값을 수정 할 수 있는지 여부. 
 * false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 
 * 3) enumerable - 열거가 가능한지 여부이다.
 * for...in 룹 등을 사용 할 수 있으면 true를 반환한다.
 * 
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 * false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
 * 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */




console.log()
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    },
};

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
// {
//     get: [Function: get age],
//     set: [Function: set age],
//     enumerable: true,
//     configurable: true
// }

/**
 * access property
 * - value attribute 가 없음
 * - get, set이 있음
 */






/**
 * Property Attribute 를 재 정의 하는 방법
 * 
 * Object.defineProperty()
 */
console.log('\n Property Attribute 를 재 정의 하는 방법');



/**
 * writable: 값 쓰기가 가능한
 * 
 * 2) writable - 값을 수정 할 수 있는지 여부. 
 * false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * -> 에러가 발생하지 않고 그냥 안 바뀐다.
 */
console.log('\n writable');

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));



// 이미 선언 된 property의 경우 어떻게 진행? == 똑같이 진행!
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));



// writable: false 일때 값을 바꾸면 에러남? No, 그냥 안바뀜
yuJin2.height = 180;
console.log(yuJin2);





/**
 * enumerable: 열거할 수 있는
 * 
 * 3) enumerable - 열거가 가능한지 여부이다.
 * for...in 룹 등을 사용 할 수 있으면 true를 반환한다.
 */
console.log('\n enumerable');

// 열거 기능이 true이기 떄문에 가능하다.
console.log(Object.keys(yuJin2));
for(let key in yuJin2) {
    console.log(key);
}

// enumerable: false
Object.defineProperty(yuJin2, 'name', {
    enumerable: false,
})
console.log(Object.keys(yuJin2));
for(let key in yuJin2) {
    console.log(key);
}






/**
 * configurable
 * 
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 * false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 
 * -> 이때 에러 발생
 * 
 * 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */
console.log('\n configurable');

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log(Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
}));
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// error이 발생함. configurable가 false이기 떄문에.
// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// })

/**
 * 예외)
 * configurable 이 false 라도 writable가 true 이면
 * 
 * - value 를 변경할 수 있다.
 * 
 * - writable 을 true 이면 false로 변경은 가능
 * but false인데 true로 변경은 불가 
 */
console.log(Object.defineProperty(yuJin2, 'height', {
    value: 172,
}));
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));