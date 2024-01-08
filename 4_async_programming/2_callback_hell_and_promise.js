/**
 * callback: 다시 불리다.
 * 콜백함수는 함수 포인터를 의미한다.
 * 
 * 함수의 구현부는 내가 갖고 있고 함수의 실행부에서는 
 * 함수의 형태를 모른 상태에서 실행만 하는 구조로 사용된다.
 * 
 * 
 */

// function waitAndRun(){
//     setTimeout(() => {
//         console.log('끝');
//     }, 2000);
// }


// // call back hell
// function waitAndRun2(){
//     setTimeout(() => {
//         console.log('1번 콜백 끝');
//         setTimeout(() => {
//             console.log('2번 콜백 끝');
//             setTimeout(() => {
//                 console.log('3번 콜백 끝');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }
// waitAndRun2();





// /**
//  * Promise
//  * 콜백지옥 문제를 해결하기 위해 Promise가 등장했다.
//  */
// const timeoutPromise = new Promise((resolve, reject) => {

//     setTimeout(()=> {
//         resolve('완료');
//     }, 2000);
// });

// timeoutPromise.then((res) => {
//     // res 는 resolve에서 넣어준 값이다.
//     console.log(res);
// })

/**
 * Promise 객체에 then 을 붙히면 
 * Promise 객체에 전달한 callback 함수가 실행이 된다.
 * resolve -> then, 
 * reject -> catch
 * 뭐든지 -> finally
 * 
 * Promise는 여러개의 Promise를 연결을 할 수 있다.
 */





// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('완료');
//     }, seconds * 1000);
// });

// getPromise(2)
// .then((res) => {
//     console.log("-----first then");
//     console.log(res);

//     return getPromise(2);
// }).then((res) => {
//     console.log("-----second then");
//     console.log(res);

//     return getPromise(4);
// }).then((res) => {
//     console.log("-----third then");
//     console.log(res);
// });





// const getPromise = (seconds) => new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject('완료');
//     }, seconds * 1000);
// });

// getPromise(2)
//     .then((res) => {
//         console.log("-----first then");
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log("-----first catch");
//         console.log(err);
//     })
//     .finally(()=> {
//         console.log("-----finally");
//     });





/**
 * Promise 의 then은 동기적으로 실행이 된다.
 * 그런데 Promise 끼리 서로 의존성이 없으면 이 Promise를 동시에 실행시키는 방법이 존재한다.
 * 
 */

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('완료');
    }, seconds * 1000);
});

Promise.all([
    getPromise(1),
    getPromise(2),
    getPromise(5),
]).then((res) => {
    console.log(res);
});