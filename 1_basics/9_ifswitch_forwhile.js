
/**
 * 조건문 if, else if, else switch(break 씀)
 */

let ifNumber = 5;

if(ifNumber % 2 === 0) {
    console.log('2의 배수');
} else if(ifNumber % 3 === 0) {
    console.log('3의 배수');
} else {
    console.log('아무것도 아님');
}


const englishDay = 'monday';
let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;
}
console.log(koreanDay);
console.log('\n');






/**
 * 반복문
 * while, do-while(쓰지마셈)
 * for
 * break, continue
 */

let numberWhile = 0;
while(numberWhile < 3) {
    console.log(numberWhile);
    numberWhile ++;
}



for(let i = 0; i < 3; i++) {
    console.log(i);
}
console.log('\n');



/**
 * for .. in (key 값 반환)
 * 
 * Map 에서 하나씩 뽑으면 key만 나오네
 * Map 에서 string 표시 안해도 string으로 나오네.
 * List 에서도 key 값이 나오고 index 값이 나오네.
 */

const yujin = {
    name: '안유진',
    year: 2003,
}

for(let key in yujin){
    console.log(key);
    console.log(typeof key);
    console.log('------');
}

const memberArray = ['0멤버', '1멤버', '2멤버', '3멤버', ];
for(let key in memberArray){
    console.log(key);
    console.log(memberArray[key]);
    console.log(typeof key);
    console.log('------');
}
console.log('\n');



/**
 * for ... of (value 값 반환)
 * 
 * looping 가능한 iterable 만 사용 가능하다.
 * array 사용가능
 */
for(let value of memberArray) {
    console.log(value);
}
console.log('\n');



/**
 * break, continue
 * === 사용하는 점 주의
 */

for(let i = 0; i < 5; i++){
    if(i === 2) {
        continue; 
    } else if (i === 4) {
        break;
    }
}
