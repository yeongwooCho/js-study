/**
 * Object
 * 
 * Dictionary 에서 method 를 추가할 수 있는 형태인데
 * 이를 객체로 사용한다.
 */


/**
 * const 로 선언한 객체의 특징
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 * 객체를 다른 객체로 변경 불가능 한 것이지 한 객체 안의 데이터를 변경하는 것은 가능하다.
 */



// key : value
let test = {
    yoyo: '요요',
    yoyo1: '요요1',
}

// 보통 언어들에서 사용하는 Dictionary 가 JS 에서는 객체이다.
// property 와 메소드가 존재하겠지.

// 함수 선언방식 한번 더 복습
// function name1(x) {
//     return x;
// }
// const name2 = function(x) {
//     return x;
// }
// const name3 = (x) => x;

let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(yuJin);
console.log(yuJin.name); // yuJin['name']; 와 같은 것이다.
console.log(yuJin.dance());




/**
 * 모든 키 또는 값 다 가져오기
 */
console.log('\n 모든 키 또는 값 다 가져오기');
console.log(Object.keys(yuJin));
console.log(Object.values(yuJin));






/**
 * 변수로 객체를 선언하는 방법
 * runtime 이라 그런지 this.name 가 사용 가능하네
 */
console.log('\n 변수로 객체를 선언하는 방법');



// 방법 1 : key와 value를 각각 변수로 집어 넣기
console.log('\n 방법 1');
const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance: function() {
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

// dictionary 의 성격을 가져서 그런지.
// 새로운 key-value 추가가 dictionary 와 같다.
yuJin2.name = '장원영';
yuJin2.englishName = 'oneyoung';
console.log(yuJin2);
console.log(yuJin2.dance());



// 방법 2: 변수 자체를 key-value 쌍으로 집어 넣기
console.log('\n 방법 2');
const name = '안유진';

const yuJin3 = {
    name,
}
console.log(yuJin3);

