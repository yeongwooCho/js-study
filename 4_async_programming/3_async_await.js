/**
 * Async / Await
 */

const getPromise = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('완료')
        }, seconds * 1000);
    });
}


async function runner() {
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
    } catch(err) {
        console.log(err);
    } finally {
        console.log('finally');
    }

    
    
}

runner();
console.log('실행 끝');