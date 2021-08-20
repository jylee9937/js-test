// 화살표 함수
// () => {} vs function () {}

const double = function(x){
    return x * 2
}
console.log('bouble: ', double(7))

const doubleArrow = (x) => {
    // return x * 2 // 화살표 함수에서 return문은 생략할 수 있다.
    x * 2
}
const doubleArrow2 = x => x * 2
    // 이렇게 완전축약형도 가능하다.
    // 블록 형태로 만들어지기 때문에 객체 데이터 반환시에는 ()로 감싸줘야 한다.
console.log('doubleArrow', doubleArrow(7))