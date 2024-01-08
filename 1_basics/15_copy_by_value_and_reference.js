/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive(6가지) 값은 copy by value 이다.
 * 
 * 2) 객체는 copy by reference 이다. 
 */

console.log('\n copy by value');
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += '안유진 입니다.';

console.log(original);
console.log(clone);





console.log('\n copy by reference');
let originalObj = {
    name: '안유진',
    group: '아이브',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj.group = '코드팩토리';

console.log(originalObj);
console.log(cloneObj);





console.log('\n 인스턴스 비교');
console.log(original === clone);
console.log(originalObj === cloneObj);

/**
 * 값과 타입이 같아도 메모리가 서로 다르면 === 는 다른 값으로 인식한다.
 * 
 * 1) primitive type의 경우 === 는 값과 타입이 같은가?
 * 
 * 2) Object의 경우 === 는 같은 인스턴스인가? 
 * 정확히 표현하면 갖고 있는 값이 주소 값이라 
 * 값이 같냐고 묻는 것은 같은 인스턴스인가? 를 묻는 것이다.
 */
// 





/**
 * Spread Operator (주의: 데이터 추가를 하는 순서)
 * 객체를 copy by value 복사하는 방법
 * immutable programming 에서 spread operator가 중요한 이유
 * 
 * Array 뿐만 아니라 객체에서도 사용 가능하다.
 * 
 * 
 */

console.log('\n Spread Operator');

const yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name} 입니다.`;
    }
}

const spreadObj = {
    ...yuJin,
}
console.log(yuJin);
console.log(spreadObj);
console.log(yuJin === spreadObj);


// 복사 뿐만 아니라 데이터를 추가할 때 주의할 점
console.log('\n Spread Operator 주의할 점');
const spreadObj1 = {
    name: '코드팩토리', // 선언해도 다시 아래에서 바뀐다.
    ...yuJin,
}
const spreadObj2 = {
    ...yuJin,
    name: '코드팩토리', // 복사 다음 수정한 것이다.
}
console.log(spreadObj1);
console.log(spreadObj2);

