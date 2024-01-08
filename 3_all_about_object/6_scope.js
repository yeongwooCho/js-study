/**
 * Scope
 * 가장 가까운 Scope의 변수를 가져온다.
 */

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`numberOne numberOne : ${numberOne}`);
        console.log(`levelTwo numberTwo : ${numberTwo}`);
    }
    levelTwo();
    console.log(`numberOne numberOne : ${numberOne}`);
}

levelOne();

/**
 * JS -> Lexical Scope: 선언된 위치가 상위 스코프를 정한다.
 * 답 3
 * 
 * Dynamic Scope: 실행한 위치가 상위 스코프를 정한다.
 * 답 99
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne(); // numberThree는 어디서 변수를 가져올까? 답: 3

/**
 * JS에서는 선언된 위치에서의 numberThree 의 값을 뽑아낸다.
 * functionOne()을 호출하면 functionTwo()가 실행된다.
 * 이때 functionTwo() 가 선언된 위치는 global Scope이다.
 * 이때 functionTwo() 가 실행된 위치는 functionOne Scope이다.
 * 
 * 즉, Lexical Scope는 선언된 위치가 global이기에 
 * global에 있는 numberThree=3을 가져온다.
 */





/**
 * var, let, const 가 scope를 만드는 차이를 보자.
 */



/**
 * var
 * var 선언시 scope가 생성되는 경우는 function 뿐이다.
 * for, if, while 는 var 키워드로 변수 생성시
 * 새로운 scope를 만들지 않는다.
 */

var i = 999

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 10


i = 999

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 999


/**
 * let, const
 * for, if, while 같은 block level scope에서도
 * 새로운 scope를 만든다.
 */