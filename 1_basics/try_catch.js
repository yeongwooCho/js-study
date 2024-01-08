
/** 
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고 표현 (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 표현 (catch)
 * 3) 무조건, 어쨋든, 마침내는 실행되어야 하는 코드 -> finally
 */

function runner() {
    try {
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다.');
    
        console.log('code factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}

runner();
