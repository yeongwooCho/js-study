/**
 * Async theory
 */


// // Sync Programming
// function longWork(){
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      * 1000 milliseconds == 1 seconds
//      */

//     const milliseconds = now.getTime(); // 현재의 시간을 가져온다.
//     const afterTwoSeconds = milliseconds + 2 * 1000;
//     // console.log(milliseconds);  // 1702365542535
//     // console.log(afterTwoSeconds);  // 1702365544535

//     while(new Date().getTime() < afterTwoSeconds) {
//         // 2초 동안 loop
//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');




function longWork(){

    setTimeout(()=>{
        console.log('완료');
    }, 2000);
    
}

console.log('Hello');
longWork();
console.log('World');

