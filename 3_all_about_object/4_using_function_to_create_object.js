// /**
//  * Using function to create objects
//  */

// // 이전의 방법
// function IdolModel(name, year) {
//     this.name = name;
//     this.year = year;

//     this.dance = function(){
//         return `${this.name}이 춤을 춥니다.`;
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);
// console.log(yuJin.dance());

// const yuJin2 = IdolModel('안유진', 2003); 
// console.log(yuJin2);  // undefinded: new 선언 안하면.




// /**
//  * 그럼 new 선언을 하지 않은 IdolModel의
//  * name과 year은 어디로 갔을까? 
//  * 
//  * global 객체
//  * 이 파일이 생성이 되었을때 생성되는 객체이다.
//  * global객체는 JS를 node.js에서 실행을 할때 필요한 값들을 다 들고있다.
//  * 
//  * 웹의 window object == node.js 에서 global object
//  */
// console.log('\n global');
// console.log(global.name);
// console.log(global.year);






console.log('\n IdolModelThisPrint\n');
function IdolModelThisPrint(name, year) {
    if(!new.target) {
        return new IdolModelThisPrint(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJinThisPrint = new IdolModelThisPrint('안유진', 2003);
const yuJinThisPrint2 = IdolModelThisPrint('안유진', 2003); 
console.log(yuJinThisPrint);
console.log(yuJinThisPrint2);




/**
 * Arrow 함수는 어떤가? 
 * function constructor를 만들 수 있는가? NO
 * 
 * new 키워드는 일반 함수에서만 사용할 수 있다.
 * 
 */

// const IdolModelArrow = (name, year) => {
//     this.name = name;
//     this.year = year;
// };
// const yuJinArrow = new IdolModelArrow('안유진', 2003);
// console.log(yuJinArrow);
