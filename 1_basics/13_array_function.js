/**
 * Array Functions
 * 실무에서 많이 사용하는 것만 축약
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);




/**
 * 추가 및 삭제
 * 
 * immutable programming 에서는 데이터를 추가, 삭제하지 않고
 * 새롭게 인스턴스를 생성해서 사용한다.
 * 권장하는 방법은 아니다.
 */

// 추가: 끝에 추가, 반환 값: 추가 후 length
console.log('\n push');
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

// 삭제: 끝 삭제, 반환 값: pop 된 데이터
console.log('\n pop');
console.log(iveMembers.pop());
console.log(iveMembers);

// shift() : 첫번째 데이터 삭제, 반환 값: 삭제된 데이터
console.log('\n shift');
console.log(iveMembers.shift())
console.log(iveMembers);

// unshift() : 첫번째 데이터 추가, 반환 값: 추가 후 length
console.log('\n unshift');
console.log(iveMembers.unshift('코드팩토리'))
console.log(iveMembers);

// splice: 구간 삭제, 반환 값: 삭제된 데이터 리스트
console.log('\n splice');
console.log(iveMembers.splice(0, 3)); // 인덱스 0부터 몇개?
console.log(iveMembers);





/**
 * 기존 array를 건드리지 않고 새로운 인스턴스를 만들어
 * 추가 삭제 후 반환하는 메소드
 */

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// push vs concat
// concat() : 새로운 array에 데이터를 추가해 반환
console.log('\n concat');
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers); // 변경사항 없음


// splice vs slice
// slice() : 새로운 array에 구간 삭제 후 반환
// splice: 첫번째 인덱스부터(이상) 몇개 지울꺼?
// slice: 첫번째 인덱스부터(이상) 어디 인덱스까지(미만)
console.log('\n slice');
console.log(iveMembers.slice(0, 3)); // // 인덱스 0이상 3미만
console.log(iveMembers); // 변경사항 없음





/**
 * spread operator
 * 기존 리스트의 데이터만 흩뿌려서 가져오기
 * === 는 같은 타입, 같은 값, 같은 인스턴스인지를 확인한다.
 */

let iveMembers2 = [
    ...iveMembers,
];
let iveMembers3 = iveMembers;
console.log('\n spread'); 
console.log(iveMembers2);
console.log(iveMembers3);
console.log(iveMembers2 === iveMembers3); // false





/** 
 * 압도적으로 많이 사용하는 것
 * join, sort
 */

// join: string으로 값 합치기
console.log('\n join');
console.log(iveMembers.join()); //안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/ ')); //안유진/ 가을/ 레이/ 장원영/ 리즈/ 이서

// sort: 오름차순 정렬
console.log('\n sort');
iveMembers.sort(); // 반환 값 없음, 실제 array 를 건드림
console.log(iveMembers); 

// reverse: 데이터 반대로 반환
// sort와 같이 사용하면 내림차순 가능
console.log('\n reverse');
console.log(iveMembers.reverse()); // 반환 O, 실제 데이터 변환
console.log(iveMembers); 


console.log('\n sort 실전');
let numbers = [1, 7, 3, 5, 9, 2, 8];
numbers.sort((a,b) =>  a > b);  // 변화 없음
console.log(numbers);
numbers.sort((a,b) =>  a > b ? 1 : -1);
console.log(numbers);
numbers.sort((a,b) =>  a < b ? 1 : -1);
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환




/**
 * 고급 함수
 * map, filter, find, findIndex, reduce
 */


// map
console.log('\n map');
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));


// filter: 해당하는 데이터들 리스트로 반환
console.log('\n filter');
console.log(`numbers: ${numbers}`);

console.log(numbers.filter((x) => x % 2 === 0));


// find: 해당하는 가장 첫번째 데이터만 반환
console.log('\n find');
console.log(numbers.find((x) => x % 2 === 0));


// findIndex: 해당하는 가장 첫번째 데이터의 인덱스 반환
console.log('\n findIndex');
console.log(numbers.findIndex((x) => x % 2 === 0));


// reduce: 첫번째는 로직, 두번째는 시작하고 싶은 값
// 새로운 데이터가 next에 계속 들어간다.
// 처음 previous 에 대한 데이터는 두번째 파라미터에 들어간 값이다.
console.log('\n reduce');
console.log(numbers.reduce((previous, next) => previous + next, 0));


