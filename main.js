// 함수 복습

// 기명함수와 익명함수
function sum(){ //x, y는 매개변수
    return arguments[0] + arguments[1] // 이렇게 객체 타입으로 매개변수를 받을 수도 있지만 직관적이지 않음
    console.log() // return 다음에 오는 코드는 실행되지 않음
}

const sum2 = function(x, y){
    return x + y
}

const a = sum(1, 3) // 1, 3은 인수
const b = sum(4, 12)

console.log(a)
console.log(b)
console.log(sum(4, 12)) // 이 방식은 실행마다 함수를 계산해줘야 하기에 좋은 방법이 아니다.