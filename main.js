// 호이스팅(Hoisting)
// 함수 선언(부)가 유효범위(SCOPE) 최상단으로 끌어올려지는 현상
// 함수 선언 vs 함수 표현

const a = 7

double()

function double(){
    console.log(a * 2)
}