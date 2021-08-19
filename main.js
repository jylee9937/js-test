// 변수 유효범위(Variable Scope)
// var 함수레벨의 변수 의도하지 않은 사용이 일어날 수 있고, 메모리 누수가 일어날 수 있음
// let, const 블록레벨의 변수

function scope(){
  if(true){
    const a = 123
    console.log(a)
  }
}
scope()